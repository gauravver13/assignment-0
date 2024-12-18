import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import DashboardOverview from '../pages/DashboardOverview';
import Analytics from '../pages/Analytics';
import Settings from '../pages/Settings';

const AppRoutes = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Replace with a more robust auth check if needed

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={isAuthenticated ? <DashboardOverview /> : <Navigate to="/" />} />
        <Route path="/analytics" element={isAuthenticated ? <Analytics /> : <Navigate to="/" />} />
        <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
