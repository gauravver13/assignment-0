import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from "./ui/button.jsx";
import { Menu, ChevronRight, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const getBreadcrumbs = () => {
    const path = location.pathname.split('/').filter(Boolean);
    return path.map((item, index) => ({
      label: item.charAt(0).toUpperCase() + item.slice(1),
      href: '/' + path.slice(0, index + 1).join('/')
    }));
  };

  return (
    <header className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'} focus:outline-none lg:hidden`}
              onClick={() => setSidebarOpen(true)}
            >
              <Menu />
            </button>
            <div className="ml-4 text-xl font-semibold">SaaS Dashboard</div>
            <div className="flex items-center space-x-2 text-sm ml-4">
              {getBreadcrumbs().map((crumb, index) => (
                <div key={crumb.href} className="flex items-center">
                  {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
                  <Link to={crumb.href} className={`${theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>
                    {crumb.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button onClick={toggleTheme} variant="ghost" size="icon">
              {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

