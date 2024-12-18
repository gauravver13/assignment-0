import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <button onClick={toggleTheme} className="bg-gray-700 text-white px-4 py-2 rounded">
        Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default Settings;
