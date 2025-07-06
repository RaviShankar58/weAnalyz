import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, BookUser, Settings } from 'lucide-react';

const TechnicalLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#e1e1e1] text-black p-6 space-y-6">
        <h2 className="text-xl italic font-bold text-[#0cc5b7] text-center mb-6">Helpdesk</h2>
        <nav className="flex flex-col gap-6 text-sm">
          <NavLink to="/technical/dashboard" className={({ isActive }) => isActive ? 'font-bold' : ''}>
            <div className="flex items-center gap-2"><LayoutDashboard size={18} /> Dashboard</div>
          </NavLink>
          <NavLink to="/technical/my-tickets" className={({ isActive }) => isActive ? 'font-bold' : ''}>
            <div className="flex items-center gap-2"><BookUser size={18} /> My Ticket</div>
          </NavLink>
          <NavLink to="/technical/performance" className={({ isActive }) => isActive ? 'font-bold' : ''}>
            <div className="flex items-center gap-2"><Settings size={18} /> Performance</div>
          </NavLink>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-[#f2fdfc] p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default TechnicalLayout;
