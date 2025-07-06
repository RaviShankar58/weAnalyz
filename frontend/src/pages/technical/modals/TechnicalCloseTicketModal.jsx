const TechnicalCloseTicketModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded shadow w-[500px]">
        <h2 className="text-xl font-semibold mb-4">Close Ticket</h2>
        <form className="grid gap-4">
          <input placeholder="Ticket No." className="border p-2 rounded italic" />
          <input placeholder="Team name" className="border p-2 rounded" />
          <input placeholder="Team Member" className="border p-2 rounded" />
          <textarea placeholder="Remark" className="border p-2 rounded"></textarea>

          <div className="flex justify-between items-center mt-4">
            <button type="button" className="text-xl rotate-90">🔄</button>
            <button
              type="submit"
              className="bg-gray-400 text-white px-4 py-1 rounded"
              onClick={onClose}
            >
              Close Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TechnicalCloseTicketModal;