import React from "react";

const TopCard = ({
  icon: Icon,
  label,
  value,
  bgColor = "bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10",
}) => {
  return (
    <div className={`${bgColor} rounded-lg p-6 flex items-center justify-between border border-primary/20 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-primary`}>
      <div>
        <p className="text-gray-600 text-sm font-medium">{label}</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
      </div>
      {Icon && (
        <div className="rounded-full bg-primary/10 p-3 text-primary shadow-sm transition duration-300 ease-out hover:scale-105">
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
      )}
    </div>
  );
};

export default TopCard;
