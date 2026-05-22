import React from "react";

const DashboardSectionHeader = ({ icon: Icon, title, description, action }) => {
  return (
    <div className="mb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {Icon && (
            <div className="rounded-full bg-gradient-to-br from-primary to-secondary p-3 text-white shadow-sm">
              <Icon className="w-5 h-5" strokeWidth={2} />
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {description && <p className="text-gray-600 mt-2 text-sm">{description}</p>}
          </div>
        </div>
        {action && (
          <div className="cursor-pointer hover:opacity-90 transition-opacity">
            {action}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardSectionHeader;
