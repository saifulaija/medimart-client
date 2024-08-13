import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import Link from "next/link";

const AdminMenu = () => {
  const activePath = usePathname();

  const adminMenuItems = [
    { path: "/dashboard/add_user", label: "Manage User", icon: User },
    { path: "/dashboard/add_product", label: "Manage Product", icon: User },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {adminMenuItems.map((item) => (
        <Link
          key={item.label}
          href={item.path}
          className={`relative flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out ${
            activePath === item.path
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-700 hover:text-blue-600"
          }`}
        >
          <item.icon className="w-5 h-5 mr-2" />
          <span>{item.label}</span>
          {/* Active item indicator */}
          {activePath === item.path && (
            <span className="absolute inset-x-0 bottom-0 border-b-2 border-blue-600"></span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default AdminMenu;

// import { NavLink } from "react-router-dom";
// import { AiOutlineUserSwitch } from "react-icons/ai";
// import { SiGoogleclassroom } from "react-icons/si";
// import { TbBrandGoogleHome } from "react-icons/tb";
// import { CgProfile } from "react-icons/cg";
// import { usePathname } from "next/navigation";
// import { User } from "lucide-react";
// import Link from "next/link";

// const AdminMenu = () => {
//     const activePath=usePathname();

//     const AdminMenu=[
//         {path:'/dashboard/add_user', label:'Manage User', icon: User},
//         {path:'/dashboard/add_product', label:'Manage Product', icon: User},
//     ]

//   return (
//     <div>
//       {/* <NavLink
//         to="/dashboard/add-users"
//         className={({ isActive }) =>
//           `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//             isActive ? "  text-gray-900 underline " : "text-gray-600"
//           }`
//         }
//       >
//         <AiOutlineUserSwitch className="w-6 h-6 text-gray-500" />
//         <span className="mx-4 font-medium">Manage Users</span>
//       </NavLink>
//       <NavLink
//         to="/dashboard/manage-classes"
//         className={({ isActive }) =>
//           `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//             isActive ? "  text-gray-900 underline " : "text-gray-600"
//           }`
//         }
//       >
//         <SiGoogleclassroom className="w-5 h-5" />
//         <span className="mx-4 font-medium">Manage Classes</span>
//       </NavLink>
//       <NavLink
//         to="/dashboard/admin-profile"
//         className={({ isActive }) =>
//           `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//             isActive ? "  text-gray-900 underline " : "text-gray-600"
//           }`
//         }
//       >
//         <CgProfile className="w-5 h-5" />
//         <span className="mx-4 font-medium">Profile</span>
//       </NavLink>
//       <NavLink
//         to="/dashboard/admin-home"
//         className={({ isActive }) =>
//           `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
//             isActive ? "  text-gray-900 underline " : "text-gray-600"
//           }`
//         }
//       >
//         <TbBrandGoogleHome className="w-5 h-5" />
//         <span className="mx-4 font-medium">Dashboard Home</span>
//       </NavLink> */}

//       {AdminMenu.map(
//         (item) =>
//           item.show && (
//             <Link
//               key={item.label}
//               href={item.path}
//               className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out ${
//                 activePath === item.path
//                   ? "text-blue-600"
//                   : "text-gray-700 hover:text-blue-600"
//               }`}
//             >
//               {/* Active item indicator */}
//               {activePath === item.path && (
//                 <span className="absolute inset-x-0 bottom-0 border-b-2 border-blue-600"></span>
//               )}
//               {item.label}
//             </Link>
//              <CgProfile className="w-5 h-5" />
//         <span className="mx-4 font-medium">Profile</span>
//           )
//       )}
//     </div>
//   );
// };

// export default AdminMenu;
