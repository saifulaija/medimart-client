

// "use client";

// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { Home, User } from "lucide-react";
// import assets from "@/app/assets";
// import { getUserInfo } from "@/services/authServices";

// import SuperAdminMenu from "./SuperAdminMenu";
// // import AdminMenu from "./AdminMenu";
// import UserMenu from "./UserMenu";
// import dynamic from "next/dynamic";

// interface SidebarProps {
//   isSidebarOpen: boolean;
//   handleToggle: () => void;
// }

// const Sidebar = ({ isSidebarOpen, handleToggle }: SidebarProps) => {

//   const user = getUserInfo();
//   const role = user?.role || "user";

//   const AdminMenu = dynamic(() => import("./AdminMenu"), { ssr: false });

//   return (
//     <div
//       className={`fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-20 w-64 bg-gray-50 border-r overflow-y-auto ${
//         isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
//       }`}
//     >
//       {/* Navigation Items */}
//       <nav className="flex-1 text-neutral-600 px-4 mt-16">
//         {role === "super_admin" && <SuperAdminMenu />}
//         {role === "admin" && <AdminMenu />}
//         {role === "user" && <UserMenu />}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;


import { useState } from "react";
import dynamic from "next/dynamic";
import { getUserInfo } from "@/services/authServices";
import { SidebarProps } from "./SidebarTypes"; // Ensure you have the correct type import

const AdminMenu = dynamic(() => import("./AdminMenu"), { ssr: false });

const Sidebar = ({ isSidebarOpen, handleToggle }: SidebarProps) => {
  const user = getUserInfo();
  const role = user?.role || "user";

  // Function to close the sidebar
  const handleSidebarClose = () => {
    handleToggle(); // This will toggle the sidebar's open/closed state
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-20 w-64 bg-gray-50 border-r overflow-y-auto ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      {/* Navigation Items */}
      <nav className="flex-1 text-neutral-600 px-4 mt-16">
        {role === "super_admin" && (
          <SuperAdminMenu handleSidebarClose={handleSidebarClose} />
        )}
        {role === "admin" && (
          <AdminMenu handleSidebarClose={handleSidebarClose} />
        )}
        {role === "user" && (
          <UserMenu handleSidebarClose={handleSidebarClose} />
        )}
      </nav>
    </div>
  );
};

export default Sidebar;



