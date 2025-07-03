import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-[#55D6C2] flex justify-end items-center p-4">
      <button onClick={() => navigate('/')} className="text-white font-bold italic mr-auto">Dashboard</button>
      <button className="text-white px-3 py-1 rounded hover:bg-[#4ab9a2]">🔔</button>
      <button className="text-white px-3 py-1 rounded hover:bg-[#4ab9a2]">👤</button>
      <button onClick={() => navigate('/')} className="text-white px-3 py-1 rounded hover:bg-[#4ab9a2]">↩️</button>
    </header>
  );
};
export default Header;