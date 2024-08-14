import React from "react";
import Sidebar from "./SideBar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen md:flex">
     {/* <Sidebar/> */}

      <div className="flex-1 md:ml-64">
        <div className="p-5">
        {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
