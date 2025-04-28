"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GradientText, Section, Card, GradientButton } from "../../components/ui/StyleComponents";

export default function FundingSolutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Section bgColor="bg-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible <GradientText>Funding Solutions</GradientText> for Your Business
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Selective Capital offers tailored financial solutions designed to help your business grow and succeed.
            </p>
            <GradientButton href="/application" className="mb-4 md:mb-0">
              Apply Now
            </GradientButton>
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
      </Section>

      {/* Funding Options Section */}
      <Section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Funding Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card variant="primary" className="p-8">
            <h3 className="text-2xl font-bold mb-4">Business Line of Credit</h3>
            <p className="mb-6">Access revolving capital when you need it with our flexible Business Line of Credit solution.</p>
            
            <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Draw Funds Any Time</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>$10K - $750K Available</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Unlimited Terms, Competitive Rates</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Only Pay Interest on What You Use</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Your Credit Score Won't be Affected</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <Link href="/application" className="text-white font-semibold hover:underline flex items-center">
                Apply for a Business Line of Credit
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </Card>
          
          <Card variant="accent" className="p-8">
            <h3 className="text-2xl font-bold mb-4">Working Capital Advance</h3>
            <p className="mb-6">Get the capital you need quickly with our Working Capital Advance solution.</p>
            
            <h4 className="text-xl font-semibold mb-3">Key Features:</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Flexible: No Collateral Required</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>$10K - $2M Available</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Terms from 4 - 14 months</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Automatic Daily or Weekly Payments</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Quick Approval Process</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <Link href="/application" className="text-white font-semibold hover:underline flex items-center">
                Apply for Working Capital Advance
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </Card>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-bold mb-4">B2B Buy Now, Pay Later</h3>
          <p className="text-gray-700 mb-6">
            Our B2B Buy Now, Pay Later solution allows your business to make essential purchases while managing cash flow effectively.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Flexible Payment Terms</h4>
              <p className="text-gray-600">
                Choose payment terms that work for your business cycle, from 30 to 120 days.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Preserve Cash Flow</h4>
              <p className="text-gray-600">
                Keep your cash available for other business needs while still making necessary purchases.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Simple Application</h4>
              <p className="text-gray-600">
                Apply through your merchant's link for a streamlined approval process.
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 mt-6">
            For B2B Buy Now, Pay Later, please apply through your merchant's link or contact us for more information.
          </p>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section bgColor="bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
            <p className="text-gray-600">
              Complete our simple application form in just a few minutes.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Pre-Approved</h3>
            <p className="text-gray-600">
              Receive a pre-approval decision quickly, often within hours.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Submit Documents</h3>
            <p className="text-gray-600">
              Provide the required documentation to finalize your application.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-xl font-bold">4</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Funded</h3>
            <p className="text-gray-600">
              Receive your funds quickly, often within 24-48 hours after approval.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">What are the requirements to qualify?</h3>
            <p className="text-gray-600 mb-6">
              Basic requirements include being in business for at least 6 months, having a minimum monthly revenue of $10,000, and maintaining a business bank account. Credit score requirements vary by funding solution.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">How quickly can I get funded?</h3>
            <p className="text-gray-600 mb-6">
              After approval, funding typically occurs within 24-48 hours, depending on your bank and the funding solution selected.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Will applying affect my credit score?</h3>
            <p className="text-gray-600">
              No, applying for funding with Selective Capital will not affect your credit score. We perform a soft credit pull during the pre-approval process.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3">What documents will I need to provide?</h3>
            <p className="text-gray-600 mb-6">
              Typically, you'll need to provide 3-6 months of business bank statements, a copy of your business license or formation documents, and a valid ID. Additional documents may be required based on your specific situation.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Can I have multiple funding solutions at once?</h3>
            <p className="text-gray-600 mb-6">
              Yes, depending on your business's financial health and cash flow, you may qualify for multiple funding solutions simultaneously.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">What if I have existing business debt?</h3>
            <p className="text-gray-600">
              Having existing business debt doesn't automatically disqualify you. We evaluate each application based on overall business health and cash flow to determine eligibility.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="gradient-bg" className="text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply now and get pre-approved in minutes. Our team is ready to help you find the right funding solution.
          </p>
          <Link href="/application" className="bg-white text-accent-color py-3 px-8 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-block">
            Start Your Application
          </Link>
        </div>
      </Section>
    </div>
  );
}
