import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import PageHeader from "./PageHeader";

const MainLayout = () => (
  <div className="flex h-screen w-full bg-[#ecf0f1] overflow-hidden relative">
    <Sidebar />

    <div className="flex-1 flex flex-col h-screen min-w-0 z-10 relative ml-16 overflow-y-auto">
      <div className="w-full max-w-[1200px] mx-auto px-6 pt-6">
        <PageHeader />
        <main className="pb-8">
          <Outlet />
        </main>
      </div>
    </div>
  </div>
);

export default MainLayout;
