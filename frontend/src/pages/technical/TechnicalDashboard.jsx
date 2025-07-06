import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { UserRound } from 'lucide-react';

const ticketData = [
  { name: 'Solved', value: 5 },
  { name: 'Pending', value: 2 },
  { name: 'In Progress', value: 1 },
];

const TechnicalDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Welcome to Technical Team Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Ticket Summary Cards */}
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="font-bold text-lg mb-2">Total Tickets Solved</h2>
          <p className="text-4xl text-green-600 font-bold">5</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="font-bold text-lg mb-2">Pending Tickets</h2>
          <p className="text-4xl text-yellow-500 font-bold">2</p>
        </div>
        <div className="bg-white shadow rounded-xl p-4">
          <h2 className="font-bold text-lg mb-2">In Progress</h2>
          <p className="text-4xl text-blue-500 font-bold">1</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white shadow rounded-xl p-6 mt-10">
        <h2 className="font-semibold text-xl mb-4">Ticket Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ticketData}>
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="value" fill="#06b6d4" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Team List */}
      <div className="bg-white shadow rounded-xl p-6 mt-10">
        <h2 className="font-semibold text-xl mb-4">Technical Team</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((id) => (
            <div
              key={id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-200 p-2 rounded-full">
                  <UserRound size={24} />
                </div>
                <p className="font-medium">Technical Support {id}</p>
              </div>
              <button className="bg-[#2AF5FF] hover:bg-[#21d7e0] text-white px-4 py-2 rounded">
                View details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalDashboard;