"use client";

import React, { useState } from "react";
import { Menu, X, LogIn, User } from "lucide-react"; // Import the icons you need
import Link from "next/link";
import PrimaryButton from "../ui/PrimaryButton";
import Image from "next/image";
import assets from "@/app/assets";
import AuthButton from "../authButton/AuthButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/", show: true },
    { label: "Shop", path: "/shop", show: true },
    { label: "About Us", path: "/about-us", show: true },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className="flex items-center gap-1">
            <Image
              src={assets.svg.logoFinal}
              width={30}
              height={30}
              alt="logo"
            />
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold">
                Medi
                <span className="text-blue-600">M</span>art
              </Link>
            </div>
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

          <div className="flex items-center -mr-2">
            <AuthButton />
            {/* Hamburger Menu Button */}
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
