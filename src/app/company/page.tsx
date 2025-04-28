"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GradientText, Section, Card, GradientButton } from "../../components/ui/StyleComponents";

export default function CompanyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Section bgColor="bg-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <GradientText>Selective Capital</GradientText>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're dedicated to helping businesses grow with flexible, tailored financial solutions that meet your unique needs.
            </p>
            <GradientButton href="/application" className="mb-4 md:mb-0">
              Work With Us
            </GradientButton>
          </div>
          <div className="hidden md:block">
            <Image 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
              alt="Selective Capital Team" 
              width={600} 
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </Section>

      {/* Our Story Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <p className="text-lg text-gray-700 mb-6">
            Selective Capital was founded with a simple mission: to provide businesses with the capital they need to grow and succeed, without the constraints and complications of traditional financing.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Our founders recognized that many promising businesses were being held back by limited access to capital. Traditional lenders often imposed rigid requirements that didn't account for the unique circumstances and potential of each business.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We set out to change that by creating funding solutions that are flexible, accessible, and tailored to the specific needs of each business we work with. Our approach focuses on understanding your business goals and challenges, then designing a funding solution that helps you achieve those goals.
          </p>
          <p className="text-lg text-gray-700">
            Today, Selective Capital has helped thousands of businesses across diverse industries unlock their potential through our innovative funding solutions. We take pride in being a partner in our clients' success, not just a capital provider.
          </p>
        </div>
      </Section>

      {/* Our Values Section */}
      <Section bgColor="bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-8">
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-gray-600">
              We believe in complete transparency and honesty in all our dealings. We'll always provide clear information about our funding solutions and ensure you understand exactly what you're signing up for.
            </p>
          </Card>
          
          <Card className="text-center p-8">
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Partnership</h3>
            <p className="text-gray-600">
              We see ourselves as partners in your success, not just a funding source. We're committed to building long-term relationships based on mutual growth and success.
            </p>
          </Card>
          
          <Card className="text-center p-8">
            <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-600">
              We continuously evolve our funding solutions to meet the changing needs of businesses in today's dynamic economy. We're always looking for new ways to help our clients succeed.
            </p>
          </Card>
        </div>
      </Section>

      {/* Leadership Team Section */}
      <Section>
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="mb-4 relative w-48 h-48 mx-auto">
              <Image 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                alt="CEO" 
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Michael Anderson</h3>
            <p className="text-accent-color font-medium mb-3">Chief Executive Officer</p>
            <p className="text-gray-600">
              With over 20 years of experience in financial services, Michael leads our company with a focus on innovation and client success.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 relative w-48 h-48 mx-auto">
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" 
                alt="COO" 
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
            <p className="text-accent-color font-medium mb-3">Chief Operations Officer</p>
            <p className="text-gray-600">
              Sarah oversees our day-to-day operations, ensuring we deliver exceptional service and efficient funding solutions to all clients.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-4 relative w-48 h-48 mx-auto">
              <Image 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                alt="CTO" 
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-1">David Chen</h3>
            <p className="text-accent-color font-medium mb-3">Chief Technology Officer</p>
            <p className="text-gray-600">
              David leads our technology initiatives, developing innovative solutions that streamline the funding process for our clients.
            </p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section bgColor="bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Selective Capital</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Fast Funding</h3>
              <p className="text-gray-600">
                Get the capital you need quickly, with funding often available within 24-48 hours after approval.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
              <p className="text-gray-600">
                Our funding solutions are designed to fit your business needs, with customizable terms and payment options.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Transparent Process</h3>
              <p className="text-gray-600">
                We believe in complete transparency, with no hidden fees or complicated terms. You'll always know exactly what you're getting.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-600">
                Our team of funding specialists is always available to answer your questions and provide guidance throughout the process.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Growth-Focused</h3>
              <p className="text-gray-600">
                We're committed to helping your business grow. Our funding solutions are designed to support your long-term success.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
              <p className="text-gray-600">
                With years of experience across diverse industries, we understand the unique challenges and opportunities your business faces.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about our funding solutions or want to learn more about how we can help your business? Our team is here to help.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-color mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-700">(123) 456-7890</p>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-color mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-700">info@selectivecapital.com</p>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent-color mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-700">123 Business Avenue, Suite 500<br />New York, NY 10001</p>
              </div>
            </div>
            
            <GradientButton href="/application" className="mb-4 md:mb-0">
              Apply Now
            </GradientButton>
          </div>
          
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="text-gray-700 font-medium">Monday - Friday</p>
                <p className="text-gray-700">9:00 AM - 6:00 PM EST</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700 font-medium">Saturday</p>
                <p className="text-gray-700">10:00 AM - 2:00 PM EST</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700 font-medium">Sunday</p>
                <p className="text-gray-700">Closed</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
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
