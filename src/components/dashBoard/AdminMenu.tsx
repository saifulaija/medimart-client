// import { usePathname } from "next/navigation";
// import { Home, User } from "lucide-react";
// import Link from "next/link";

// const AdminMenu = () => {
//   const activePath = usePathname();

//   const adminMenuItems = [
//     { path: "/dashboard/admin", label: "Dashboard", icon: Home },
//     { path: "/dashboard/admin/manage_user", label: "Manage User", icon: User },
//     {
//       path: "/dashboard/admin/manage_product",
//       label: "Manage Product",
//       icon: User,
//     },
//     {
//       path: "/dashboard/admin/manage_category",
//       label: "Manage Category",
//       icon: User,
//     },
//     {
//       path: "/dashboard/admin/manage_order",
//       label: "Manage Order",
//       icon: User,
//     },
//   ];

//   return (
//     <div className="flex flex-col space-y-2">
//       {adminMenuItems.map((item) => {
//         const IconComponent = item.icon;
//         return (
//           <Link
//             key={item.label}
//             href={item.path}
//             className={`relative flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out ${
//               activePath === item.path
//                 ? "text-blue-500"
//                 : "text-gray-700 hover:text-blue-500"
//             }`}
//           >
//             <IconComponent className="w-5 h-5 mr-2" />
//             <span>{item.label}</span>
//             {/* Active item indicator */}
//             {activePath === item.path && (
//               <span className="absolute inset-x-0 bottom-0 border-r-2 border-r-blue-600"></span>
//             )}
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default AdminMenu;


import { usePathname } from "next/navigation";
import { Home, User } from "lucide-react";
import Link from "next/link";

const AdminMenu = ({ handleSidebarClose }) => {
  const activePath = usePathname();

  const adminMenuItems = [
    { path: "/dashboard/admin", label: "Dashboard", icon: Home },
    { path: "/dashboard/admin/manage_user", label: "Manage User", icon: User },
    {
      path: "/dashboard/admin/manage_product",
      label: "Manage Product",
      icon: User,
    },
    {
      path: "/dashboard/admin/manage_category",
      label: "Manage Category",
      icon: User,
    },
    {
      path: "/dashboard/admin/manage_order",
      label: "Manage Order",
      icon: User,
    },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {adminMenuItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            key={item.label}
            href={item.path}
            onClick={handleSidebarClose} // Add this line to handle click
            className={`relative flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 ease-in-out ${
              activePath === item.path
                ? "text-blue-500"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            <IconComponent className="w-5 h-5 mr-2" />
            <span>{item.label}</span>
            {/* Active item indicator */}
            {activePath === item.path && (
              <span className="absolute inset-x-0 bottom-0 border-r-2 border-r-blue-600"></span>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default AdminMenu;



