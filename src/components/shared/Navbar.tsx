"use client";

import React, { useState } from "react";
import { Menu, X, LogIn } from "lucide-react"; // Import the icons you need
import Link from "next/link";
import PrimaryButton from "../ui/PrimaryButton";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/", show: true },
    { label: "Blogs", path: "/blogs", show: true },
    { label: "About Us", path: "/about-us", show: true },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex  justify-between items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-blue-600">
                MyWebsite
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {menuItems.map(
                  (item) =>
                    item.show && (
                      <Link
                        key={item.label}
                        href={item.path}
                        className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {item.label}
                      </Link>
                    )
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center -mr-2">
            {/* Login Button */}
            <div>
              <Link href="/login">
                <PrimaryButton
                  icon={<LogIn className="h-5 w-5" />}
                  text="Login"
                  className="bg-blue-600 hover:bg-blue-700"
                />
              </Link>
            </div>
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 md:hidden"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map(
              (item) =>
                item.show && (
                  <Link
                    key={item.label}
                    href={item.path}
                    className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.label}
                  </Link>
                )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
