"use client";

import React from "react";

const StudyPlannerHowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">
          How It Works
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <span className="text-3xl text-blue-600 font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Answer Questions</h3>
            <p className="text-gray-600">
              Tell us about your skills, interests, and dreams through a quick and easy quiz.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <span className="text-3xl text-blue-600 font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Get Matched</h3>
            <p className="text-gray-600">
              Our smart system analyzes your answers and matches you with the best major for you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition">
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              <span className="text-3xl text-blue-600 font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Plan Your Future</h3>
            <p className="text-gray-600">
              Get personalized recommendations and start your journey towards success at NUM!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StudyPlannerHowItWorks;
