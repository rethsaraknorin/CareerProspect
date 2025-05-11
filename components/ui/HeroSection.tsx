"use client";

import React from "react";
import { PlayCircle } from "lucide-react";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left column - Text content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Looking for that perfect major?
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
                Find your best-fit major and build your future with confidence!
              </p>
              <div>
                <Link 
                  href="/sign-up" 
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent rounded-full text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
                >
                  Get Started
                </Link>
              </div>
            </div>
            
            {/* Right column - Phone mockup */}
            <div className="relative">
              {/* Purple circle background */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full opacity-80 z-0"></div>
              
              {/* Phone mockup */}
              <div className="relative z-10 flex justify-center">
                <div className="w-64 h-auto bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                  
                  {/* Phone notch */}
                  <div className="w-20 h-3 mx-auto my-4 bg-black rounded-full"></div>

                  {/* Phone screen */}
                  <div className="h-96 bg-white flex flex-col items-center justify-center space-y-6">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <PlayCircle className="h-12 w-12 text-blue-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-800">
                      Career Prospect
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
