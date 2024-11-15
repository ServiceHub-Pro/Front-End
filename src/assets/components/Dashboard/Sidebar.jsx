import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaTools, FaClipboardList, FaBell } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate(); // Allows programmatic navigation

  const handleLogout = () => {
    // Add your logout logic here, like clearing user data
    console.log("Logged out");
    navigate('/'); // Redirect to home or login page
  };

  return (
    <div className="bg-[#4E342E] text-white w-64 h-screen p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-10 text-center">Artisan Dashboard</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/dashboard" className="flex items-center space-x-2 hover:bg-[#8D6E63] p-2 rounded w-full">
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link to="/dashboard/services" className="flex items-center space-x-2 hover:bg-[#8D6E63] p-2 rounded w-full">
            <FaTools className="text-xl" />
            <span>Services</span>
          </Link>
          <Link to="/dashboard/orders" className="flex items-center space-x-2 hover:bg-[#8D6E63] p-2 rounded w-full">
            <FaClipboardList className="text-xl" />
            <span>Orders</span>
          </Link>
          <Link to="/dashboard/notifications" className="flex items-center space-x-2 hover:bg-[#8D6E63] p-2 rounded w-full">
            <FaBell className="text-xl" />
            <span>Notifications</span>
          </Link>
        </nav>
      </div>
      <div>
        <button onClick={handleLogout} className="w-full mt-4 bg-[#8D6E63] text-white p-2 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
