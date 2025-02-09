import React from "react";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaWallet,
  FaExchangeAlt,
  FaChartPie,
} from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-700 p-3 w-64 h-full">
      <h2 className="text-center text-white font-bold mb-4 text-2xl">
        EquiTrack
      </h2>
      <ul className="flex flex-col space-y-2">
        <li>
          <Link
            to="/"
            className="flex items-center text-white px-3 py-2 rounded bg-gray-600"
          >
            <FaChartLine className="mr-2" /> Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/portfolio"
            className="flex items-center text-white px-3 py-2 rounded hover:bg-gray-500 transition-colors"
          >
            <FaWallet className="mr-2" /> Portfolio
          </Link>
        </li>
        <li>
          <Link
            to="/transactions"
            className="flex items-center text-white px-3 py-2 rounded hover:bg-gray-500 transition-colors"
          >
            <FaExchangeAlt className="mr-2" /> Transactions
          </Link>
        </li>
        <li>
          <Link
            to="/analytics"
            className="flex items-center text-white px-3 py-2 rounded hover:bg-gray-500 transition-colors"
          >
            <FaChartPie className="mr-2" /> Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
