// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [orders, setOrders] = useState([]);
  const [services, setServices] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch data from the API (replace with actual API endpoint)
    const fetchData = async () => {
      const userResponse = await fetch(`${import.meta.env.VITE_BASE_URL}/user/details`, { method: 'GET' });
      const ordersResponse = await fetch(`${import.meta.env.VITE_BASE_URL}/artisan/orders`, { method: 'GET' });
      const servicesResponse = await fetch(`${import.meta.env.VITE_BASE_URL}/artisan/services`, { method: 'GET' });
      const notificationsResponse = await fetch(`${import.meta.env.VITE_BASE_URL}/notifications`, { method: 'GET' });

      if (userResponse.ok) setUserDetails(await userResponse.json());
      if (ordersResponse.ok) setOrders(await ordersResponse.json());
      if (servicesResponse.ok) setServices(await servicesResponse.json());
      if (notificationsResponse.ok) setNotifications(await notificationsResponse.json());
    };
    
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-[#6D4C41] text-white py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Welcome, {userDetails?.name || 'Artisan'}</h2>
          </div>

          {/* Personal Details */}
          <div className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
            <div className="space-y-4">
              <p><strong>Name:</strong> {userDetails?.name}</p>
              <p><strong>Email:</strong> {userDetails?.email}</p>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Your Services</h3>
            <div className="space-y-4">
              {services.map((service, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p>{service.name}</p>
                  <button className="bg-[#8D6E63] text-white px-4 py-2 rounded">Edit</button>
                </div>
              ))}
            </div>
          </div>

          {/* Order List */}
          <div className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Your Orders</h3>
            <div className="space-y-4">
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <p>{order.description}</p>
                    <p>{order.status}</p>
                  </div>
                ))
              ) : (
                <p>No orders yet.</p>
              )}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Notifications</h3>
            <div className="space-y-4">
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <p>{notification.message}</p>
                    <p>{new Date(notification.date).toLocaleDateString()}</p>
                  </div>
                ))
              ) : (
                <p>No new notifications.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
