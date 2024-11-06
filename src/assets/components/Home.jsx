import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Link to="/login">
        <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600 transition duration-200">
          Login
        </button>
      </Link>
      <Link to="/signup">
        <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-green-600 transition duration-200">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default Home;
