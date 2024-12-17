import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Overview from "./components/dashboard/Overview";
import Analytics from "./components/dashboard/Analytics";
import Settings from "./components/dashboard/Settings";

function App() {
  const isAuthenticated = localStorage.getItem("token"); // Check user authentication
  // const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Navigate to="/login" />} />   
        // Landing page should be there
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected Routes */}
        {isAuthenticated ? (
          <>
            <Route path="/dashboard" element={<Overview />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}

      </Routes>
    </Router>
  );
}

export default App;
