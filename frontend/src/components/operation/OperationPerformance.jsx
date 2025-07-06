import React from 'react';

const OperationPerformance = () => {
  const team = ['Operation Name 1', 'Operation Name 2', 'Operation Name 3'];

  return (
    <div className="min-h-screen bg-[#55D6C2] p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Performance</h2>
        <div className="bg-white p-6 rounded shadow-md mb-6">
          <div className="flex items-center gap-6 mb-4">
            <div className="bg-gray-200 w-20 h-20 rounded-full"></div>
            <div>
              <p className="text-lg font-semibold">Operation Name</p>
              <p>Contact No: 0123456789</p>
              <p>Department: ABC</p>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p><strong>Total Ticket Handle:</strong> 5</p>
            <p>Ticket Solved: 2</p>
            <p>Ticket Pending: 2</p>
            <p>Ticket in progress: 1</p>
            <p>Rating: ⭐⭐⭐⭐☆</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {team.map(name => (
            <div className="bg-white p-4 rounded shadow-md text-center">
              <div className="bg-gray-300 w-16 h-16 mx-auto rounded-full mb-2"></div>
              <p>{name}</p>
              <button className="mt-2 bg-[#55D6C2] px-4 py-1 rounded text-white">View details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperationPerformance;