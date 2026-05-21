import React from "react";
import { AlertCircle, BarChart3, PieChart, TrendingUp, Users } from "lucide-react";

import DashboardSectionHeader from "../../components/dashboard/DashboardSectionHeader";
import TopCard from "../../components/dashboard/TopCard";
import ChartComponent from "../../components/dashboard/ChartComponent";
import StockAlertTable from "../../components/dashboard/StockAlertTable";
import PendingPaymentsTable from "../../components/dashboard/PendingPaymentsTable";
import { TOP_CARDS_DATA, LOW_STOCK_DATA, PENDING_PAYMENTS_DATA } from "../../constants/dashboardData";
import {
  SALES_OVERVIEW_SERIES,
  SALES_OVERVIEW_OPTIONS,
  CUSTOMER_DISTRIBUTION_SERIES,
  CUSTOMER_DISTRIBUTION_OPTIONS,
} from "../../constants/chartConfig";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <DashboardSectionHeader
        icon={BarChart3}
        title="Dashboard"
        description="Welcome to your poultry management dashboard. Track your business metrics and operations at a glance."
      />

      {/* Top Cards - Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TOP_CARDS_DATA.map((card) => (
          <TopCard
            key={card.id}
            icon={
              card.id === 1
                ? Users
                : card.id === 2
                ? Users
                : card.id === 3
                ? AlertCircle
                : TrendingUp
            }
            label={card.label}
            value={card.value}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sales Overview - Takes 2 columns */}
        <div className="lg:col-span-2">
          <ChartComponent
            icon={TrendingUp}
            title="Sales Overview"
            options={SALES_OVERVIEW_OPTIONS}
            series={SALES_OVERVIEW_SERIES}
            type="bar"
            height={350}
          />
        </div>

        {/* Customer Type Distribution - Takes 1 column */}
        <div>
          <ChartComponent
            icon={PieChart}
            title="Customer Type Distribution"
            options={CUSTOMER_DISTRIBUTION_OPTIONS}
            series={CUSTOMER_DISTRIBUTION_SERIES}
            type="pie"
            height={350}
          />
        </div>
      </div>

      {/* Tables Section */}
      <div className="space-y-6">
        {/* Low Stock Alert */}
        <StockAlertTable data={LOW_STOCK_DATA} />

        {/* Pending Payments */}
        <PendingPaymentsTable data={PENDING_PAYMENTS_DATA} />
      </div>
    </div>
  );
};

export default Dashboard;
