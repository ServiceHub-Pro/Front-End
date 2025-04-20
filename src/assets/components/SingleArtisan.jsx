import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ArtisanList = () => {
  const [services, setServices] = useState([]);
  const userId = localStorage.getItem("Id"); // Retrieve userId from storage or context

  useEffect(() => {
    if (userId) fetchUserServices();
  }, [userId]);

  const fetchUserServices = async () => {
    try {
      const response = await axios.get(`https://servicehub-api.onrender.com/services?Id=${Id}`);
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching user-specific services:", error);
    }
  };

  return (
    <div className="mt-8">
      {services.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#8D6E63] shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
            >
              {service.image && (
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                <p className="text-white mt-2 text-sm">{service.description}</p>
                <div className="mt-6 flex justify-center">
                  <Link
                    to={`/artisan/${service.id}`}
                    className="bg-green-700 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-full transition"
                  >
                    View Artisan
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No services found for this user.</div>
      )}
    </div>
  );
};

export default ArtisanList;
