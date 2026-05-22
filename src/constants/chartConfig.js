// Sales Overview Chart Config
export const SALES_OVERVIEW_SERIES = [
  {
    name: "Sales",
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
  },
];

export const SALES_OVERVIEW_OPTIONS = {
  chart: {
    type: "bar",
    toolbar: {
      show: true,
    },
  },
  colors: ["#3B82F6"], // Primary color (blue)
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "k";
    },
    style: {
      colors: ["#ffffff"],
      fontSize: "12px",
      fontWeight: "600",
    },
    offsetY: -6,
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "left",
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    labels: {
      style: {
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    title: {
      text: "( Amount )",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "k";
      },
    },
  },
};

// Customer Type Distribution Chart Config
export const CUSTOMER_DISTRIBUTION_SERIES = [50, 30, 20];

export const CUSTOMER_DISTRIBUTION_OPTIONS = {
  chart: {
    type: "pie",
  },
  colors: ["#3B82F6", "#8B5CF6", "#EC4899"], // Primary, Secondary variants
  labels: ["Farmer", "Trader", "Retail"],
  legend: {
    position: "bottom",
    labels: {
      useSeriesColors: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return Math.round(val) + "%";
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "%";
      },
    },
  },
};
