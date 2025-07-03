// src/components/Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="min-h-screen flex">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header />
      <main className="flex-1 bg-white p-6 overflow-auto">
        <Outlet />
      </main>
      <footer className="bg-[#55D6C2] text-center py-2">Footer Area</footer>
    </div>
  </div>
);

export default Layout;
