"use client";

import React from "react";
import Link from "next/link";

const StudyPlannerHero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-24 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Plan Your Future with NUM Study Planner
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Discover your perfect career path by matching your skills, passions, and dreams. Start shaping your future today!
        </p>
        <Link
          href="/study-planner/start"
          className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition"
        >
          Start Planning
        </Link>
      </div>
    </section>
  );
};

export default StudyPlannerHero;
