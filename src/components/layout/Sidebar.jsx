import { Link, useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, Package, Truck, LogOut } from "lucide-react";
import { toast } from "sonner";

import { ROUTES } from "@/constants/routes";
import FaviconLogo from "@/assets/images/favicon.jpg";

const SIDEBAR_ROUTES = [
  { name: "Dashboard", path: ROUTES.DASHBOARD, icon: LayoutDashboard },
  { name: "Vendor Management", path: ROUTES.VENDOR_MANAGEMENT, icon: Truck },
  {
    name: "Customer Management",
    path: ROUTES.CUSTOMER_MANAGEMENT,
    icon: Users,
  },
  { name: "Stock Management", path: ROUTES.STOCK_MANAGEMENT, icon: Package },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate(ROUTES.AUTH.LOGIN);
  };

  return (
    <aside className="group fixed left-0 top-0 z-50 flex flex-col h-full bg-[#0a0a0a] text-slate-300 transition-all duration-300 ease-in-out w-20 hover:w-72 shadow-2xl">
      <div className="h-20 flex items-center px-[14px] shrink-0 overflow-hidden cursor-pointer mt-2">
        <div className="h-10 w-10 shrink-0 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border-2 border-white/10">
          <img
            src={FaviconLogo}
            alt="Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="ml-4 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap overflow-hidden">
          <span className="text-[17px] font-bold text-white leading-tight tracking-wide">
            Poultry Form
          </span>
          <span className="text-[10px] text-[var(--secondary-color)] font-medium leading-tight tracking-wider uppercase mt-0.5">
            Medicine & Feed Management
          </span>
        </div>
      </div>

      <nav className="flex-1 py-6 flex flex-col gap-2 px-3 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {SIDEBAR_ROUTES.map((route) => {
          const isActive = location.pathname.includes(route.path);
          return (
            <Link
              key={route.name}
              to={route.path}
              className={`flex items-center rounded-xl px-2.5 py-3.5 transition-all shrink-0 ${
                isActive
                  ? "bg-[var(--primary-color)]/20 text-white shadow-[inset_4px_0_0_0_var(--primary-color)]"
                  : "hover:bg-white/5 hover:text-white"
              }`}
            >
              <route.icon
                className={`h-5 w-5 shrink-0 ${isActive ? "text-[var(--primary-color)]" : "text-slate-400"}`}
              />
              <span className="hidden group-hover:inline-block ml-4 font-medium text-[15px] whitespace-nowrap transition-opacity duration-300">
                {route.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 shrink-0 flex items-center justify-center overflow-hidden mb-2">
        <button
          onClick={handleLogout}
          className="p-3 rounded-xl hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors shrink-0 cursor-pointer flex items-center justify-center group-hover:justify-start w-full"
        >
          <LogOut className="h-5 w-5 shrink-0" />
          <span className="hidden group-hover:inline-block ml-4 font-medium text-[15px] whitespace-nowrap transition-opacity duration-300">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
