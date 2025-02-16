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
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

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
    <>
      <Navbar />
      <div className="container text-white bg-gray-900 min-h-screen p-6">
        {/* Title */}
        <h1 className="text-3xl mb-6">Analysis</h1>

        {/* First Layer: 4 Stat Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            "Total Portfolio Value",
            "Today's Change",
            "YTD Return",
            "Total Return",
          ].map((title, index) => (
            <div key={index} className="cards ">
              <p className="card-title">{title}</p>
              <p className="card-value">
                ${[847392.54, 4231.89, 92847.12, 247392.54][index]}
              </p>
              <p className="card-change text-green-400">
                📈 +{[2.4, 0.5, 12.3, 41.2][index]}%
              </p>
            </div>
          ))}
        </div>

        {/* Second Layer: Pie Chart & Bar Chart */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="chart-container">
            <h3 className="card-header">Asset Allocation</h3>
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

          <div className="chart-container">
            <h3 className="card-header">Sector Distribution</h3>
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

        {/* Third Layer: Full-width Line Chart */}
        <div className="chart-container">
          <div className="flex justify-between items-center mb-4">
            <h3 className="card-header">Historical Performance</h3>
            <div className="flex gap-2">
              {["1D", "1W", "1M", "3M", "6M", "1Y", "All"].map(
                (label, index) => (
                  <button
                    key={index}
                    className={`time-btn px-3 py-1 rounded-md ${
                      index === 0
                        ? "bg-blue-500 text-white"
                        : "bg-gray-700 text-gray-300"
                    } hover:bg-blue-600`}
                  >
                    {label}
                  </button>
                )
              )}
            </div>
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
    </>
  );
};

export default Analysis;
