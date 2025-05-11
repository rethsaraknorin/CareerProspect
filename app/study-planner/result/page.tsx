"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

// Define your majors manually here for now (or import from majors.ts)
const majors = [
  {
    name: "Finance",
    description: "Finance focuses on numbers, banking, and investment. Ideal for students who enjoy working with data, solving problems, and managing money.",
    emoji: "💵",
  },
  {
    name: "Information Technology",
    description: "IT focuses on software, networking, and solving technical problems. Perfect for students who love technology and innovation.",
    emoji: "💻",
  },
  {
    name: "Management",
    description: "Management involves leadership, organizing people, and decision making. Great for students interested in leading teams and running businesses.",
    emoji: "🧑‍💼",
  },
  {
    name: "Marketing",
    description: "Marketing covers creativity, advertising, and communication. Best for students passionate about ideas, promotion, and branding.",
    emoji: "🎨",
  },
  {
    name: "Hospitality and Tourism",
    description: "Hospitality focuses on helping others, managing tourism, and organizing events. Great for friendly, organized people.",
    emoji: "🏨",
  },
  {
    name: "Law",
    description: "Law studies focus on fairness, justice, and helping people understand their rights. Suitable for students who value social impact.",
    emoji: "⚖️",
  },
  {
    name: "Environmental Studies",
    description: "Environmental majors help protect nature and promote sustainability. Perfect for students passionate about the planet.",
    emoji: "🌱",
  },
];

export default function StudyPlannerResultPage() {
  const [bestMajor, setBestMajor] = useState<any>(null);

  useEffect(() => {
    const rawAnswers = localStorage.getItem("studyPlannerAnswers");
    if (!rawAnswers) return;

    const answers: number[] = JSON.parse(rawAnswers);

    const scores = {
      Finance: 0,
      InformationTechnology: 0,
      Management: 0,
      Marketing: 0,
      Hospitality: 0,
      Law: 0,
      Environment: 0,
    };

    const mapping = {
      Finance: [0, 6], // Math, Finance
      InformationTechnology: [1, 3], // Tech, Problem solving
      Management: [2, 8], // Business, Leadership
      Marketing: [4], // Creativity
      Hospitality: [5], // Hospitality events
      Law: [7], // Law and Rights
      Environment: [9], // Environment
    };

    // Calculate scores
    for (const major in mapping) {
      mapping[major as keyof typeof mapping].forEach((questionIndex) => {
        scores[major as keyof typeof scores] += answers[questionIndex] || 0;
      });
    }

    // Find the major with the highest score
    const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    if (best) {
      const bestMajorData = majors.find((m) => m.name.replace(/\s/g, "") === best[0]);
      setBestMajor(bestMajorData);
    }
  }, []);

  if (!bestMajor) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-50">
        <p>Loading your result...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-2xl w-full">
          
          <div className="text-6xl mb-6">{bestMajor.emoji}</div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Your Best Matched Major:
          </h2>
          <p className="text-2xl font-semibold text-blue-600 mb-6">
            {bestMajor.name}
          </p>
          <p className="text-gray-600 mb-8">
            {bestMajor.description}
          </p>

          <a
            href="/study-planner/start"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
          >
            Try Again
          </a>

        </div>
      </main>

      <Footer />
    </div>
  );
}
