import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from "./ui/button.jsx";
import { Home, BarChart2, Settings, X } from 'lucide-react';

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${
          open ? 'block' : 'hidden'
        }`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform ${
          theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
        } lg:translate-x-0 lg:static lg:inset-0 ${
          open ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'
        }`}
      >
        <div className="flex items-center justify-between flex-shrink-0 p-4">
          <span className="text-lg font-semibold">SaaS Dashboard</span>
          <Button
            onClick={() => setOpen(false)}
            className={`p-1 transition-colors duration-200 rounded-md ${
              theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            } focus:outline-none lg:hidden`}
          >
            <X size={24} />
          </Button>
        </div>

        <nav className="mt-5">
          <Link
            className={`flex items-center px-6 py-2 mt-4 duration-200 border-l-4 ${
              location.pathname === '/dashboard'
                ? `${theme === 'dark' ? 'border-blue-500 bg-gray-800 text-white' : 'border-blue-500 bg-blue-100 text-blue-900'}`
                : `${theme === 'dark' ? 'border-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white' : 'border-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
            }`}
            to="/dashboard"
          >
            <Home className="w-5 h-5" />
            <span className="mx-4">Dashboard</span>
          </Link>

          <Link
            className={`flex items-center px-6 py-2 mt-4 duration-200 border-l-4 ${
              location.pathname === '/analytics'
                ? `${theme === 'dark' ? 'border-blue-500 bg-gray-800 text-white' : 'border-blue-500 bg-blue-100 text-blue-900'}`
                : `${theme === 'dark' ? 'border-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white' : 'border-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
            }`}
            to="/analytics"
          >
            <BarChart2 className="w-5 h-5" />
            <span className="mx-4">Analytics</span>
          </Link>

          <Link
            className={`flex items-center px-6 py-2 mt-4 duration-200 border-l-4 ${
              location.pathname === '/settings'
                ? `${theme === 'dark' ? 'border-blue-500 bg-gray-800 text-white' : 'border-blue-500 bg-blue-100 text-blue-900'}`
                : `${theme === 'dark' ? 'border-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white' : 'border-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`
            }`}
            to="/settings"
          >
            <Settings className="w-5 h-5" />
            <span className="mx-4">Settings</span>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

