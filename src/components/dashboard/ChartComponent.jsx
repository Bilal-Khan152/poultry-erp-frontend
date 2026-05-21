import React from "react";

import Chart from "react-apexcharts";

const ChartComponent = ({
  title,
  icon: Icon,
  options = {},
  series = [],
  type = "line",
  height = 300,
}) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-primary/20 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        {Icon && (
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-4 w-4" />
          </div>
        )}
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
      </div>
      <Chart
        options={options}
        series={series}
        type={type}
        height={height}
      />
    </div>
  );
};

export default ChartComponent;
