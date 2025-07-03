import React from 'react';
const Dashboard = () => {
  const stats = [
    { label: 'Total Tickets', value: 12, bg: 'bg-[#3066BE]' },
    { label: 'Total Solved', value: 8, bg: 'bg-green-500' },
    { label: 'Awaiting Approval', value: 2, bg: 'bg-red-500' },
    { label: 'In Progress', value: 2, bg: 'bg-yellow-400' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className={`p-6 rounded-lg shadow-lg text-center text-white ${stat.bg}`}>
          <h3 className="text-lg font-semibold">{stat.label}</h3>
          <p className="text-4xl mt-4 font-bold">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
