// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import { useRouter, usePathname } from "next/navigation";
// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { Menu } from "lucide-react";
// // import assets from "@/app/assets";
// // import { getUserInfo } from "@/services/authServices";
// // import AuthButton from "../authButton/AuthButton";
// // import Sidebar from "./SideBar";

// // const MainDashboard = ({ children }: { children: React.ReactNode }) => {
// //   const user = getUserInfo();

// //   const [isSidebarOpen, setSidebarOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   // Sidebar Responsive Handler
// //   const handleToggle = () => {
// //     setSidebarOpen(!isSidebarOpen);
// //   };

// //   // Scroll Handler
// //   useEffect(() => {
// //     const onScroll = () => {
// //       setScrolled(window.scrollY > 0);
// //     };
// //     window.addEventListener("scroll", onScroll);
// //     return () => {
// //       window.removeEventListener("scroll", onScroll);
// //     };
// //   }, []);

// //   const APP_NAME = "MediMart"; // Replace with your app name

// //   return (
// //     <div className="flex min-h-screen w-full flex-col">
// //       <motion.header
// //         initial={{ y: -150 }}
// //         animate={{ y: 0 }}
// //         transition={{ delay: 0.5, duration: 0.5 }}
// //         className={`sticky top-0 flex h-16 items-center z-50 transition-shadow duration-300 justify-between gap-4 border-b px-4 md:px-6 ${
// //           scrolled
// //             ? "shadow-md border-b bg-background/90 backdrop-blur-lg"
// //             : "bg-background/70 border-b"
// //         }`}
// //       >
// //         <div className="hidden sm:block">
// //           <Link href="/" className="flex items-center">
// //             <Image
// //               src={assets.svg.logoFinal}
// //               width={30}
// //               height={30}
// //               alt={`${APP_NAME} logo`}
// //               className="rounded-lg mr-1"
// //             />
// //             {APP_NAME}
// //           </Link>
// //         </div>

// //         <nav className="hidden md:flex gap-5 text-lg font-medium md:text-sm">
// //           {/* This nav section can be expanded or customized */}
// //         </nav>

// //         <div className="flex md:hidden">
// //           <button onClick={handleToggle} className="p-2 focus:outline-none">
// //             <Menu className="h-6 w-6" />
// //             <span className="sr-only">Toggle navigation menu</span>
// //           </button>
// //         </div>

// //         <div className="flex sm:hidden">
// //           <Link href="/" className="flex items-center gap-2">
// //             <Image
// //               src={assets.svg.logoFinal}
// //               width={30}
// //               height={30}
// //               alt={`${APP_NAME} logo`}
// //               className="rounded-lg"
// //             />
// //             <span className="text-lg font-semibold">{APP_NAME}</span>
// //           </Link>
// //         </div>

// //         <div className="flex items-center gap-2">
// //           <AuthButton />
// //         </div>
// //       </motion.header>

// //       <div className="flex flex-1 overflow-hidden relative">
// //         {/* Sidebar */}
// //         <Sidebar isSidebarOpen={isSidebarOpen} handleToggle={handleToggle} />

// //         {/* Main Content */}
// //         <main
// //           className={`flex-1 transition-all duration-300 ease-in-out ${
// //             isSidebarOpen ? "ml-64 md:ml-64" : "ml-0 md:ml-64"
// //           } ${isSidebarOpen && "md:ml-64"} overflow-auto h-full`}
// //           style={{
// //             transform: isSidebarOpen ? "translateX(-100%)" : "translateX(0)",
// //           }}
// //         >
// //           <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
// //             {children}
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MainDashboard;

// // "use client";

// // import Image from "next/image";
// // import Link from "next/link";
// // import { useRouter, usePathname } from "next/navigation";
// // import { useState, useEffect } from "react";
// // import { motion } from "framer-motion";
// // import { Menu } from "lucide-react";
// // import assets from "@/app/assets";
// // import { getUserInfo } from "@/services/authServices";
// // import AuthButton from "../authButton/AuthButton";
// // import Sidebar from "./SideBar";

// // const MainDashboard = ({ children }: { children: React.ReactNode }) => {
// //   const user = getUserInfo();

// //   const [isSidebarOpen, setSidebarOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);

// //   // Sidebar Responsive Handler
// //   const handleToggle = () => {
// //     setSidebarOpen(!isSidebarOpen);
// //   };

// //   // Scroll Handler
// //   useEffect(() => {
// //     const onScroll = () => {
// //       setScrolled(window.scrollY > 0);
// //     };
// //     window.addEventListener("scroll", onScroll);
// //     return () => {
// //       window.removeEventListener("scroll", onScroll);
// //     };
// //   }, []);

// //   const APP_NAME = "MediMart"; // Replace with your app name

// //   return (
// //     <div className="flex min-h-screen w-full flex-col">
// //       <motion.header
// //         initial={{ y: -150 }}
// //         animate={{ y: 0 }}
// //         transition={{ delay: 0.5, duration: 0.5 }}
// //         className={`sticky top-0 flex h-16 items-center z-50 transition-shadow duration-300 justify-between gap-4 border-b px-4 md:px-6 ${
// //           scrolled
// //             ? "shadow-md border-b bg-background/90 backdrop-blur-lg"
// //             : "bg-background/70 border-b"
// //         }`}
// //       >
// //         <div className="hidden sm:block">
// //           <Link href="/" className="flex items-center">
// //             <Image
// //               src={assets.svg.logoFinal}
// //               width={30}
// //               height={30}
// //               alt={`${APP_NAME} logo`}
// //               className="rounded-lg mr-1"
// //             />
// //             {APP_NAME}
// //           </Link>
// //         </div>

// //         <nav className="hidden md:flex gap-5 text-lg font-medium md:text-sm">
// //           {/* This nav section can be expanded or customized */}
// //         </nav>

// //         <div className="flex md:hidden">
// //           <button onClick={handleToggle} className="p-2 focus:outline-none">
// //             <Menu className="h-6 w-6" />
// //             <span className="sr-only">Toggle navigation menu</span>
// //           </button>
// //         </div>

// //         <div className="flex sm:hidden">
// //           <Link href="/" className="flex items-center gap-2">
// //             <Image
// //               src={assets.svg.logoFinal}
// //               width={30}
// //               height={30}
// //               alt={`${APP_NAME} logo`}
// //               className="rounded-lg"
// //             />
// //             <span className="text-lg font-semibold">{APP_NAME}</span>
// //           </Link>
// //         </div>

// //         <div className="flex items-center gap-2">
// //           <AuthButton />
// //         </div>
// //       </motion.header>

// //       <div className="flex flex-1 overflow-hidden">
// //         {/* Sidebar */}
// //         <Sidebar isSidebarOpen={isSidebarOpen} handleToggle={handleToggle} />

// //         {/* Main Content */}
// //         <main
// //           className={`flex-1 transition-all duration-300 ease-in-out ${
// //             isSidebarOpen ? "ml-64 md:ml-64" : "ml-0 md:ml-64"
// //           }`}
// //         >
// //           <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
// //             {children}
// //           </div>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };

// // export default MainDashboard;



// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Menu } from "lucide-react";
// import assets from "@/app/assets";
// import { getUserInfo } from "@/services/authServices";
// import AuthButton from "../authButton/AuthButton";
// import Sidebar from "./SideBar";

// const MainDashboard = ({ children }: { children: React.ReactNode }) => {
//   const user = getUserInfo();

//   const [isSidebarOpen, setSidebarOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Sidebar Responsive Handler
//   const handleToggle = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   // Scroll Handler
//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   const APP_NAME = "MediMart"; // Replace with your app name

//   return (
//     <div className="flex min-h-screen w-full flex-col">
//       <motion.header
//         initial={{ y: -150 }}
//         animate={{ y: 0 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//         className={`sticky top-0 flex h-16 items-center z-50 transition-shadow duration-300 justify-between gap-4 border-b px-4 md:px-6 ${
//           scrolled
//             ? "shadow-md border-b bg-background/90 backdrop-blur-lg"
//             : "bg-background/70 border-b"
//         }`}
//       >
//         <div className="hidden sm:block">
//           <Link href="/" className="flex items-center">
//             <Image
//               src={assets.svg.logoFinal}
//               width={30}
//               height={30}
//               alt={`${APP_NAME} logo`}
//               className="rounded-lg mr-1"
//             />
//             {APP_NAME}
//           </Link>
//         </div>

//         <nav className="hidden md:flex gap-5 text-lg font-medium md:text-sm">
//           {/* This nav section can be expanded or customized */}
//         </nav>

//         <div className="flex md:hidden">
//           <button onClick={handleToggle} className="p-2 focus:outline-none">
//             <Menu className="h-6 w-6" />
//             <span className="sr-only">Toggle navigation menu</span>
//           </button>
//         </div>

//         <div className="flex sm:hidden">
//           <Link href="/" className="flex items-center gap-2">
//             <Image
//               src={assets.svg.logoFinal}
//               width={30}
//               height={30}
//               alt={`${APP_NAME} logo`}
//               className="rounded-lg"
//             />
//             <span className="text-lg font-semibold">{APP_NAME}</span>
//           </Link>
//         </div>

//         <div className="flex items-center gap-2">
//           <AuthButton />
//         </div>
//       </motion.header>

//       <div className="flex flex-1 overflow-hidden relative">
//         {/* Sidebar */}
//         <Sidebar isSidebarOpen={isSidebarOpen} handleToggle={handleToggle} />

//         {/* Main Content */}
//         <main
//           className={`flex-1 transition-all duration-300 ease-in-out ${
//             isSidebarOpen ? "ml-64 md:ml-64" : "ml-0 md:ml-64"
//           } ${isSidebarOpen && "md:ml-64"} overflow-auto h-full`}
//           style={{
//             transform: isSidebarOpen ? "translateX(-100%)" : "translateX(0)",
//           }}
//         >
//           <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default MainDashboard;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import assets from "@/app/assets";
import { getUserInfo } from "@/services/authServices";
import AuthButton from "../authButton/AuthButton";
import Sidebar from "./SideBar";

const SIDEBAR_WIDTH = "16rem"; // Adjust this value based on your sidebar width

const MainDashboard = ({ children }: { children: React.ReactNode }) => {
  const user = getUserInfo();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Scroll Handler
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const APP_NAME = "MediMart"; // Replace with your app name

  return (
    <div className="flex min-h-screen w-full flex-col">
      <motion.header
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className={`sticky top-0 flex h-16 items-center z-50 transition-shadow duration-300 justify-between gap-4 border-b px-4 md:px-6 ${
          scrolled
            ? "shadow-md border-b bg-background/90 backdrop-blur-lg"
            : "bg-background/70 border-b"
        }`}
      >
        <div className="hidden sm:block">
          <Link href="/" className="flex items-center">
            <Image
              src={assets.svg.logoFinal}
              width={30}
              height={30}
              alt={`${APP_NAME} logo`}
              className="rounded-lg mr-1"
            />
            {APP_NAME}
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 text-lg font-medium md:text-sm">
          {/* This nav section can be expanded or customized */}
        </nav>

        <div className="flex md:hidden">
          <button onClick={handleToggle} className="p-2 focus:outline-none">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </div>

        <div className="flex sm:hidden">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={assets.svg.logoFinal}
              width={30}
              height={30}
              alt={`${APP_NAME} logo`}
              className="rounded-lg"
            />
            <span className="text-lg font-semibold">{APP_NAME}</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <AuthButton />
        </div>
      </motion.header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} handleToggle={handleToggle} />

        {/* Main Content */}
        <main
          className={`flex-1 transition-all duration-300 ease-in-out ${
            isSidebarOpen ? `ml-[${SIDEBAR_WIDTH}]` : "ml-0"
          } overflow-auto h-full`}
          style={{
            marginLeft: isSidebarOpen ? SIDEBAR_WIDTH : "0",
          }}
        >
          <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainDashboard;



