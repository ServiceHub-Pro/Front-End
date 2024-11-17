import React, { useState } from "react";

const OrderList = () => {
  // Dummy data to simulate backend orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      customerName: "John Doe",
      service: "Plumbing",
      details: "Fix a leaking pipe in the kitchen.",
      date: "2024-11-17",
      status: "Pending",
    },
    {
      id: 2,
      customerName: "Jane Smith",
      service: "Carpentry",
      details: "Build a custom wooden shelf.",
      date: "2024-11-18",
      status: "Pending",
    },
  ]);

  // Placeholder function to handle accepting an order
  const handleAccept = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "Accepted" } : order
      )
    );
  };

  // Placeholder function to handle declining an order
  const handleDecline = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "Declined" } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF3EB] py-10 px-6">
      <h2 className="text-3xl font-bold text-[#4B2E2C] mb-8 text-center">
        Order List
      </h2>

      {orders.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-[#D7CCC8] shadow-md rounded-lg p-6 flex flex-col space-y-4"
            >
              <h3 className="text-lg font-semibold text-[#4B2E2C]">
                {order.customerName}
              </h3>
              <p className="text-sm text-[#6D4C41]">
                <strong>Service:</strong> {order.service}
              </p>
              <p className="text-sm text-[#6D4C41]">
                <strong>Details:</strong> {order.details}
              </p>
              <p className="text-sm text-[#6D4C41]">
                <strong>Date:</strong> {order.date}
              </p>
              <p
                className={`text-sm font-bold ${
                  order.status === "Accepted"
                    ? "text-green-700"
                    : order.status === "Declined"
                    ? "text-red-700"
                    : "text-yellow-700"
                }`}
              >
                Status: {order.status}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => handleAccept(order.id)}
                  className="bg-[#6D4C41] text-white py-2 px-4 rounded hover:bg-[#5D4037]"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDecline(order.id)}
                  className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800"
                >
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-[#6D4C41]">No orders to display.</p>
      )}
    </div>
  );
};

export default OrderList;
