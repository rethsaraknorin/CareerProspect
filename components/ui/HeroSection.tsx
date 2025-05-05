import React from 'react';
import { PlayCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left column - Text content */}
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Looking that perfect major in university ?
              </h1>
              <p className="text-lg text-gray-600 max-w-lg">
              Find Your Best-Fit Major & Build Your Future!
              </p>
              <div>
                <a 
                  href="/get-started" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                >
                  Get Started
                </a>
              </div>
            </div>
            
            {/* Right column - Phone mockup */}
            <div className="relative">
              {/* Purple circle background */}
              <div className="absolute right-0 w-64 h-64 bg-blue-200 rounded-full opacity-80 z-0"></div>
              
              {/* Phone mockup */}
              <div className="relative z-10 flex justify-center">
                <div className="relative w-64 h-full">
                  {/* Phone frame */}
                  <div className="relative w-full h-full">
                    <div className="w-64 h-auto bg-gray-900 rounded-3xl overflow-hidden shadow-xl">
                      {/* Phone notch */}
                      <div className="w-1/2 h-6 mx-auto bg-black rounded-b-xl"></div>
                      
                      {/* Phone screen */}
                      <div className="h-96 bg-white p-4 flex flex-col items-center justify-center">
                        {/* App logo and content */}
                        <div className="flex flex-col items-center space-y-4">
                          <div className="bg-blue-100 p-4 rounded-full">
                            <PlayCircle className="h-10 w-10 text-blue  -600 transform rotate-180" />
                          </div>
                          <span className="text-xl font-medium text-gray-800">Career Prospect</span>
                        </div>
                      </div>
                    </div>
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