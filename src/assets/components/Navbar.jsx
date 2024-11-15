import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserContext';

const Navbar = () => {
  const { user, setUser } = useUser();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setLoading(true);
      fetch('https://servicehub-api.onrender.com/user-profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUserProfile(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching user profile:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    navigate('/login');
  };

  return (
    <nav className="bg-[#6A4E23] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Service Hub
        </Link>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-[#D4B18B] transition">Home</Link>
          <Link to="/services" className="hover:text-[#D4B18B] transition">Services</Link>
          <Link to="/about" className="hover:text-[#D4B18B] transition">About</Link>
          <Link to="/contact" className="hover:text-[#D4B18B] transition">Contact</Link>
        </div>

        <div className="flex items-center space-x-6">
          <i className="fas fa-bell text-lg cursor-pointer hover:text-[#D4B18B]" aria-label="Notifications" />

          {user ? (
            <div className="flex items-center space-x-4">
              {loading ? (
                <span className="text-sm font-semibold">Loading...</span>
              ) : (
                <>
                  <span className="text-sm font-semibold">{userProfile ? userProfile.name : user.name}</span>
                  <span className="text-sm text-gray-300">{userProfile ? userProfile.email : user.email}</span>
                  <Link to="/profile" className="hover:text-[#D4B18B]" aria-label="User profile">
                    <i className="fas fa-user-circle text-2xl" />
                  </Link>
                  <button 
                    onClick={handleLogout} 
                    className="text-sm text-[#D4B18B] hover:text-[#D4B18B] transition duration-300"
                    aria-label="Logout"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-sm hover:text-[#D4B18B] font-medium transition duration-300"
                aria-label="Login"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#B78E59] text-white text-lg font-semibold rounded-lg hover:bg-[#6D4C41] transition duration-300 py-2 px-4"
                aria-label="Sign up"
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
