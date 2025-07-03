import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/dashboard',  label: 'Dashboard' }, 
  { to: '/new-ticket', label: 'New Ticket' },
  { to: '/my-tickets', label: 'My Tickets' },
  { to: '/profile',    label: 'Profile' },
];

const Sidebar = () => (
  <aside className="w-64 bg-gray-100 p-4">
    <h2 className="text-xl font-bold mb-6">Helpdesk</h2>
    <nav className="space-y-4">
      {links.map(link => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `flex items-center p-2 rounded ${isActive ? 'bg-[#55D6C2] text-white' : 'text-gray-800 hover:bg-gray-200'}`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;