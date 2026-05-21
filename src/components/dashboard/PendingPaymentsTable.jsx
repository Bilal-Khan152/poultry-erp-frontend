import React from "react";
import { CreditCard } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { PENDING_PAYMENTS_COLUMNS } from "../../constants/dashboardData";

const PendingPaymentsTable = ({ data = [] }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Overdue":
        return "bg-red-50 text-red-700";
      case "Due Soon":
        return "bg-orange-50 text-orange-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  const columns = PENDING_PAYMENTS_COLUMNS.map((column) => {
    if (column.key === "customerName") {
      return {
        ...column,
        render: (row) => (
          <span className="font-medium text-gray-900">{row.customerName}</span>
        ),
      };
    }

    if (column.key === "amount") {
      return {
        ...column,
        render: (row) => <span className="font-semibold text-gray-900">{row.amount}</span>,
      };
    }

    if (column.key === "daysOverdue") {
      return {
        ...column,
        render: (row) =>
          row.daysOverdue > 0 ? `${row.daysOverdue} days` : "On track",
      };
    }

    if (column.key === "status") {
      return {
        ...column,
        render: (row) => (
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              getStatusColor(row.status)
            }`}
          >
            {row.status}
          </span>
        ),
      };
    }

    return column;
  });

  return (
    <div className="w-full bg-white rounded-lg p-6 border border-primary/20 shadow-sm">
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <CreditCard className="h-4 w-4" />
        </div>
        <h3 className="text-base font-semibold text-slate-900">Pending Payments</h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((col) => (
                <TableHead key={col.key}>{col.label}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {columns.map((col) => (
                  <TableCell key={col.key}>
                    {col.render ? col.render(row) : row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default PendingPaymentsTable;
