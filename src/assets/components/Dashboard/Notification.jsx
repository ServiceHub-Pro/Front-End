import React, { useState } from 'react';

const Notification = () => {
  // Dummy data for notifications
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New order request from John Doe", time: "2 hours ago" },
    { id: 2, message: "Your profile was updated successfully", time: "1 day ago" },
    { id: 3, message: "Payment received for service: Plumbing", time: "3 days ago" },
  ]);

  // Handle Accept action
  const handleAccept = (id) => {
    console.log(`Accepted notification ID: ${id}`);
    // You can add logic here to update the backend when needed
  };

  // Handle Decline action
  const handleDecline = (id) => {
    console.log(`Declined notification ID: ${id}`);
    // You can add logic here to update the backend when needed
  };

  return (
    <div className="min-h-screen bg-[#6D4C41] text-white py-10 px-4">
      <h2 className="text-3xl font-bold mb-6">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-[#8D6E63] p-4 rounded shadow-lg flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">{notification.message}</p>
              <p className="text-sm text-gray-300">{notification.time}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleAccept(notification.id)}
                className="bg-[#4CAF50] text-white py-1 px-3 rounded hover:bg-[#388E3C]"
              >
                Accept
              </button>
              <button
                onClick={() => handleDecline(notification.id)}
                className="bg-[#D32F2F] text-white py-1 px-3 rounded hover:bg-[#B71C1C]"
              >
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
