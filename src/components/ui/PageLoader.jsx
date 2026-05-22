import React from "react";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <span className="text-base font-medium text-slate-500">Loading...</span>
    </div>
  );
};

export default PageLoader;
