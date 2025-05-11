"use client";

import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import FeaturesSection from "@/components/ui/FeaturesSection"; 
import HowItWorksSection from "@/components/ui/HowItWorksSection";// << add this
import Navbar from "@/components/ui/Navbar";
import AboutSection from "@/components/ui/AboutSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection /> 
        <AboutSection/>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
