import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Overview from "./components/dashboard/Overview";
import Analytics from "./components/analytics/Analytics";
import Settings from "./components/settings/Settings";
import { ThemeProvider } from "./components/context/ThemeContext";
// import Sidebar from "./components/Sidebar";

function App() {
  const isAuthenticated = localStorage.getItem("token"); // Check user authentication
  // const isAuthenticated = true;

  return (
    <ThemeProvider>
        {/* <Sidebar /> */}
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
    </ThemeProvider>
  );
}

export default App;
