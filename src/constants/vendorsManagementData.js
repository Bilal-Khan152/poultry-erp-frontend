export const VENDOR_SUMMARY_CARDS = [
  { id: 1, label: "Total Vendors", value: "28" },
  { id: 2, label: "Total Purchases", value: "184.2k" },
  { id: 3, label: "Total Paid", value: "143.7k" },
  { id: 4, label: "Remaining Balance", value: "40.5k" },
];

export const VENDOR_PURCHASES_SERIES = [
  {
    name: "Purchases",
    data: [22, 28, 25, 34, 38, 42, 46],
  },
];

export const VENDOR_PURCHASES_OPTIONS = {
  chart: {
    type: "bar",
    toolbar: { show: false },
  },
  colors: ["#3B82F6"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      borderRadius: 6,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return `${val}k`;
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
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: {
      style: {
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return `${val}k`;
      },
    },
  },
  fill: { opacity: 1 },
  tooltip: {
    y: {
      formatter: function (val) {
        return `${val}k`;
      },
    },
  },
};

export const VENDOR_BALANCE_SERIES = [
  {
    name: "Remaining Balance",
    data: [9.5, 8.2, 10.8, 9.9, 11.1, 10.3, 9.7],
  },
];

export const VENDOR_BALANCE_OPTIONS = {
  chart: {
    type: "line",
    toolbar: { show: false },
  },
  colors: ["#0EA5E9"],
  stroke: {
    curve: "smooth",
    width: 3,
  },
  markers: {
    size: 4,
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return `${val}k`;
    },
    style: {
      colors: ["#0EA5E9"],
      fontSize: "12px",
      fontWeight: "600",
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    labels: {
      style: {
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return `${val}k`;
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return `${val}k`;
      },
    },
  },
};

export const VENDOR_TABLE_DATA = [
  {
    id: "vendor-1",
    name: "Karachi Feeds Co.",
    phone: "+92 300 1234567",
    totalDue: "58k",
    paid: "44k",
    remaining: "14k",
  },
  {
    id: "vendor-2",
    name: "Lahore Poultry Traders",
    phone: "+92 321 9876543",
    totalDue: "42.5k",
    paid: "35.5k",
    remaining: "7k",
  },
  {
    id: "vendor-3",
    name: "Islamabad Agro Supply",
    phone: "+92 333 7654321",
    totalDue: "37.8k",
    paid: "29.2k",
    remaining: "8.6k",
  },
  {
    id: "vendor-4",
    name: "Multan Farm Suppliers",
    phone: "+92 312 4567890",
    totalDue: "45.5k",
    paid: "34.7k",
    remaining: "10.8k",
  },
  {
    id: "vendor-5",
    name: "Peshawar Grain Market",
    phone: "+92 334 1122334",
    totalDue: "51k",
    paid: "39k",
    remaining: "12k",
  },
  {
    id: "vendor-6",
    name: "Faisalabad Feed House",
    phone: "+92 345 5566778",
    totalDue: "63.2k",
    paid: "50k",
    remaining: "13.2k",
  },
  {
    id: "vendor-7",
    name: "Hyderabad Livestock Supply",
    phone: "+92 301 8899001",
    totalDue: "29.5k",
    paid: "20k",
    remaining: "9.5k",
  },
  {
    id: "vendor-8",
    name: "Quetta Farm Products",
    phone: "+92 313 7788990",
    totalDue: "47k",
    paid: "36k",
    remaining: "11k",
  },
  {
    id: "vendor-9",
    name: "Rawalpindi Agro Traders",
    phone: "+92 322 4455667",
    totalDue: "54.4k",
    paid: "41.9k",
    remaining: "12.5k",
  },
];

export const VENDOR_STATUS_TABS = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "inactive", label: "Inactive" },
];
