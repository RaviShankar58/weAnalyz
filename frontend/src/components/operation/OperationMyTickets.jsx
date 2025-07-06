import { useState } from 'react';

const mockTickets = [
  {
    id: '1234',
    subject: 'Login issue',
    category: 'Access issue',
    priority: 'High',
    date: '13/08/21',
    status: 'In Progress',
    name: 'John Doe',
    dept: 'Support',
    title: 'Unable to login',
    description: 'User unable to access system',
    type: 'Bug',
    attachment: 'screenshot.png'
  },
  {
    id: '1244',
    subject: 'signin issue',
    category: 'Access issue',
    priority: 'High',
    date: '13/08/21',
    status: 'In Progress',
    name: 'John Doe',
    dept: 'Support',
    title: 'Unable to login',
    description: 'User unable to access system',
    type: 'Bug',
    attachment: 'screenshot.png'
  },
  // ... other tickets
];

const OperationMyTickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const openModal = (ticket) => {
    setSelectedTicket(ticket);
  };

  const closeModal = () => {
    setSelectedTicket(null);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Tickets</h2>
      <table className="w-full border-collapse bg-white shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Ticket No.</th>
            <th className="px-4 py-2 text-left">Subject</th>
            <th className="px-4 py-2 text-left">Category</th>
            <th className="px-4 py-2 text-left">Priority</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {mockTickets.map((ticket) => (
            <tr key={ticket.id} className="border-b hover:bg-gray-50">
              <td
                className="px-4 py-2 text-blue-600 cursor-pointer underline"
                onClick={() => openModal(ticket)}
              >
                {ticket.id}
              </td>
              <td className="px-4 py-2">{ticket.subject}</td>
              <td className="px-4 py-2">{ticket.category}</td>
              <td className="px-4 py-2">{ticket.priority}</td>
              <td className="px-4 py-2">{ticket.date}</td>
              <td className="px-4 py-2">
                <span className="bg-green-200 px-2 py-1 rounded text-sm">
                  {ticket.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Ticket Details Modal */}
      {selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[500px]">
            <h3 className="text-xl font-bold mb-4 text-center">Ticket Details</h3>
            <div className="space-y-1">
              <p><strong>Ticket No:</strong> {selectedTicket.id}</p>
              <p><strong>Date:</strong> {selectedTicket.date}</p>
              <p><strong>Name:</strong> {selectedTicket.name}</p>
              <p><strong>Dept:</strong> {selectedTicket.dept}</p>
              <p><strong>Title:</strong> {selectedTicket.title}</p>
              <p><strong>Description:</strong> {selectedTicket.description}</p>
              <p><strong>Category:</strong> {selectedTicket.category}</p>
              <p><strong>Type:</strong> {selectedTicket.type}</p>
              <p><strong>Priority:</strong> {selectedTicket.priority}</p>
              <p><strong>Status:</strong> {selectedTicket.status}</p>
              <p><strong>Attachment:</strong> {selectedTicket.attachment}</p>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={closeModal}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OperationMyTickets;
