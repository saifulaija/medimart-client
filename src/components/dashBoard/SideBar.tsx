"use client";
import Image from "next/image";
import Link from "next/link";
import assets from "@/app/assets";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { getUserInfo } from "@/services/authServices";

import { AlignJustify, Home, User } from "lucide-react";
import AuthButton from "../authButton/AuthButton";
import SuperAdminMenu from "./SuperAdminMenu";
import AdminMenu from "./AdminMenu";
import UserMenu from "./UserMenu";

const Sidebar = () => {
  const router = useRouter();
  const activePath = usePathname();
  const user = getUserInfo();
  const role = user?.role;

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Small Screen Navbar */}
      <div className="text-black flex justify-between md:hidden border-b-2">
        <div className="block cursor-pointer p-4 font-bold">
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
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AlignJustify className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex bg-slate-100 border flex-col justify-between overflow-x-hidden w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div>
          {/* Branding & Profile Info */}
          <div className="flex flex-col items-center text-neutral-500 font-semibold">
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
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
            </div>
            <div className="mt-6 text-center">
              <span className="text-gray-500 font-medium">
                <User className="inline-block text-gray-500 text-md" />{" "}
                {role || "Student"}
              </span>
              <Link
                href="/dashboard/profile"
                className="block mt-2 font-medium text-gray-800 "
              >
                Name: {user?.name}
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 text-neutral-500">
            <nav>
              {role === "admin" && <AdminMenu />}
              {role === "super_admin" && <SuperAdminMenu />}
              {(role === "user") && <UserMenu />}
            </nav>
          </div>
        </div>

        <div className="">
          <hr className="text-black h-2" />
          <Link
            href="/"
            className={`flex items-center px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-gray-300 hover:text-red-700 ${
              activePath === "/" ? "bg-gray-300 text-gray-400" : "text-white"
            }`}
          >
            <Home className="w-5 h-5 text-gray-600" />
            <span className="mx-4 font-medium text-gray-500">Home</span>
          </Link>
          <AuthButton />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
