import React from 'react';

const OperationTicketApproval = () => {
  const tickets = [
    { id: 1234, subject: 'Login issue', category: 'Access issue', priority: 'High', date: '13/08/21' },
    { id: 1124, subject: 'New ticket issue', category: 'Access issue', priority: 'Medium', date: '14/08/21' },
  ];

  return (
    <div className="min-h-screen bg-[#55D6C2] p-6">
      <div className="bg-white max-w-6xl mx-auto p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Ticket Approval</h2>
        <input className="border p-2 rounded w-full mb-4" placeholder="Find ticket..." />
        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th>Ticket No.</th><th>Subject</th><th>Category</th><th>Priority</th><th>Date</th><th>Action</th><th>Assign to</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(ticket => (
              <tr className="text-center border-t">
                <td className="text-blue-500 cursor-pointer">{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.category}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.date}</td>
                <td>
                  <button className="text-green-500 mx-1">✔</button>
                  <button className="text-red-500 mx-1">✖</button>
                </td>
                <td>
                  <select className="border rounded p-1">
                    <option>Technical Team</option>
                    <option>Ops Team</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OperationTicketApproval;