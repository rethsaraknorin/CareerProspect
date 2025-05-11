"use client";

import Navbar from '@/components/ui/Navbar'; // <-- Import Navbar
import AuthForm from '@/components/AuthForm'; // <-- Your AuthForm

export default function SignInPage() {
  return (
    <div>
      {/* Navbar at the top */}
      <Navbar />

      {/* Signin Form */}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <AuthForm initialMode="signin" />
      </div>
    </div>
  );
}
