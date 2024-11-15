import React, { useState, useEffect } from 'react';

const DashHome = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [orders, setOrders] = useState([]);
  const [services, setServices] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, ordersRes, servicesRes, notificationsRes] = await Promise.all([
          fetch(`${import.meta.env.VITE_BASE_URL}/user/details`, { method: 'GET' }),
          fetch(`${import.meta.env.VITE_BASE_URL}/artisan/orders`, { method: 'GET' }),
          fetch(`${import.meta.env.VITE_BASE_URL}/artisan/services`, { method: 'GET' }),
          fetch(`${import.meta.env.VITE_BASE_URL}/notifications`, { method: 'GET' }),
        ]);

        if (userRes.ok) setUserDetails(await userRes.json());
        if (ordersRes.ok) setOrders(await ordersRes.json());
        if (servicesRes.ok) setServices(await servicesRes.json());
        if (notificationsRes.ok) setNotifications(await notificationsRes.json());
        
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setError('Failed to load data'); // Set error state
        setLoading(false); // Stop loading when error occurs
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div className="text-center py-10">{error}</div>; // Show error message if any error occurs
  }

  return (
    <div className="min-h-screen bg-[#6D4C41] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="text-center">
          <h2 className="text-3xl font-bold">Welcome, {userDetails?.name || 'Artisan'}</h2>
        </header>

        {/* Personal Details */}
        <section className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
          <p><strong>Name:</strong> {userDetails?.name}</p>
          <p><strong>Email:</strong> {userDetails?.email}</p>
        </section>

        {/* Services */}
        <section className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Your Services</h3>
          {services.length > 0 ? (
            services.map((service, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <p>{service.name}</p>
                <button className="bg-[#8D6E63] text-white px-4 py-2 rounded">Edit</button>
              </div>
            ))
          ) : (
            <p>No services added yet.</p>
          )}
        </section>

        {/* Order List */}
        <section className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Your Orders</h3>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <p>{order.description}</p>
                <p>{order.status}</p>
              </div>
            ))
          ) : (
            <p>No orders yet.</p>
          )}
        </section>

        {/* Notifications */}
        <section className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Notifications</h3>
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <p>{notification.message}</p>
                <p>{new Date(notification.date).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No new notifications.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default DashHome;
