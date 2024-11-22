import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState({ name: '', avatar: '' });
  const [newName, setNewName] = useState('');
  const [newAvatar, setNewAvatar] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch user profile data on page load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
        const response = await axios.get('https://servicehub-api.onrender.com/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data); // Set the user profile data
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    fetchProfile();
  }, []);

  // Handle the form submission to update profile
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('name', newName || user.name);  // If no new name, use the existing one
    formData.append('avatar', newAvatar || user.avatar);  // If no new avatar, use the existing one

    try {
      const response = await axios.patch('https://servicehub-api.onrender.com/users/me', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data); // Update user state with the new profile data
      setLoading(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      setLoading(false);
      alert('Failed to update profile');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Profile</h2>

      {/* User Profile */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative mb-6">
          {/* Avatar */}
          <img
            src={user.avatar || '/default-avatar.png'} // Default avatar if not available
            alt="User Avatar"
            className="w-32 h-32 rounded-full object-cover border-4 border-[#8D6E63]"
          />
        </div>
        <p className="text-xl font-medium text-gray-800">{user.name}</p>
      </div>

      {/* Update Profile Form */}
      <form onSubmit={handleUpdateProfile} className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#8D6E63] focus:outline-none"
            placeholder={user.name || 'Enter your name'}
          />
        </div>

        {/* Avatar Upload */}
        <div>
          <label htmlFor="avatar" className="block text-sm font-medium text-gray-700 mb-2">Avatar</label>
          <input
            type="file"
            id="avatar"
            onChange={(e) => setNewAvatar(e.target.files[0])}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#8D6E63] focus:outline-none"
          />
        </div>

        {/* Update Button */}
        <button
          type="submit"
          className="w-full bg-[#8D6E63] text-white py-3 rounded-lg mt-4 hover:bg-[#A87C6E] transition duration-300 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
};

export default Profile;
