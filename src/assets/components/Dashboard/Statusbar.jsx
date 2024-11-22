import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiBell } from 'react-icons/fi';

const Statusbar = () => {
  const [profile, setProfile] = useState({ name: '', role: '', avatar: '' });

  useEffect(() => {
    // Fetch user profile from backend upon component mount
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token'); // Get token from localStorage
        const response = await axios.get('https://servicehub-api.onrender.com/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data); // Set profile data
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex items-center justify-between bg-[#583a33] px-6 py-4 text-white shadow-md fixed top-0 left-64 right-0 z-10">
      {/* Notifications */}
      <div className="relative">
        <FiBell className="text-lg text-white cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
          3
        </span>
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <img
            src={profile.avatar || '/default-avatar.png'}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-sm font-semibold">{profile.name || 'Loading...'}</h3>
          <p className="text-xs text-gray-300">{profile.role || 'User'}</p>
        </div>
      </div>
    </div>
  );
};

export default Statusbar;
