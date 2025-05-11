"use client";

import React from "react";
import { GraduationCap, Briefcase, BarChart2 } from "lucide-react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-12 text-gray-900">Why Choose NUM Career Prospect?</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Feature 1 - Explore Majors */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <GraduationCap className="h-10 w-10 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore Majors</h3>
            <p className="text-gray-600">
              Learn about all the majors offered at NUM and find the right path for your passion.
            </p>
          </div>

          {/* Feature 2 - Career Matching */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Briefcase className="h-10 w-10 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Career Matching</h3>
            <p className="text-gray-600">
              Discover careers that perfectly match your skills, interests, and academic background.
            </p>
          </div>

          {/* Feature 3 - Professional Growth */}
          <div className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <BarChart2 className="h-10 w-10 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Growth</h3>
            <p className="text-gray-600">
              Plan your professional journey and achieve your career goals after graduation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
