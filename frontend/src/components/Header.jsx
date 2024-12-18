import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <header className="flex justify-between items-center bg-gray-800 text-white px-4 py-3">
      <nav className="flex space-x-4">
        <Link to="/dashboard" className="hover:text-blue-400">Overview</Link>
        <Link to="/analytics" className="hover:text-blue-400">Analytics</Link>
        <Link to="/settings" className="hover:text-blue-400">Settings</Link>
      </nav>
      <button onClick={handleLogout} className="bg-red-500 px-3 py-2 rounded">Logout</button>
    </header>
  );
};

export default Header;
