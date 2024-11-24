// import React, { useState, useEffect } from "react";

// const DashHome = () => {
//   const [userDetails, setUserDetails] = useState(null);
//   const [orders, setOrders] = useState([]);
//   const [services, setServices] = useState([]);
//   const [notifications, setNotifications] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const [userRes, ordersRes, servicesRes, notificationsRes] = await Promise.all([
//           fetch(`${import.meta.env.VITE_BASE_URL}/user/details`, { method: "GET" }),
//           fetch(`${import.meta.env.VITE_BASE_URL}/artisan/orders`, { method: "GET" }),
//           fetch(`${import.meta.env.VITE_BASE_URL}/artisan/services`, { method: "GET" }),
//           fetch(`${import.meta.env.VITE_BASE_URL}/notifications`, { method: "GET" }),
//         ]);

//         if (userRes.ok) setUserDetails(await userRes.json());
//         if (ordersRes.ok) setOrders(await ordersRes.json());
//         if (servicesRes.ok) setServices(await servicesRes.json());
//         if (notificationsRes.ok) setNotifications(await notificationsRes.json());
        
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("An error occurred while loading your data.");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-[#6D4C41] text-white">
//         <p className="text-lg">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-[#6D4C41] text-white">
//         <p className="text-lg">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#6D4C41] text-white py-10 px-4">
//       <div className="max-w-7xl mx-auto space-y-8">
//         {/* Welcome Section */}
//         <header className="text-center mb-8">
//           <h1 className="text-4xl font-bold">
//             Welcome, {userDetails?.name || "Artisan"}
//           </h1>
//           <p className="text-lg mt-2">Here's an overview of your dashboard</p>
//         </header>

//         {/* Sections Grid */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {/* Personal Details */}
//           <section className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6">
//             <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
//             <p><strong>Name:</strong> {userDetails?.name}</p>
//             <p><strong>Email:</strong> {userDetails?.email}</p>
//           </section>

//           {/* Services */}
//           <section className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6">
//             <h3 className="text-xl font-semibold mb-4">Your Services</h3>
//             {services.length > 0 ? (
//               <ul className="space-y-2">
//                 {services.map((service, index) => (
//                   <li key={index} className="flex justify-between items-center">
//                     <p>{service.name}</p>
//                     <button className="bg-[#8D6E63] text-white px-4 py-2 rounded hover:bg-[#6D4C41]">
//                       Edit
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No services added yet.</p>
//             )}
//           </section>

//           {/* Orders */}
//           <section className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6">
//             <h3 className="text-xl font-semibold mb-4">Your Orders</h3>
//             {orders.length > 0 ? (
//               <ul className="space-y-2">
//                 {orders.map((order, index) => (
//                   <li key={index} className="flex justify-between items-center">
//                     <p>{order.description}</p>
//                     <p className="text-sm text-gray-500">{order.status}</p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No orders yet.</p>
//             )}
//           </section>

//           {/* Notifications */}
//           <section className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6">
//             <h3 className="text-xl font-semibold mb-4">Notifications</h3>
//             {notifications.length > 0 ? (
//               <ul className="space-y-2">
//                 {notifications.map((notification, index) => (
//                   <li key={index} className="flex justify-between items-center">
//                     <p>{notification.message}</p>
//                     <p className="text-sm text-gray-500">
//                       {new Date(notification.date).toLocaleDateString()}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No new notifications.</p>
//             )}
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashHome;
import React, { useState, useEffect } from "react";

const DashHome = () => {
  // Hardcoded data
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
  });
  const [orders, setOrders] = useState([
    { description: "Order #1 - Plumbing", status: "Completed" },
    { description: "Order #2 - Electrical", status: "Pending" },
  ]);
  const [services, setServices] = useState([
    { name: "Plumbing" },
    { name: "Electrical" },
    { name: "Carpentry" },
  ]);
  const [notifications, setNotifications] = useState([
    { message: "New order received for Plumbing", date: "2024-11-24" },
    { message: "Your Electrical service is pending", date: "2024-11-23" },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading state, you can remove fetch data logic here
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#6D4C41] text-white">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#6D4C41] text-white">
        <p className="text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#6D4C41] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Welcome Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">
            Welcome, {userDetails?.name || "Artisan"}
          </h1>
          <p className="text-lg mt-2">Here's an overview of your dashboard</p>
        </header>

        {/* Sections Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <p>{service.name}</p>
                    <button className="bg-[#8D6E63] text-white px-4 py-2 rounded hover:bg-[#6D4C41]">
                      Edit
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No services added yet.</p>
            )}
          </section>

          {/* Orders */}
          <section className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Your Orders</h3>
            {orders.length > 0 ? (
              <ul className="space-y-2">
                {orders.map((order, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <p>{order.description}</p>
                    <p className="text-sm text-gray-500">{order.status}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No orders yet.</p>
            )}
          </section>

          {/* Notifications */}
          <section className="bg-white text-[#6D4C41] rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Notifications</h3>
            {notifications.length > 0 ? (
              <ul className="space-y-2">
                {notifications.map((notification, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <p>{notification.message}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(notification.date).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No new notifications.</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashHome;
