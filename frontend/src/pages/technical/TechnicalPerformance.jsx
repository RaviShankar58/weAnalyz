const TechnicalPerformance = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6">
      {/* Left side info */}
      <div className="bg-gray-100 p-4 rounded-xl space-y-4">
        <div className="flex gap-4 items-center">
          <div className="bg-gray-300 w-24 h-24 rounded-xl" />
          <div>
            <h3 className="font-bold text-lg">Technical Support Name</h3>
            <p className="text-sm">Contact No: 0123456789</p>
            <p className="text-sm">Department: ABC</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="font-semibold mb-2">Total Ticket Handle: 5</p>
          <ul className="text-sm">
            <li>Ticket Solved: 2</li>
            <li>Ticket Pending: 1</li>
            <li>Ticket in progress: 2</li>
            <li>
              Rating:
              <span className="text-yellow-500 ml-2">⭐⭐⭐⭐⭐</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right side members */}
      <div className="space-y-4">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex gap-4 items-center bg-white p-3 rounded shadow">
            <div className="bg-gray-300 w-12 h-12 rounded-xl" />
            <p className="flex-1">Technical Support {n}</p>
            <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 py-1 rounded">
              View details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalPerformance;