"use client";

import React from "react";
import { Search, Target, TrendingUp } from "lucide-react";

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-12 text-gray-900">
          How It Works
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
          
          {/* Step 1 - Explore Majors */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Search className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Explore Majors</h3>
            <p className="text-gray-600">
              Browse different majors offered at NUM to find the best match for you.
            </p>
          </div>

          {/* Step 2 - Find Career Matches */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <Target className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Find Career Matches</h3>
            <p className="text-gray-600">
              Discover potential career paths that match your major and skills.
            </p>
          </div>

          {/* Step 3 - Build Your Future */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <TrendingUp className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Build Your Future</h3>
            <p className="text-gray-600">
              Take the next step with guidance and resources to achieve your dream career.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
