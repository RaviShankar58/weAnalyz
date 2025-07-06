import { useState } from 'react';
import TechnicalTicketDetailsModal from './modals/TechnicalTicketDetailsModal';
import TechnicalCloseTicketModal from './modals/TechnicalCloseTicketModal';

const sampleTickets = [
  {
    id: '1234',
    subject: 'Login issue',
    category: 'Access issue',
    priority: 'High',
    date: '13/08/21',
    status: 'In Progress',
  },
  {
    id: '1124',
    subject: 'New ticket issue',
    category: 'Access issue',
    priority: 'Medium',
    date: '14/08/21',
    status: 'On hold',
  },
  {
    id: '1224',
    subject: 'New request',
    category: 'Feedback',
    priority: 'Low',
    date: '13/08/21',
    status: 'Closed',
  },
];

const TechnicalMyTickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showCloseModal, setShowCloseModal] = useState(false);

  const handleViewDetails = (ticket) => {
    setSelectedTicket(ticket);
    setShowDetailsModal(true);
  };

  const handleClose = () => setShowCloseModal(true);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Ticket</h2>
      <table className="w-full text-left border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th>Ticket No.</th>
            <th>Subject</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sampleTickets.map((ticket) => (
            <tr key={ticket.id} className="border-t border-gray-300">
              <td>
                <button
                  onClick={() => handleViewDetails(ticket)}
                  className="text-blue-600 hover:underline"
                >
                  {ticket.id}
                </button>
              </td>
              <td>{ticket.subject}</td>
              <td>{ticket.category}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.date}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded text-white text-sm ${
                    ticket.status === 'In Progress'
                      ? 'bg-green-500'
                      : ticket.status === 'Closed'
                      ? 'bg-black'
                      : 'bg-blue-900'
                  }`}
                >
                  {ticket.status}
                </span>
              </td>
              <td>
                <button onClick={() => handleClose()} className="text-xl">
                  🧑‍🤝‍🧑
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showDetailsModal && selectedTicket && (
        <TechnicalTicketDetailsModal
          ticket={selectedTicket}
          onClose={() => setShowDetailsModal(false)}
        />
      )}

      {showCloseModal && (
        <TechnicalCloseTicketModal onClose={() => setShowCloseModal(false)} />
      )}
    </div>
  );
};

export default TechnicalMyTickets;