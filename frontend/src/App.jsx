import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <Header />
          <main className="flex-grow p-4">
            <AppRoutes />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
