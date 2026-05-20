import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Login from './pages/auth/login';
import MainLayout from './components/layout/mainLayout';
import { ROUTES } from './constants/routes';

import './App.css';

const PlaceholderScreen = ({ title }) => (
  <div>
    <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
    <p className="text-slate-500 mt-2">This module is under construction.</p>
  </div>
);

function App() {
  return (
    <Router>
      <TooltipProvider>
        <Toaster position="top-right" richColors />
        <Routes>
          <Route path={ROUTES.AUTH.LOGIN} element={<Login />} />
          
          <Route path={ROUTES.ADMIN} element={<MainLayout />}>
            <Route index element={<Navigate to={ROUTES.DASHBOARD} replace />} />
            <Route path="dashboard" element={<PlaceholderScreen title="Dashboard" />} />
            <Route path="vendors" element={<PlaceholderScreen title="Vendor Management" />} />
            <Route path="customers" element={<PlaceholderScreen title="Customer Management" />} />
            <Route path="stock" element={<PlaceholderScreen title="Stock Management" />} />
          </Route>

          <Route path="/" element={<Navigate to={ROUTES.AUTH.LOGIN} replace />} />
        </Routes>
      </TooltipProvider>
    </Router>
  );
}

export default App;
