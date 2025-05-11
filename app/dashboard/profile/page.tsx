"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
}

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token || !storedUser) {
      router.push("/sign-in");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Profile</h1>

      {user ? (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="mt-1 p-3 border border-gray-300 rounded-md bg-gray-50">
              {user.name}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="mt-1 p-3 border border-gray-300 rounded-md bg-gray-50">
              {user.email}
            </div>
          </div>

          {/* Optional future button */}
          {/* <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">
            Change Password
          </button> */}
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}
