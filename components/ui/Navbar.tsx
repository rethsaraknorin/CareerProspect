"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: 'Study Planner', href: '/study-planner' },
    { name: "Major & Course", href: "/academics" },
    { name: "Career & Job", href: "/career&job" },
  ];

  const isAuthPage = pathname === "/sign-in" || pathname === "/sign-up";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/num.png"
                alt="NUM Logo"
                width={75}
                height={50}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          {!isAuthPage && (
            <>
              <div className="hidden md:flex items-center">
                <div className="flex space-x-6 mr-6">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 ${
                          isActive
                            ? "text-blue-600 underline font-semibold"
                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>

                {/* Login/Register for desktop */}
                <div className="flex items-center space-x-2">
                  <Link
                    href="/sign-in"
                    className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition duration-150"
                  >
                    Login
                  </Link>
                  <Link
                    href="/sign-up"
                    className="px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition duration-150"
                  >
                    Register
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden items-center">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Open main menu</span>
                  {isOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>
            </>
          )}

        </div>
      </div>

      {/* Mobile Menu */}
      {!isAuthPage && isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition duration-150 ${
                    isActive
                      ? "text-blue-600 underline font-semibold"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Login/Register */}
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex flex-col items-start space-y-2 px-3">
              <Link
                href="/sign-in"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-800"
              >
                Login
              </Link>
              <Link
                href="/sign-up"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
