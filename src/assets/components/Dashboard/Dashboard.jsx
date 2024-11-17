import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ServiceDescription from './ServiceDescription';
import OrderList from './OrderList';
import Notification from './Notification';
import DashHome from './DashHome';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[#4B2E2C] text-white h-screen fixed top-0 left-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#6D4C41] text-white ml-64 py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<DashHome />} />
            <Route path="services" element={<ServiceDescription />} />
            <Route path="orders" element={<OrderList />} />
            <Route path="notifications" element={<Notification />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
