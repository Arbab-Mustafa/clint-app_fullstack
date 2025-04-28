"use client";

import React from "react";
import Link from "next/link";

// Custom button component with gradient hover effect
export const GradientButton = ({ 
  href, 
  children, 
  className = "",
  variant = "primary" 
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
  variant?: "primary" | "secondary" 
}) => {
  return (
    <Link 
      href={href} 
      className={`
        inline-block px-6 py-3 font-semibold rounded-md transition-all duration-300
        ${variant === "primary" 
          ? "bg-accent-color text-white hover:shadow-lg hover:translate-y-[-2px]" 
          : "bg-primary-color text-white hover:shadow-lg hover:translate-y-[-2px]"}
        ${className}
      `}
    >
      {children}
    </Link>
  );
};

// Card component with consistent styling
export const Card = ({ 
  children, 
  className = "",
  variant = "white"
}: { 
  children: React.ReactNode; 
  className?: string;
  variant?: "white" | "primary" | "secondary" | "accent" 
}) => {
  const bgColor = {
    white: "bg-white",
    primary: "bg-primary-color text-white",
    secondary: "bg-secondary-color text-white",
    accent: "bg-accent-color text-white"
  };

  return (
    <div className={`
      rounded-lg shadow-card p-6 transition-all duration-300 hover:shadow-card-hover hover:translate-y-[-5px]
      ${bgColor[variant]}
      ${className}
    `}>
      {children}
    </div>
  );
};

// Gradient text component
export const GradientText = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string 
}) => {
  return (
    <span className={`bg-gradient-primary bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
};

// Section container with consistent padding
export const Section = ({ 
  children, 
  className = "",
  bgColor = "bg-white"
}: { 
  children: React.ReactNode; 
  className?: string;
  bgColor?: string;
}) => {
  return (
    <section className={`py-12 md:py-20 ${bgColor} ${className}`}>
      <div className="container mx-auto px-6">
        {children}
      </div>
    </section>
  );
};

// Animated gradient background
export const GradientBackground = ({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string 
}) => {
  return (
    <div className={`bg-gradient-primary animate-gradient-x ${className}`}>
      {children}
    </div>
  );
};
