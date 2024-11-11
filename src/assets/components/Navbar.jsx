import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user }) => {
  return (
    <nav className="bg-[#6A4E23] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link to="/" className="text-2xl font-bold text-white">
          Artisan Connect
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-[#D4B18B] transition">Home</Link>
          <Link to="/services" className="hover:text-[#D4B18B] transition">Services</Link>
          <Link to="/about" className="hover:text-[#D4B18B] transition">About</Link>
          <Link to="/contact" className="hover:text-[#D4B18B] transition">Contact</Link>
        </div>

        {/* User Profile and Notifications */}
        <div className="flex items-center space-x-6">
          <i className="fas fa-bell text-lg cursor-pointer hover:text-[#D4B18B]" />

          {/* Conditionally show user details if logged in */}
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold">{user.name}</span>
              <Link to="/profile" className="hover:text-[#D4B18B]">
                <i className="fas fa-user-circle text-2xl" />
              </Link>
            </div>
          ) : (
            // If no user logged in, show login/signup links
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-sm hover:text-[#D4B18B]">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#B78E59] text-white text-lg font-semibold rounded-lg hover:bg-[#6D4C41] transition duration-300 py-2 px-4"
              >
                Sign Up
              </Link>

            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
