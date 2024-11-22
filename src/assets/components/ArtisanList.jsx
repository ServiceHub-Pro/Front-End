import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("https://servicehub-api.onrender.com/services");
      const servicesWithImages = response.data.map((service) => ({
        ...service,
        image: service.image
          ? `https://savefiles.org/drive/s/Oaa0SrcXTB7CPHsSooD6vO0ERKcWgw/${service.image}`
          : null, // Assuming service.image contains a relative path
      }));
      setServices(servicesWithImages.slice(0, 9)); // Limit to 9 services
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  return (
    <div className="mt-8">
      {services.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#8D6E63] shadow-lg rounded-lg overflow-hidden flex flex-col transition transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Display */}
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
                  No Image Available
                </div>
              )}

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="text-white mt-2 text-sm line-clamp-3">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <Link
                    to={`/artisan/${service.id}`}
                    className="bg-[#4E342E] hover:bg-[#3E2B2B] text-white font-medium py-2 px-6 rounded-full transition"
                  >
                    View Artisan
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">Loading services...</div>
      )}
    </div>
  );
};

export default ServiceList;
