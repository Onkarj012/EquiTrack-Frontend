import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const portfolioData = [
  { date: "Jan", value: 45000 },
  { date: "Feb", value: 47000 },
  { date: "Mar", value: 50000 },
  { date: "Apr", value: 53000 },
  { date: "May", value: 56000 },
  { date: "Jun", value: 60000 },
];

const assetsData = [
  { name: "Stocks", value: 60 },
  { name: "Bonds", value: 20 },
  { name: "Crypto", value: 10 },
  { name: "Cash", value: 10 },
];

const COLORS = ["#4CAF50", "#FF9800", "#03A9F4", "#E91E63"];

const Dashboard: React.FC = () => {
  return (
    <div className="flex-1 p-6 flex flex-col items-center w-full">
      {/* First Row - Three Cards */}
      <div className="flex flex-row gap-6 w-full px-10">
        <div className="bg-gray-800 text-white p-4 h-40 rounded-lg shadow-md flex-1 flex flex-col">
          <p className="text-lg font-medium uppercase opacity-70">
            Total Investment
          </p>
          <p className="text-3xl font-semibold">$50,000</p>
          <p className="text-green-400 text-lg font-medium mt-0">+4.3%</p>
        </div>
        <div className="bg-gray-800 text-white p-4 h-40 rounded-lg shadow-md flex-1 flex flex-col">
          <p className="text-lg font-medium uppercase opacity-70">
            Current Value
          </p>
          <p className="text-3xl font-semibold">$60,000</p>
          <p className="text-green-400 text-sm font-medium mt-0">+4.3%</p>
        </div>
        <div className="bg-gray-800 text-white p-4 h-40 rounded-lg shadow-md flex-1 flex flex-col">
          <p className="text-lg font-medium uppercase opacity-70">
            Total Profit/Loss
          </p>
          <p className="text-3xl font-semibold">$10,000</p>
          <p className="text-red-400 text-sm font-medium mt-0">-2.5%</p>
        </div>
      </div>

      {/* Second Row - Graphs */}
      <div className="flex space-x-4 mt-4 w-full px-10">
        {/* Portfolio Growth - Line Chart */}
        <div className="bg-gray-800 text-white p-4 flex-1 rounded-lg shadow-md">
          <p className="text-lg font-medium uppercase opacity-70">
            Portfolio Growth
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={portfolioData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#555" />
              <XAxis dataKey="date" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4CAF50"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Assets Allocation - Pie Chart */}
        <div className="bg-gray-800 text-white p-4 flex-1 rounded-lg shadow-md">
          <p className="text-lg font-medium uppercase opacity-70">
            Assets Allocated
          </p>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={assetsData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {assetsData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
