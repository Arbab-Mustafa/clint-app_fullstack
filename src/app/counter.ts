'use server'
import { getCloudflareContext } from '@opennextjs/cloudflare'
import { headers } from 'next/headers'

// 增加计数并记录访问
export async function incrementAndLog() {
  const cf = await getCloudflareContext()
  const headersList = await headers()

  const { results: countResults } = await cf.env.DB.prepare(
    'INSERT INTO counters (name, value) VALUES (?, 1) ON CONFLICT (name) DO UPDATE SET value = value + 1 RETURNING value'
  )
    .bind('page_views')
    .all()

  await cf.env.DB.prepare('INSERT INTO access_logs (ip, path, accessed_at) VALUES (?, ?, datetime())')
    .bind(
      headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown',
      headersList.get('x-forwarded-host') || '/'
    )
    .run()

  const { results: logs } = await cf.env.DB.prepare('SELECT * FROM access_logs ORDER BY accessed_at DESC LIMIT 5').all()

  return {
    count: countResults[0].value,
    recentAccess: logs
  } as { count: number; recentAccess: { accessed_at: string }[] }
}

// 获取当前计数和最近访问
export async function getStats() {
  const cf = await getCloudflareContext()
  const { results: count } = await cf.env.DB.prepare('SELECT value FROM counters WHERE name = ?')
    .bind('page_views')
    .all()

  const { results: logs } = await cf.env.DB.prepare(
    'SELECT accessed_at FROM access_logs ORDER BY accessed_at DESC LIMIT 5'
  ).all()

  return {
    count: count[0]?.value || 0,
    recentAccess: logs
  } as { count: number; recentAccess: { accessed_at: string }[] }
}
