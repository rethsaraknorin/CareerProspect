"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  "Are you good at mathematics or solving complex problems?",
  "Do you enjoy using technology or learning about computers?",
  "Are you interested in how businesses operate and succeed?",
  "Do you like helping other people solve their problems?",
  "Are you excited by creative activities like designing, writing, or advertising?",
  "Do you enjoy organizing events, tours, or trips for people?",
  "Do you want to work in banking, finance, or investment fields?",
  "Are you interested in law, rights, and helping society be fair?",
  "Do you enjoy leading a group or managing people to achieve goals?",
  "Are you passionate about protecting the environment and promoting sustainable development?",
];


const options = [
  { label: "Strongly disagree", value: -2 },
  { label: "Disagree", value: -1 },
  { label: "Slightly disagree", value: 0 },
  { label: "Slightly agree", value: 1 },
  { label: "Agree", value: 2 },
  { label: "Strongly agree", value: 3 },
];

export default function StudyPlannerStartPage() {
  const router = useRouter();
  
  const [step, setStep] = useState(0); // Track which question
  const [answers, setAnswers] = useState<number[]>([]); // Track student answers

  const handleAnswer = (value: number) => {
    const updatedAnswers = [...answers];
    updatedAnswers[step] = value;
    setAnswers(updatedAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      localStorage.setItem("studyPlannerAnswers", JSON.stringify(updatedAnswers));
      router.push("/study-planner/result"); // after finish all questions
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-3xl w-full text-center">
          
          {/* Progress */}
          <p className="text-sm text-gray-500 mb-6">
            Question {step + 1} of {questions.length}
          </p>

          {/* Question */}
          <h2 className="text-2xl font-bold text-gray-800 mb-8">
            {questions[step]}
          </h2>

          {/* Options */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="flex flex-col items-center justify-center p-6 border-2 border-gray-300 rounded-full hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                <span className="text-xs font-medium text-gray-700">{option.label}</span>
              </button>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
