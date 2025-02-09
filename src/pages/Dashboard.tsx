import React from "react";
import Dashboard from "../components/Dashboard"; // Importing UI component

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-4 flex flex-col w-full overflow-x-hidden">
      <Dashboard /> {/* Rendering the UI component */}
    </div>
  );
};

export default DashboardPage;
