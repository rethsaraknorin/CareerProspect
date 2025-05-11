"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      router.push("/sign-in");
    } else {
      const parsedUser = JSON.parse(user);
      setUserName(parsedUser.name);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/sign-in");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-600">NUM Career</h1>
        </div>
        <nav className="mt-6">
          <Link
            href="/dashboard"
            className={`block px-6 py-3 text-gray-700 hover:bg-blue-100 ${
              pathname === "/dashboard" ? "bg-blue-100 font-semibold" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/majors"
            className={`block px-6 py-3 text-gray-700 hover:bg-blue-100 ${
              pathname === "/dashboard/majors" ? "bg-blue-100 font-semibold" : ""
            }`}
          >
            Manage Majors
          </Link>
          <Link
            href="/dashboard/careers"
            className={`block px-6 py-3 text-gray-700 hover:bg-blue-100 ${
              pathname === "/dashboard/careers" ? "bg-blue-100 font-semibold" : ""
            }`}
          >
            Manage Careers
          </Link>
          <Link
            href="/dashboard/profile"
            className={`block px-6 py-3 text-gray-700 hover:bg-blue-100 ${
              pathname === "/dashboard/profile" ? "bg-blue-100 font-semibold" : ""
            }`}
          >
            Profile
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <div className="flex items-center justify-end bg-white px-8 py-4 shadow-sm relative">
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-700">{userName}</div>
            </div>
            <div
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold cursor-pointer"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {userName ? userName.charAt(0).toUpperCase() : "U"}
            </div>
          </div>

          {/* Dropdown Menu */}
          {openMenu && (
            <div className="absolute top-16 right-8 bg-white shadow-md rounded-md py-2 w-48 z-50">
              <Link
                href="/dashboard/profile"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setOpenMenu(false)}
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Page Content */}
        <main className="flex-1 p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
