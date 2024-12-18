import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa"; // Profile icon

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    // Check for the token in localStorage to determine if the user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <header className="sticky top-8 left-0 right-0 w-full bg-white shadow-md px-6 py-4 flex justify-between items-center z-10">
      {/* Left side: Dashboard title */}
      <div className="text-2xl font-bold text-blue-600"></div>

      {/* Right side: Navigation and Profile */}
      <div className="flex items-center space-x-4">
        {/* Navigation Links for Large Screens */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/dashboard" className="hover:text-blue-600 transition-colors duration-300">Overview</Link>
          <Link to="/analytics" className="hover:text-blue-600 transition-colors duration-300">Analytics</Link>
          <Link to="/settings" className="hover:text-blue-600 transition-colors duration-300">Settings</Link>
        </div>

        {/* Profile Section */}
        {isLoggedIn ? (
          <div className="relative">
            <button
              className="flex items-center space-x-2"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <FaUserCircle className="w-8 h-8 text-gray-600 cursor-pointer" />
            </button>
            {/* Profile dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200">
                <ul>
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <Link to="/settings">View Profile</Link>
                  </li>
                  <li
                    onClick={handleLogout}
                    className="px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer"
                  >
                    <div className="flex items-center">
                      <FiLogOut className="mr-2" /> Logout
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
