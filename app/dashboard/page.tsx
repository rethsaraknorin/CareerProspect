"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface User {
  name: string;
  email: string;
}

export default function StudentDashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      router.push("/sign-in"); // Redirect to login if not authenticated
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  return (
    <div className="max-w-5xl mx-auto py-10 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome, {user?.name || "Student"}! 🎓</h1>
        <p className="mt-4 text-gray-600 text-lg">
          Explore your future career paths and manage your profile.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Profile Card */}
        <Link href="/dashboard/profile" className="block p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">My Profile</h2>
          <p className="text-gray-500">
            View and update your personal information and academic interests.
          </p>
        </Link>

        {/* Career Suggestions Card */}
        <Link href="/dashboard/career-suggestions" className="block p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Career Suggestions</h2>
          <p className="text-gray-500">
            Discover careers that match your chosen major and skills.
          </p>
        </Link>

        {/* (Optional) Change Password Card */}
        <Link href="/dashboard/change-password" className="block p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Change Password</h2>
          <p className="text-gray-500">
            Keep your account secure by updating your password regularly.
          </p>
        </Link>
      </div>
    </div>
  );
}
