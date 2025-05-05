import React from 'react';
import { Facebook, Github, SendIcon } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0 flex items-center space-x-2">
                        <span>
                            <Image
                                src="/num.png"  // path is relative to public folder
                                alt="Logo"
                                width={75}      // set width
                                height={50}
                            />
                        </span>
                        <span className="text-lg ">Career Prospect</span>
                    </div>


                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center mb-6 md:mb-0">
                        <a href="/about" className="px-4 py-2 text-sm text-gray-800 hover:text-gray-600">About</a>
                        <a href="/privacy" className="px-4 py-2 text-sm text-gray-800 hover:text-gray-600">Privacy Policy</a>
                        <a href="/terms" className="px-4 py-2 text-sm text-gray-800 hover:text-gray-600">Terms of Service</a>
                        <a href="/contact" className="px-4 py-2 text-sm text-gray-800 hover:text-gray-600">Contact Info</a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            <Facebook size={20} />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            <Github size={20} />
                            <span className="sr-only">Github</span>
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">
                            <SendIcon size={20} />
                            <span className="sr-only">Send</span>
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">© 2025 All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;