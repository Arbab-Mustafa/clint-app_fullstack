"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Selective Capital</h3>
            <p className="text-gray-600 mb-4">
              Tailored financial solutions to help your business grow.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/funding-solutions" className="text-gray-600 hover:text-accent-color transition-colors">
                  Business Funding
                </Link>
              </li>
              <li>
                <Link href="/funding-solutions" className="text-gray-600 hover:text-accent-color transition-colors">
                  Working Capital
                </Link>
              </li>
              <li>
                <Link href="/funding-solutions" className="text-gray-600 hover:text-accent-color transition-colors">
                  Line of Credit
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company" className="text-gray-600 hover:text-accent-color transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company" className="text-gray-600 hover:text-accent-color transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-accent-color transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">
              <a href="tel:+1234567890" className="hover:text-accent-color transition-colors">
                (123) 456-7890
              </a>
            </p>
            <p className="text-gray-600 mb-4">
              <a href="mailto:info@selectivecapital.com" className="hover:text-accent-color transition-colors">
                info@selectivecapital.com
              </a>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-accent-color transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-accent-color transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 text-center">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} Selective Capital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
