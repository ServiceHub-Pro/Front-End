import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ServiceDescription from './ServiceDescription';
import OrderList from './OrderList';
import Notification from './Notification';
import DashHome from './DashHome';
import Profile from './Profile';
import Statusbar from './Statusbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[#4B2E2C] text-white h-screen fixed top-0 left-0">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Status Bar */}
        <div className="fixed top-0 left-64 right-0 z-10">
          <Statusbar />
        </div>

        {/* Main Dashboard Content */}
        <div className="bg-[#6D4C41] text-white pt-20 pb-10 px-6">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<DashHome />} />
              <Route path="services" element={<ServiceDescription />} />
              <Route path="orders" element={<OrderList />} />
              <Route path="notifications" element={<Notification />} />
              <Route path="profile" element={<Profile />} />
            </Routes>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
