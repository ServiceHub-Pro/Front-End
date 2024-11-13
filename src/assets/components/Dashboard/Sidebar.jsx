// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTools, FaClipboardList, FaBell } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-[#4E342E] text-white w-64 h-screen p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-10">Artisan Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/dashboard" className="flex items-center space-x-2 hover:bg-[#8D6E63] p-2 rounded">
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link to="/dashboard/services" className="flex items-center space-x-2 hover:bg-[#8D6E63] p-2 rounded">
            <FaTools className="text-xl" />
            <span>Services</span>
          </Link>
          <Link to="/dashboard/orders" className="flex items-center space-x-2 hover:bg-[#8D6E63] p-2 rounded">
            <FaClipboardList className="text-xl" />
            <span>Orders</span>
          </Link>
          <Link to="/dashboard/notifications" className="flex items-center space-x-2 hover:bg-[#8D6E63] p-2 rounded">
            <FaBell className="text-xl" />
            <span>Notifications</span>
          </Link>
          {/* Add more links and icons as needed */}
        </nav>
      </div>
      <div>
        {/* Optional Footer or Logout */}
        <button className="w-full mt-4 bg-[#8D6E63] text-white p-2 rounded">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
