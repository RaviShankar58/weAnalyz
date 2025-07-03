import { useState } from 'react';

const tickets = [
  {
    number: '1234',
    subject: 'Login issue',
    status: 'In Progress',
    support: 'Tech Support',
    date: '13/08/21',
    rating: 3,
    details: {
      title: 'Login issue',
      description: 'Unable to login to portal.',
      category: 'Bug',
      type: 'Issue',
      priority: 'High',
      status: 'In Progress',
      attachment: 'None',
      name: 'Ravi Kumar',
      dept: 'IT',
    },
  },
  {
    number: '1124',
    subject: 'New ticket issue',
    status: 'On Hold',
    support: 'Ops Team',
    date: '14/08/21',
    rating: 2,
    details: {
      title: 'New ticket issue',
      description: 'System not accepting new tickets.',
      category: 'System',
      type: 'Error',
      priority: 'Medium',
      status: 'On Hold',
      attachment: 'error_log.txt',
      name: 'Ajay Singh',
      dept: 'Operations',
    },
  },
  {
    number: '1234',
    subject: 'Login issue',
    status: 'In Progress',
    support: 'Tech Support',
    date: '13/08/21',
    rating: 3,
    details: {
      title: 'Login issue',
      description: 'Unable to login to portal.',
      category: 'Bug',
      type: 'Issue',
      priority: 'High',
      status: 'In Progress',
      attachment: 'None',
      name: 'Ravi Kumar',
      dept: 'IT',
    },
  },
  {
    number: '1124',
    subject: 'New ticket issue',
    status: 'On Hold',
    support: 'Ops Team',
    date: '14/08/21',
    rating: 2,
    details: {
      title: 'New ticket issue',
      description: 'System not accepting new tickets.',
      category: 'System',
      type: 'Error',
      priority: 'Medium',
      status: 'On Hold',
      attachment: 'error_log.txt',
      name: 'Ajay Singh',
      dept: 'Operations',
    },
  },
  {
    number: '1234',
    subject: 'Login issue',
    status: 'In Progress',
    support: 'Tech Support',
    date: '13/08/21',
    rating: 3,
    details: {
      title: 'Login issue',
      description: 'Unable to login to portal.',
      category: 'Bug',
      type: 'Issue',
      priority: 'High',
      status: 'In Progress',
      attachment: 'None',
      name: 'Ravi Kumar',
      dept: 'IT',
    },
  },
  {
    number: '1124',
    subject: 'New ticket issue',
    status: 'On Hold',
    support: 'Ops Team',
    date: '14/08/21',
    rating: 2,
    details: {
      title: 'New ticket issue',
      description: 'System not accepting new tickets.',
      category: 'System',
      type: 'Error',
      priority: 'Medium',
      status: 'On Hold',
      attachment: 'error_log.txt',
      name: 'Ajay Singh',
      dept: 'Operations',
    },
  },
  // Add more if needed
];

const MyTickets = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);

  const filteredTickets = tickets.filter(
    t =>
      t.number.includes(searchTerm) ||
      t.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#55D6C2] p-6">
      <div className="bg-white max-w-6xl mx-auto shadow-xl rounded-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">List of Ticket</h2>

        {/* Search Filter */}
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Find ticket"
            className="border border-gray-400 rounded px-3 py-1 w-1/3"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <select className="border border-gray-400 px-2 py-1 rounded">
            <option>Show: 10</option>
            <option>5</option>
            <option>20</option>
          </select>
        </div>

        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Ticket No.</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Support By</th>
              <th>Date</th>
              <th>Rate</th>
            </tr>
          </thead>
          <tbody>
              {filteredTickets.map(ticket => (
                <tr
                  key={ticket.number}
                  className="text-center border-t hover:bg-gray-50 transition-all"
                >
                  <td
                    onClick={() => setSelectedTicket(ticket)}
                    className="text-blue-500 cursor-pointer hover:underline py-3"
                  >
                    {ticket.number}
                  </td>
                  <td className="py-3">{ticket.subject}</td>
                  <td className="py-3">
                    <span
                      className={`text-white px-2 py-1 rounded ${
                        ticket.status === 'In Progress'
                          ? 'bg-green-500'
                          : ticket.status === 'On Hold'
                          ? 'bg-blue-500'
                          : 'bg-gray-500'
                      }`}
                    >
                      {ticket.status}
                    </span>
                  </td>
                  <td className="py-3">{ticket.support}</td>
                  <td className="py-3">{ticket.date}</td>
                  <td className="py-3">{'⭐'.repeat(ticket.rating) + '☆'.repeat(5 - ticket.rating)}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>

      {/* Modal for Displaying Ticket Details */}
      {selectedTicket && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
            <h3 className="text-xl font-semibold text-center mb-4">Ticket Details</h3>
            <div className="text-sm space-y-1">
              <p><strong>Ticket No:</strong> {selectedTicket.number}</p>
              <p><strong>Date:</strong> {selectedTicket.date}</p>
              <p><strong>Name:</strong> {selectedTicket.details.name}</p>
              <p><strong>Dept:</strong> {selectedTicket.details.dept}</p>
              <p><strong>Title:</strong> {selectedTicket.details.title}</p>
              <p><strong>Description:</strong> {selectedTicket.details.description}</p>
              <p><strong>Category:</strong> {selectedTicket.details.category}</p>
              <p><strong>Type:</strong> {selectedTicket.details.type}</p>
              <p><strong>Priority:</strong> {selectedTicket.details.priority}</p>
              <p><strong>Status:</strong> {selectedTicket.details.status}</p>
              <p><strong>Attachment:</strong> {selectedTicket.details.attachment}</p>
            </div>
            <button
              onClick={() => setSelectedTicket(null)}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded mx-auto block"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyTickets;
