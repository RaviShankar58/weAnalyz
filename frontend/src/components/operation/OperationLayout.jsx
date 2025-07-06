import { NavLink, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  Ticket,
  BookOpen,
  Gauge
} from 'lucide-react';

const OperationLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#e5e5e5] text-black py-6 px-4 shadow-md">
        <h2 className="text-xl font-bold italic text-center mb-6 text-[#008080]">Helpdesk</h2>

        <nav className="space-y-4 font-serif">
          <NavLink
            to="/operation/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded ${
                isActive ? 'bg-[#d1f7f3]' : ''
              } hover:bg-[#d1f7f3]`
            }
          >
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink
            to="/operation/ticket-approval"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded ${
                isActive ? 'bg-[#d1f7f3]' : ''
              } hover:bg-[#d1f7f3]`
            }
          >
            <Ticket size={18} />
            Ticket Approval
          </NavLink>

          <NavLink
            to="/operation/my-tickets"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded ${
                isActive ? 'bg-[#d1f7f3]' : ''
              } hover:bg-[#d1f7f3]`
            }
          >
            <BookOpen size={18} />
            My Ticket
          </NavLink>

          <NavLink
            to="/operation/performance"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded ${
                isActive ? 'bg-[#d1f7f3]' : ''
              } hover:bg-[#d1f7f3]`
            }
          >
            <Gauge size={18} />
            Performance
          </NavLink>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-white p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default OperationLayout;
