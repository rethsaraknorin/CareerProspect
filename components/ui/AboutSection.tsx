"use client";

import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          About NUM Career Prospect
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          NUM Career Prospect is a platform created to help students explore 
          academic majors, discover career opportunities, and build a clear plan for their future. 
          Our mission is to empower students with the knowledge and tools they need 
          to make confident decisions about their education and career paths.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
