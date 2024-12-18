import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import Sidebar from "../Sidebar";
import Header from "../Header";
import axios from "axios";

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  // State for the user profile
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for form validation and success
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(false);

  // Fetch current user profile
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("/api/user/profile"); // Replace with your actual API endpoint
        setUserData({
          name: response.data.name,
          email: response.data.email,
          password: "",
        });
      } catch (error) {
        console.error("Error fetching user profile", error);
      }
    };

    fetchUserProfile();
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handle submit (PUT request to update user profile)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError(null);
    setUpdateSuccess(false);

    if (!userData.name || !userData.email || !userData.password) {
      setFormError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.put("/api/user/profile", userData); // Replace with your actual API endpoint
      if (response.status === 200) {
        setUpdateSuccess(true);
      }
    } catch (error) {
      setFormError("Error updating profile. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className={`flex  bg-${theme === "dark" ? "gray-900" : "gray-100"}`}>
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto p-6 mt-16 lg:ml-64 md:ml-16 sm:ml-0">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">Settings</h2>

            {/* Profile Update Form */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Profile Information</h3>

              {updateSuccess && (
                <p className="text-green-500 mb-4">Profile updated successfully!</p>
              )}

              {formError && (
                <p className="text-red-500 mb-4">{formError}</p>
              )}

              <form onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="col-span-1">
                    <label htmlFor="password" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={userData.password}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-blue-500"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg disabled:opacity-50 hover:bg-blue-600 transition-colors duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? "Updating..." : "Update Profile"}
                  </button>
                </div>
              </form>
            </section>

            {/* Theme Toggle Section */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Theme Preferences</h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-700 dark:text-gray-300">Current Theme: {theme}</p>
                <button
                  onClick={toggleTheme}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  Toggle Theme
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
