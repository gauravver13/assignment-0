import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import UserCountWidget from '../components/widgets/UserCountWidget';

const DashboardOverview = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
          <div className="grid grid-cols-3 gap-4">
            <UserCountWidget />
            {/* Add other widgets */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
