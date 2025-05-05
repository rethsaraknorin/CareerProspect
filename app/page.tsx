"use client"

import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
    
  );
}
