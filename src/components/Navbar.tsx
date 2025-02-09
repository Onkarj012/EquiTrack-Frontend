import React from "react";
import { Link } from "react-router-dom";
import userAvatar from "../assets/photo.jpeg"; // Corrected image import

const Navbar: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 bg-gray-900 text-white p-4 flex items-center shadow-md z-50">
        {/* Left: Logo and Navigation Links */}
        <div className="flex items-center space-x-6 font-lexend">
          <div className="text-2xl">EquiTrack</div>

          {/* Navigation Links */}
          <div className="flex space-x-4 font-lexend">
            <Link
              to="/"
              className="text-white hover:text-gray-400 cursor-pointer no-underline"
            >
              Dashboard
            </Link>
            <Link
              to="/portfolio"
              className="text-white hover:text-gray-400 cursor-pointer no-underline"
            >
              Portfolio
            </Link>
            <Link
              to="/transactions"
              className="text-white hover:text-gray-400 cursor-pointer no-underline"
            >
              Transactions
            </Link>
            <Link
              to="/analysis"
              className="text-white hover:text-gray-400 cursor-pointer no-underline"
            >
              Analytics
            </Link>
          </div>
        </div>

        {/* Right: Notification & User Avatar */}
        <div className="ml-auto flex items-center space-x-4">
          <i className="fas fa-bell text-lg cursor-pointer hover:text-gray-400"></i>
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-8 h-8 rounded-full hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Separator - Placed outside navbar */}
      <div className="fixed w-full">
        <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
      </div>
    </>
  );
};

export default Navbar;
