"use client";

import Navbar from '@/components/ui/Navbar'; // <-- Add your Navbar import
import AuthForm from '@/components/AuthForm'; // <-- Your AuthForm

export default function SignUpPage() {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Signup Form */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <AuthForm initialMode="signup" />
      </div>
    </div>
  );
}
