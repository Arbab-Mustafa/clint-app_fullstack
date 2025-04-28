"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ApplicationPage() {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    businessName: "",
    businessType: "",
    yearsInBusiness: "",
    monthlyRevenue: "",
    fundingAmount: "",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    hasMCA: "no",
    currentMCAAmount: "",
    currentMCAPayment: "",
  });

  const handleInputChange = (e:  any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOptionSelect = (option:any) => {
    setSelectedOption(option);
    setStep(2);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    alert("Application submitted successfully! Our team will contact you shortly.");
    // Reset form or redirect
    setStep(1);
    setSelectedOption("");
    setFormData({
      businessName: "",
      businessType: "",
      yearsInBusiness: "",
      monthlyRevenue: "",
      fundingAmount: "",
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      hasMCA: "no",
      currentMCAAmount: "",
      currentMCAPayment: "",
    });
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">
              What does your <span className="text-accent-color">business</span> need?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Business Line of Credit Card */}
              <div 
                className="card primary-card cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleOptionSelect("Business Line of Credit")}
              >
                <h3 className="text-2xl font-bold mb-6">Business Line of Credit</h3>
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
                    <span>$10K - $750K</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Unlimited Terms, Incredible Rates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Your Credit Score Won't be Affected</span>
                  </li>
                </ul>
              </div>
              
              {/* Working Capital Advance Card */}
              <div 
                className="card accent-card cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => handleOptionSelect("Working Capital Advance")}
              >
                <h3 className="text-2xl font-bold mb-6">Working Capital Advance</h3>
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
                    <span>$10K - $2M</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Terms from 4 - 14mo.</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Automatic Daily or Weekly Payments</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mb-6 mt-8">
              <p className="text-gray-700">
                For <strong>B2B Buy Now, Pay Later</strong> please apply through your merchants link.
              </p>
              <p className="text-gray-700 mt-2">
                If you have any questions you can call us at <a href="tel:+1234567890" className="text-accent-color font-semibold">(123) 456-7890</a>
              </p>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">
              Tell us about your <span className="text-accent-color">business</span>
            </h2>
            <p className="text-gray-600 mb-8">You've selected: <span className="font-semibold">{selectedOption}</span></p>
            
            <form onSubmit={(e) => {e.preventDefault(); setStep(3)}} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="businessName" className="block text-gray-700 font-medium mb-2">Business Name</label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="businessType" className="block text-gray-700 font-medium mb-2">Business Type</label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                    required
                  >
                    <option value="">Select Business Type</option>
                    <option value="Sole Proprietorship">Sole Proprietorship</option>
                    <option value="Partnership">Partnership</option>
                    <option value="LLC">LLC</option>
                    <option value="Corporation">Corporation</option>
                    <option value="S-Corporation">S-Corporation</option>
                    <option value="Non-Profit">Non-Profit</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="yearsInBusiness" className="block text-gray-700 font-medium mb-2">Years in Business</label>
                  <select
                    id="yearsInBusiness"
                    name="yearsInBusiness"
                    value={formData.yearsInBusiness}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                    required
                  >
                    <option value="">Select Years</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-10 years">5-10 years</option>
                    <option value="10+ years">10+ years</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="monthlyRevenue" className="block text-gray-700 font-medium mb-2">Average Monthly Revenue</label>
                  <select
                    id="monthlyRevenue"
                    name="monthlyRevenue"
                    value={formData.monthlyRevenue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                    required
                  >
                    <option value="">Select Monthly Revenue</option>
                    <option value="Less than $10,000">Less than $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                    <option value="$250,000+">$250,000+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="fundingAmount" className="block text-gray-700 font-medium mb-2">Requested Funding Amount</label>
                <select
                  id="fundingAmount"
                  name="fundingAmount"
                  value={formData.fundingAmount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                  required
                >
                  <option value="">Select Amount</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                  <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                  <option value="$100,000 - $250,000">$100,000 - $250,000</option>
                  <option value="$250,000 - $500,000">$250,000 - $500,000</option>
                  <option value="$500,000 - $1,000,000">$500,000 - $1,000,000</option>
                  <option value="$1,000,000+">$1,000,000+</option>
                </select>
              </div>
              
              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="primary-btn"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">
              Your <span className="text-accent-color">contact</span> information
            </h2>
            
            <form onSubmit={(e) => {e.preventDefault(); setStep(4)}} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Business Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="zipCode" className="block text-gray-700 font-medium mb-2">Zip Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                    required
                  />
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="primary-btn"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        );
      case 4:
        return (
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-6">
              Current <span className="text-accent-color">funding</span> information
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Do you currently have any Merchant Cash Advances?</label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasMCA"
                      value="yes"
                      checked={formData.hasMCA === "yes"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasMCA"
                      value="no"
                      checked={formData.hasMCA === "no"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              
              {formData.hasMCA === "yes" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="currentMCAAmount" className="block text-gray-700 font-medium mb-2">Current MCA Amount</label>
                    <input
                      type="text"
                      id="currentMCAAmount"
                      name="currentMCAAmount"
                      value={formData.currentMCAAmount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="currentMCAPayment" className="block text-gray-700 font-medium mb-2">Current Daily/Weekly Payment</label>
                    <input
                      type="text"
                      id="currentMCAPayment"
                      name="currentMCAPayment"
                      value={formData.currentMCAPayment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-color"
                    />
                  </div>
                </div>
              )}
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-2">Important Information</h3>
                <p className="text-gray-700 mb-4">
                  When completing your application, it's really important to be completely transparent. We want to help you get the funding you need, but also want to ensure that you can afford it.
                </p>
                <p className="text-gray-700">
                  We believe in a "right-sized deal" that will help you reach your goals sustainably without straining your business.
                </p>
              </div>
              
              <div className="flex items-center mb-6">
                <input
                  type="checkbox"
                  id="agreement"
                  required
                  className="mr-2"
                />
                <label htmlFor="agreement" className="text-gray-700">
                  I agree to the <Link href="/terms" className="text-accent-color hover:underline">Terms and Conditions</Link> and <Link href="/privacy" className="text-accent-color hover:underline">Privacy Policy</Link>
                </label>
              </div>
              
              <div className="flex justify-between items-center pt-4">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="primary-btn"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 bg-blue-50 p-6 md:p-10">
        <div className="sticky top-10">
          <Link href="/" className="block mb-8">
            <Image 
              src="/logo.jpg" 
              alt="Selective Capital Logo" 
              width={150} 
              height={50} 
              className="h-10 w-auto"
            />
          </Link>
          
          <h1 className="text-3xl font-bold mb-10 text-gray-800">
            Get Funded in a Few Easy Steps
          </h1>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-2">Been here before?</p>
            <Link href="/login" className="text-accent-color font-semibold hover:underline">
              Log in
            </Link>
          </div>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary-color flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700">Your credit score won't be affected</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary-color flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700">Your information is protected</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-primary-color flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700">Obligation-free approval</p>
              </div>
            </div>
          </div>
          
          {/* Application Progress */}
          <div className="mb-10">
            <h3 className="text-lg font-semibold mb-4">Application Progress</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${step >= 1 ? 'bg-accent-color text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <p className={`${step >= 1 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>Select Funding Option</p>
              </div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${step >= 2 ? 'bg-accent-color text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <p className={`${step >= 2 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>Business Information</p>
              </div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${step >= 3 ? 'bg-accent-color text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
                <p className={`${step >= 3 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>Contact Details</p>
              </div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${step >= 4 ? 'bg-accent-color text-white' : 'bg-gray-200 text-gray-500'}`}>
                  4
                </div>
                <p className={`${step >= 4 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>Funding Information</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-gray-700 font-semibold">TrustScore 4.9</p>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <p className="text-gray-600 ml-2">203 reviews</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="w-full md:w-2/3 p-6 md:p-10">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-accent-color h-full rounded-full" 
              style={{ width: `${step * 25}%` }}
            ></div>
          </div>
        </div>
        
        {renderStepContent()}
      </div>
    </div>
  );
}
