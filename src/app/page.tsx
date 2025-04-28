"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The <span className="gradient-text">Fastest</span> and <span className="gradient-text">Easiest</span> Way to Fund your Business
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Unlock up to $2M in funding at competitive rates customized for your business growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/application" className="primary-btn text-center">
                  Apply Online!
                </Link>
                <p className="text-gray-600 mt-2 sm:mt-0 sm:ml-4 flex items-center">
                  Or give us a call at <a href="tel:+1234567890" className="ml-2 font-semibold hover:text-accent-color">(123) 456-7890</a>
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <Image 
                src="/logo.jpg" 
                alt="Selective Capital Logo" 
                width={600} 
                height={400}
                className="rounded-lg shadow-xl p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Selective Capital</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">You're the Boss</h3>
              <p className="text-gray-600">
                As a business owner, you know your business best. When working with our dedicated team, we'll help create a solution that is best suited to your needs.
              </p>
            </div>
            
            <div className="card bg-white">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Your Terms</h3>
              <p className="text-gray-600">
                We can help tailor your funding to fit your business, adjusting payment options for daily, weekly, or semi-monthly payments.
              </p>
            </div>
            
            <div className="card bg-white">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Application</h3>
              <p className="text-gray-600">
                Our application is fast and easy. It takes just a few minutes to get the process started; your pre-approval is just minutes away!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">See how other business owners feel about working with us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card bg-white">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast & reliable funding</h3>
              <p className="text-gray-600">
                "The team at Selective Capital is extremely helpful when it comes to getting the funding you need quickly."
              </p>
            </div>
            
            <div className="card bg-white">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2">Great customer service</h3>
              <p className="text-gray-600">
                "The representatives are awesome to work with. They understand small business needs and are very responsive."
              </p>
            </div>
            
            <div className="card bg-white">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2">Flexible terms</h3>
              <p className="text-gray-600">
                "They are a reliable lender. Great terms, competitive rates, and they really work with you to find the right solution."
              </p>
            </div>
            
            <div className="card bg-white">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional service</h3>
              <p className="text-gray-600">
                "Very professional and efficient. The entire process was smooth from application to funding."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to grow your business?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Apply now and get pre-approved in minutes. Our team is ready to help you find the right funding solution.
          </p>
          <Link href="/application" className="bg-white text-accent-color py-3 px-8 rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}
