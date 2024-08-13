import { usePathname } from "next/navigation";
import { User } from "lucide-react";
import Link from "next/link";

const SuperAdminMenu = () => {
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

export default SuperAdminMenu;
