import React, { useState } from "react";
import {
  CreditCard,
  DollarSign,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { toast } from "sonner";

import { Button } from "../../components/ui/button";
import SearchInput from "../../components/ui/SearchInput";
import StatusTabs from "../../components/ui/StatusTabs";
import DashboardSectionHeader from "../../components/dashboard/DashboardSectionHeader";
import TopCard from "../../components/dashboard/TopCard";
import ChartComponent from "../../components/dashboard/ChartComponent";
import VendorsTable from "../../components/vendors/VendorsTable";
import VendorActionsDropdown from "../../components/vendors/VendorActionsDropdown";

import {
  VENDOR_BALANCE_OPTIONS,
  VENDOR_BALANCE_SERIES,
  VENDOR_PURCHASES_OPTIONS,
  VENDOR_PURCHASES_SERIES,
  VENDOR_STATUS_TABS,
  VENDOR_SUMMARY_CARDS,
  VENDOR_TABLE_DATA,
} from "../../constants/vendorsManagementData";

const VendorsManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStatus, setActiveStatus] = useState("all");

  const tableColumns = [
    { key: "name", label: "Name", width: "20%" },
    { key: "phone", label: "Phone", width: "18%" },
    { key: "totalDue", label: "Total Due", width: "16%", align: "right" },
    { key: "paid", label: "Paid", width: "15%", align: "right" },
    { key: "remaining", label: "Remaining", width: "15%", align: "right" },
    {
      key: "actions",
      label: "Actions",
      width: "16%",
      align: "center",
      render: (row) => <VendorActionsDropdown vendorName={row.name} />,
    },
  ];

  return (
    <div className="space-y-6">
      <DashboardSectionHeader
        icon={Truck}
        title="Vendors Management"
        description="Manage vendors, track purchases, monitor payments, and maintain complete supplier transaction history in one place."
        action={
          <Button
            onClick={() => toast.success("Add Vendor clicked")}
            className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white hover:shadow-lg hover:shadow-primary/30 transition-shadow cursor-pointer"
          >
            Add Vendor
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {VENDOR_SUMMARY_CARDS.map((card) => {
          const icon =
            card.id === 1
              ? Users
              : card.id === 2
                ? ShoppingCart
                : card.id === 3
                  ? DollarSign
                  : CreditCard;

          return (
            <TopCard
              key={card.id}
              icon={icon}
              label={card.label}
              value={card.value}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <ChartComponent
            icon={ShoppingCart}
            title="Total Purchases Overview"
            options={VENDOR_PURCHASES_OPTIONS}
            series={VENDOR_PURCHASES_SERIES}
            type="bar"
            height={350}
          />
        </div>
        <div>
          <ChartComponent
            icon={CreditCard}
            title="Remaining Balance Overview"
            options={VENDOR_BALANCE_OPTIONS}
            series={VENDOR_BALANCE_SERIES}
            type="line"
            height={350}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col flex-row gap-4">
          <SearchInput
            placeholder="Search BD profiles by name..."
            value={searchQuery}
            onChange={setSearchQuery}
            maxLength={300}
          />
          <StatusTabs
            tabs={VENDOR_STATUS_TABS}
            activeTab={activeStatus}
            onTabChange={setActiveStatus}
          />
        </div>
      </div>

      <VendorsTable
        title="Vendors"
        icon={Users}
        columns={tableColumns}
        data={VENDOR_TABLE_DATA}
        rowKey="id"
      />
    </div>
  );
};

export default VendorsManagement;
