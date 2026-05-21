import { useLocation, useNavigate } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const BREADCRUMB_LABELS = {
  admin: "Admin",
  dashboard: "Dashboard",
  vendors: "Vendors",
  customers: "Customers",
  stock: "Stock",
};

const PageHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  const breadcrumbs = [{ label: "Home", path: "/" }];

  if (pathSegments.length > 0) {
    breadcrumbs.push({
      label: BREADCRUMB_LABELS[pathSegments[0]] || "Admin",
      path: `/${pathSegments[0]}`,
    });
  }

  if (pathSegments.length > 1 && pathSegments[1] !== "dashboard") {
    breadcrumbs.push({
      label: BREADCRUMB_LABELS[pathSegments[1]] || pathSegments[1].replace(/-/g, " "),
      path: `/${pathSegments.slice(0, 2).join("/")}`,
    });
  }

  const handleBreadcrumbClick = (path) => {
    if (path !== location.pathname) {
      navigate(path);
    }
  };

  return (
    <header className="h-16 flex items-center justify-between shrink-0">
      <div className="flex items-center text-[13px] font-medium text-slate-500">
        {breadcrumbs.map((crumb, index) => (
          <span key={crumb.path} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />}
            <button
              type="button"
              onClick={() => handleBreadcrumbClick(crumb.path)}
              className={`flex items-center gap-1.5 transition-colors ${
                index === breadcrumbs.length - 1
                  ? "px-4 py-1.5 bg-[var(--primary-color)]/10 rounded-full text-[var(--primary-color)] font-semibold cursor-default"
                  : "hover:text-[var(--primary-color)] cursor-pointer"
              }`}
            >
              {index === 0 ? <Home className="h-4 w-4" /> : null}
              {crumb.label}
            </button>
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right hidden md:block">
          <div className="text-[13px] font-bold text-slate-800 leading-tight">Admin User</div>
          <div className="text-[11px] text-slate-500 font-medium">System Administrator</div>
        </div>
        <div className="h-10 w-10 rounded-full overflow-hidden shadow-sm border-2 border-slate-100 cursor-pointer">
          <div className="h-full w-full bg-slate-200" />
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
