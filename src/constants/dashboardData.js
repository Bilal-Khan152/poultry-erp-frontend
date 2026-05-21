// Top Cards Data
export const TOP_CARDS_DATA = [
  {
    id: 1,
    label: "Total Customers",
    value: "1,234",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    label: "Total Vendors",
    value: "89",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    id: 3,
    label: "Pending Payments",
    value: "45",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    id: 4,
    label: "Total Sales",
    value: "45,230",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

// Low Stock Alert Data
export const LOW_STOCK_DATA = [
  {
    id: 1,
    name: "Amoxicillin 500mg",
    type: "Medicine",
    currentStock: 50,
    minStock: 100,
    status: "Critical",
  },
  {
    id: 2,
    name: "Newcastle Vaccine",
    type: "Vaccine",
    currentStock: 20,
    minStock: 50,
    status: "Critical",
  },
  {
    id: 3,
    name: "Paracetamol 250mg",
    type: "Medicine",
    currentStock: 75,
    minStock: 150,
    status: "Low",
  },
  {
    id: 4,
    name: "Gumboro Vaccine",
    type: "Vaccine",
    currentStock: 30,
    minStock: 60,
    status: "Low",
  },
  {
    id: 5,
    name: "Tetracycline 250mg",
    type: "Medicine",
    currentStock: 40,
    minStock: 100,
    status: "Critical",
  },
];
export const LOW_STOCK_COLUMNS = [
  { key: "name", label: "Item Name", width: "20%" },
  { key: "type", label: "Type", width: "20%", align: "center" },
  { key: "currentStock", label: "Current", width: "20%", align: "center" },
  { key: "minStock", label: "Min Level", width: "20%", align: "center" },
  { key: "status", label: "Status", width: "20%", align: "center" },
];

export const PENDING_PAYMENTS_COLUMNS = [
  { key: "customerName", label: "Customer", width: "20%" },
  { key: "invoiceNo", label: "Invoice No.", width: "20%" },
  { key: "amount", label: "Amount", width: "20%", align: "right" },
  { key: "daysOverdue", label: "Days Overdue", width: "20%", align: "center" },
  { key: "status", label: "Status", width: "20%", align: "center" },
];
// Pending Payments Data
export const PENDING_PAYMENTS_DATA = [
  {
    id: 1,
    customerName: "Ram Kumar Farms",
    invoiceNo: "INV-2024-001",
    amount: "12,500",
    daysOverdue: 5,
    status: "Overdue",
  },
  {
    id: 2,
    customerName: "Sharma Poultry",
    invoiceNo: "INV-2024-002",
    amount: "8,750",
    daysOverdue: 0,
    status: "Due Soon",
  },
  {
    id: 3,
    customerName: "Green Valley Farm",
    invoiceNo: "INV-2024-003",
    amount: "15,200",
    daysOverdue: 12,
    status: "Overdue",
  },
  {
    id: 4,
    customerName: "Poultry Plus",
    invoiceNo: "INV-2024-004",
    amount: "6,300",
    daysOverdue: 2,
    status: "Overdue",
  },
];
