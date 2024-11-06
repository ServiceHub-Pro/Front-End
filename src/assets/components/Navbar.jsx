import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Artisan Connect</Link>
        <form className="flex items-center">
          <input 
            type="search" 
            placeholder="Find artisans near you" 
            className="py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-blue-800"
          >
            <i className="fas fa-search" />
          </button>
        </form>
        <div className="flex items-center">
          <i className="fas fa-bell text-lg mr-4" />
          <Link to="/profile" className="text-lg mr-4">
            <i className="fas fa-user" />
          </Link>
          <button className="bg-orange-500 text-blue-900 py-2 px-4 rounded-lg hover:bg-orange-700">
            What do you do ?
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;