import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const assetData = [
  { name: "Stocks", value: 45 },
  { name: "Bonds", value: 30 },
  { name: "Cash", value: 15 },
  { name: "Other", value: 10 },
];

const sectorData = [
  { sector: "Tech", value: 30 },
  { sector: "Finance", value: 25 },
  { sector: "Healthcare", value: 20 },
  { sector: "Energy", value: 15 },
  { sector: "Other", value: 10 },
];

const historicalData = [
  { date: "Jan", value: 800000 },
  { date: "Feb", value: 820000 },
  { date: "Mar", value: 850000 },
  { date: "Apr", value: 870000 },
  { date: "May", value: 900000 },
  { date: "Jun", value: 920000 },
];

const COLORS = ["#4CAF50", "#FF9800", "#03A9F4", "#E91E63"];

const Analysis = () => {
  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      {/* Title */}
      <h1 className="text-3xl mb-6">Analysis</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-gray-400">Total Portfolio Value</p>
          <p className="text-2xl">$847,392.54</p>
          <p className="text-green-400">📈 +2.4%</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-gray-400">Today's Change</p>
          <p className="text-2xl">+$4,231.89</p>
          <p className="text-green-400">📈 +0.5%</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-gray-400">YTD Return</p>
          <p className="text-2xl">+$92,847.12</p>
          <p className="text-green-400">📈 +12.3%</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
          <p className="text-gray-400">Total Return</p>
          <p className="text-2xl">+$247,392.54</p>
          <p className="text-green-400">📈 +41.2%</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Asset Allocation - Pie Chart */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg mb-2">Asset Allocation</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={assetData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {assetData.map((_, index) => (
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

        {/* Sector Distribution - Bar Chart */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg mb-2">Sector Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={sectorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="sector" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <Tooltip />
              <Bar dataKey="value" fill="#4CAF50" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Historical Performance - Line Chart */}
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Historical Performance</h3>

        {/* Time Range Buttons */}
        <div className="flex space-x-2 mb-4">
          <button className="px-3 py-1 bg-gray-700 text-white rounded-md">
            1M
          </button>
          <button className="px-3 py-1 bg-white text-black rounded-md">
            3M
          </button>
          <button className="px-3 py-1 bg-gray-700 text-white rounded-md">
            6M
          </button>
          <button className="px-3 py-1 bg-gray-700 text-white rounded-md">
            1Y
          </button>
          <button className="px-3 py-1 bg-gray-700 text-white rounded-md">
            All
          </button>
        </div>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="date" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#03A9F4"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analysis;
