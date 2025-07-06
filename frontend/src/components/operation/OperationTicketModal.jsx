import React from 'react';

const OperationTicketModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white w-[500px] p-6 rounded shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">Ticket Details</h2>
        <div className="text-sm space-y-1 mb-4">
          <p><strong>Ticket No:</strong> 12345</p>
          <p><strong>Date:</strong> 13/08/21</p>
          <p><strong>Name:</strong> Ravi</p>
          <p><strong>Dept:</strong> Support</p>
          <p><strong>Title:</strong> Login issue</p>
          <p><strong>Description:</strong> Cannot login</p>
          <p><strong>Category:</strong> Access</p>
          <p><strong>Type:</strong> Bug</p>
          <p><strong>Priority:</strong> High</p>
          <p><strong>Status:</strong> In Progress</p>
          <p><strong>Attachment:</strong> File.pdf</p>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-400 px-4 py-2 text-white rounded">Update</button>
          <button onClick={onClose} className="bg-green-500 px-4 py-2 text-white rounded">Close</button>
        </div>
      </div>
    </div>
  );
};

export default OperationTicketModal;
