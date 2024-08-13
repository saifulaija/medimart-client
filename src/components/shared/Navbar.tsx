"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react"; // Import the icons you need
import Link from "next/link";
import PrimaryButton from "../ui/PrimaryButton";
import Image from "next/image";
import assets from "@/app/assets";
import AuthButton from "../authButton/AuthButton";
import { getUserInfo } from "@/services/authServices";
import { usePathname } from "next/navigation";
type UserType = {
  id: string;
  name: string;
  role: string; // Define the expected properties
  // Add other properties as needed
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activePath=usePathname()


const [user, setUser] = useState<UserType | null>(null);

useEffect(() => {
  // Fetch user data and update state
  const fetchedUser = getUserInfo();
  if (fetchedUser) {
    setUser(fetchedUser);
  }
}, []);

  const menuItems = [
    { label: "Home", path: "/", show: true },
    { label: "Shop", path: "/shop", show: true },
    { label: "About Us", path: "/about_us", show: true },
    {
      label: "Dashboard",
      path: `/dashboard/${user?.role}`,
      show: user?.role,
    },
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
                      className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out ${
                        activePath === item.path
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {/* Active item indicator */}
                      {activePath === item.path && (
                        <span className="absolute inset-x-0 bottom-0 border-b-2 border-blue-600"></span>
                      )}
                      {item.label}
                    </Link>
                  )
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <PrimaryButton
              icon={<ShoppingBag className="h-5 w-5" />}
              text={3250}
              className="bg-none rounded-lg" // Customize the background color
              badge={3} // Number of products added
            />
            <div className="sm:block hidden">
              <AuthButton />
            </div>
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
            <AuthButton />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
