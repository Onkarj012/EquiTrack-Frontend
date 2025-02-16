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
import "../styles/Dashboard.css"; // Import the CSS file

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
      {/* First Row - Three Cards with Glow Effect */}
      <div className="flex flex-row gap-6 w-full px-10">
        {[
          {
            title: "Total Investment",
            value: "$50,000",
            change: "+4.3%",
            changeColor: "text-green-400",
          },
          {
            title: "Current Value",
            value: "$60,000",
            change: "+4.3%",
            changeColor: "text-green-400",
          },
          {
            title: "Total Profit/Loss",
            value: "$10,000",
            change: "-2.5%",
            changeColor: "text-red-400",
          },
        ].map((card, index) => (
          <div key={index} className="cards">
            <p className="text-lg font-medium opacity-70">{card.title}</p>
            <p className="text-3xl font-semibold">{card.value}</p>
            <p className={`${card.changeColor} text-lg font-medium mt-0`}>
              {card.change}
            </p>
          </div>
        ))}
      </div>

      {/* Second Row - Graphs */}
      <div className="flex space-x-4 mt-4 w-full px-10">
        {/* Portfolio Growth - Line Chart */}
        <div className="chart-container">
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
        <div className="chart-container">
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
