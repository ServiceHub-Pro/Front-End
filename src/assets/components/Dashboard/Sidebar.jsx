import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaTools, FaClipboardList, FaBell, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate(); // Allows programmatic navigation

  const handleLogout = () => {
    // Add your logout logic here, like clearing user data
    console.log("Logged out");
    navigate('/'); // Redirect to home or login page
  };

  return (
    <div className="bg-[#4E342E] text-white w-64 h-screen p-6 flex flex-col">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-8 text-center text-[#E0B6A0]">Artisan Dashboard</h2>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
          <Link
            to="/dashboard"
            className="flex items-center space-x-3 hover:bg-[#8D6E63] p-3 rounded-lg transition duration-300 ease-in-out"
          >
            <FaHome className="text-2xl" />
            <span className="text-lg font-medium">Home</span>
          </Link>
          <Link
            to="/dashboard/services"
            className="flex items-center space-x-3 hover:bg-[#8D6E63] p-3 rounded-lg transition duration-300 ease-in-out"
          >
            <FaTools className="text-2xl" />
            <span className="text-lg font-medium">Services</span>
          </Link>
          <Link
            to="/dashboard/orders"
            className="flex items-center space-x-3 hover:bg-[#8D6E63] p-3 rounded-lg transition duration-300 ease-in-out"
          >
            <FaClipboardList className="text-2xl" />
            <span className="text-lg font-medium">Orders</span>
          </Link>
          <Link
            to="/dashboard/notifications"
            className="flex items-center space-x-3 hover:bg-[#8D6E63] p-3 rounded-lg transition duration-300 ease-in-out"
          >
            <FaBell className="text-2xl" />
            <span className="text-lg font-medium">Notifications</span>
          </Link>
          <Link
            to="/dashboard/profile"
            className="flex items-center space-x-3 hover:bg-[#8D6E63] p-3 rounded-lg transition duration-300 ease-in-out"
          >
            <FaUserCircle className="text-2xl" />
            <span className="text-lg font-medium">Profile</span>
          </Link>
        </nav>
      </div>


      {/* Logout Button */ }
  <div className="mt-12">
    <button
      onClick={handleLogout}
      className="w-full bg-[#8D6E63] text-white py-3 rounded-lg hover:bg-[#A87C6E] transition duration-300 ease-in-out"
    >
      Logout
    </button>
  </div>
    </div >
  );
};

export default Sidebar;
