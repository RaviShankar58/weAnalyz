const TechnicalTicketDetailsModal = ({ ticket, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded shadow w-[500px]">
        <h2 className="text-xl font-semibold mb-4">Ticket Details</h2>
        <ul className="text-sm space-y-1">
          <li>Ticket No: {ticket.id}</li>
          <li>Date: 13/08/21</li>
          <li>Name: Ravi Shankar</li>
          <li>Dept: ABC</li>
          <li>Title: {ticket.subject}</li>
          <li>Description: Description of ticket</li>
          <li>Category: {ticket.category}</li>
          <li>Type: Incident</li>
          <li>Priority: {ticket.priority}</li>
          <li>Status: {ticket.status}</li>
          <li>Attachment: Not available</li>
        </ul>
        <div className="mt-4 flex gap-4">
          <button className="bg-blue-400 px-4 py-1 rounded text-white">Update</button>
          <button
            className="bg-green-500 px-4 py-1 rounded text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalTicketDetailsModal;
