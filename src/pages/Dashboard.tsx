import React from "react";
import Dashboard from "../components/Dashboard"; // Importing UI component
import Navbar from "../components/Navbar";

const DashboardPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 text-white p-4 flex flex-col w-full overflow-x-hidden">
        <Dashboard /> {/* Rendering the UI component */}
      </div>
    </>
  );
};

export default DashboardPage;
