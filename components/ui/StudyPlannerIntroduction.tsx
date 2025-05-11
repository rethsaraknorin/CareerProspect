"use client";

import React from "react";
import Link from "next/link";

const StudyPlannerIntroduction: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Ready to Choose Your Perfect Major?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          The Study Planner is designed especially for Cambodian high school graduates 
          who are ready to step into university life. 
          By understanding your unique talents, interests, and motivations, 
          you can choose a major that fits you best — and build a future you are proud of.
        </p>
        <p className="text-lg text-gray-600 mb-10">
          Take a few minutes. Be honest. Your future deserves it.
        </p>
        <Link
          href="/study-planner/start"
          className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
        >
          Start Your Study Planner
        </Link>
      </div>
    </section>
  );
};

export default StudyPlannerIntroduction;
