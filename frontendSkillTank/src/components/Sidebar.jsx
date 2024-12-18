import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiHome,
  FiBarChart,
  FiSettings,
  FiUser,
  FiDollarSign,
  FiFileText,
  FiMail,
} from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Menu Button for Mobile (Positioned at top left) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-4 text-gray-600 absolute top-4 left-4 z-50"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:block bg-gray-100 h-screen p-4 fixed top-0 left-0 w-64 transition-all duration-300 ease-in-out z-40`}
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-600 px-4">abilityEX</h2>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/dashboard"
            className="flex items-center space-x-2 hover:text-blue-600"
          >
            <FiHome size={20} />
            <span className={`md:inline ${isOpen ? "inline" : "hidden"}`}>Overview</span>
          </Link>

          <Link
            to="/analytics"
            className="flex items-center space-x-2 hover:text-blue-600"
          >
            <FiBarChart size={20} />
            <span className={`md:inline ${isOpen ? "inline" : "hidden"}`}>Analytics</span>
          </Link>

          <Link
            to="/settings"
            className="flex items-center space-x-2 hover:text-blue-600"
          >
            <FiSettings size={20} />
            <span className={`md:inline ${isOpen ? "inline" : "hidden"}`}>Settings</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center space-x-2 hover:text-blue-600"
          >
            <FiUser size={20} />
            <span className={`md:inline ${isOpen ? "inline" : "hidden"}`}>Profile</span>
          </Link>
          <Link
            to="/billing"
            className="flex items-center space-x-2 hover:text-blue-600"
          >
            <FiDollarSign size={20} />
            <span className={`md:inline ${isOpen ? "inline" : "hidden"}`}>Billing</span>
          </Link>
          <Link
            to="/reports"
            className="flex items-center space-x-2 hover:text-blue-600"
          >
            <FiFileText size={20} />
            <span className={`md:inline ${isOpen ? "inline" : "hidden"}`}>Reports</span>
          </Link>
          <Link
            to="/messages"
            className="flex items-center space-x-2 hover:text-blue-600"
          >
            <FiMail size={20} />
            <span className={`md:inline ${isOpen ? "inline" : "hidden"}`}>Messages</span>
          </Link>
        </nav>
      </div>

      {/* Main Content Area */}
      <div
        className={`${
          isOpen ? "ml-64" : "ml-16"
        } flex-1 p-4 transition-all duration-300 ease-in-out`}
      >
        {/* The content that adjusts based on sidebar */}
        <h1 className="text-3xl font-bold">Dashboard Content</h1>
        {/* Your content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
