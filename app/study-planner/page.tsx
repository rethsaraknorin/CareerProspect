"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import StudyPlannerHero from "@/components/ui/StudyPlannerHero";
import StudyPlannerHowItWorks from "@/components/ui/StudyPlannerHowItWorks";
import StudyPlannerIntroduction from "@/components/ui/StudyPlannerIntroduction";


export default function StudyPlannerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <StudyPlannerHero />
        <StudyPlannerHowItWorks />
        <StudyPlannerIntroduction />
      </main>

      <Footer />
    </div>
  );
}
