// app/about/page.js
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Your Company',
  description: 'Learn more about our company, mission, and team.',
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">About Us</h1>
          <p className="mt-6 text-xl max-w-3xl">
            We are dedicated to providing exceptional services and solutions to help our clients achieve their goals.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            To empower our customers with innovative solutions that solve real-world problems and create lasting value.
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
              <p className="mt-4 text-lg text-gray-500">
                Founded in 2020, our company started with a simple idea: to create technology that makes a difference. 
                What began as a small team working out of a garage has grown into a thriving organization with clients worldwide.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Our journey has been marked by innovation, perseverance, and a relentless focus on customer satisfaction. 
                Today, we continue to push boundaries and set new standards in our industry.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="pl-4 -ml-4 relative aspect-w-16 aspect-h-9 rounded-xl overflow-hidden bg-gray-200">
                {/* You can replace this with an actual image */}
                <div className="h-64 w-full flex items-center justify-center text-gray-400">
                  Company Image Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900">Our Values</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Value 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Integrity</h3>
                </div>
              </div>
              <div className="mt-4 text-base text-gray-500">
                We believe in doing what's right, even when no one is watching. Our commitment to ethical business practices guides every decision we make.
              </div>
            </div>
          </div>

          {/* Value 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Innovation</h3>
                </div>
              </div>
              <div className="mt-4 text-base text-gray-500">
                We constantly seek new and better ways to solve problems. Our curiosity drives us to explore uncharted territories and create breakthrough solutions.
              </div>
            </div>
          </div>

          {/* Value 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="text-lg font-medium text-gray-900">Collaboration</h3>
                </div>
              </div>
              <div className="mt-4 text-base text-gray-500">
                We believe that great ideas come from teamwork. By fostering an inclusive environment where diverse perspectives are valued, we achieve more together.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Leadership Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
              Meet the people who drive our vision and lead our company to success.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden bg-gray-200">
                {/* Replace with actual image */}
                <div className="h-full w-full flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Jane Doe</h3>
              <p className="text-sm text-bg-blue-600">Chief Executive Officer</p>
              <p className="mt-2 text-gray-500">
                With over 15 years of industry experience, Jane leads our company with vision and strategy.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden bg-gray-200">
                {/* Replace with actual image */}
                <div className="h-full w-full flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">John Smith</h3>
              <p className="text-sm text-bg-blue-600">Chief Technology Officer</p>
              <p className="mt-2 text-gray-500">
                John oversees all technical aspects of the company, bringing innovation to every project.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full overflow-hidden bg-gray-200">
                {/* Replace with actual image */}
                <div className="h-full w-full flex items-center justify-center text-gray-400">
                  Photo
                </div>
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Sarah Johnson</h3>
              <p className="text-sm text-bg-blue-600">Chief Operations Officer</p>
              <p className="mt-2 text-gray-500">
                Sarah ensures smooth operations and helps scale our business effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to learn more?</span>
            <span className="block text-bg-blue-300">Get in touch with our team today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-bg-blue-600 bg-white hover:bg-blue-50">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}