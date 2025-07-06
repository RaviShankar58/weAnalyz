import React from 'react';

const OperationDashboard = () => {
  return (
    <div className="min-h-screen bg-[#55D6C2] p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold italic mb-6 text-center text-gray-800">Operation Team Dashboard</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-[#a4e9df] p-4 rounded shadow">
            <h4 className="font-semibold">Total Tickets</h4>
            <p className="text-xl font-bold text-green-700">132</p>
          </div>
          <div className="bg-[#a4e9df] p-4 rounded shadow">
            <h4 className="font-semibold">Resolved</h4>
            <p className="text-xl font-bold text-green-700">97</p>
          </div>
          <div className="bg-[#a4e9df] p-4 rounded shadow">
            <h4 className="font-semibold">Pending</h4>
            <p className="text-xl font-bold text-red-600">35</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-md shadow-inner">
          <h3 className="text-lg font-semibold mb-2">Recent Alerts</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>New high-priority ticket from Dept A</li>
            <li>Ticket #4567 overdue</li>
            <li>Reminder: Monthly metrics due tomorrow</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OperationDashboard;
