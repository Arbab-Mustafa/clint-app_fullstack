"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="header bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.jpg" 
              alt="Selective Capital Logo" 
              width={150} 
              height={50} 
              className="h-10 w-auto"
            />
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/funding-solutions" className="text-gray-700 hover:text-accent-color transition-colors">
            Funding Solutions
          </Link>
          <Link href="/company" className="text-gray-700 hover:text-accent-color transition-colors">
            Company
          </Link>
        </nav>
        
        <div className="flex items-center">
          <Link href="/application" className="primary-btn">
            Apply Now!
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
