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
      console.log(response.data);
      setServices(response.data);
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
              className="bg-[#8D6E63] shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Display */}
              {service.image && (
                <img
                  src={service.image} // Assuming image is a URL or base64 string
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{service.name}</h3>
                <p className="text-white mt-2 text-sm">{service.description}</p>
                <div className="mt-6 flex justify-center">
                  <Link
                    to={`/artisan/${service.id}`} // Update the route to point to the artisan's single page
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
