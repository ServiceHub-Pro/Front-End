import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import ServiceDescription from './ServiceDescription';
import OrderList from './OrderList';
import Notification from './Notification';
import DashHome from './DashHome';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      
      <Sidebar/>

      <div className="flex-1 bg-[#6D4C41] text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<DashHome/>} />
            <Route path="services" element={<ServiceDescription/>} />
            <Route path="orders" element={<OrderList/>} />
            <Route path="notifications" element={<Notification/>} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
