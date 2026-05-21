import React from "react";

const StatusTabs = ({ tabs = [], activeTab = null, onTabChange = () => {} }) => {
  return (
    <div className="flex items-center gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-1.5 rounded-sm cursor-pointer text-sm font-medium transition-all ${
            activeTab === tab.id
              ? "bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-md"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default StatusTabs;
