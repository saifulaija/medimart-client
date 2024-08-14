import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-gray-200 h-8 w-8 animate-spin rounded-full border-4 border-t-blue-400"></div>
    </div>
  );
};

export default Loader;
