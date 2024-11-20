import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./Search";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("https://servicehub-api.onrender.com/services");
      const servicesWithImages = response.data.map((service) => ({
        ...service,
        image: service.image
          ? `https://savefiles.org/drive/folders/MjEzNjN8cGFkZA/${service.image}`
          : null,
      }));
      setServices(servicesWithImages);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const handleSearch = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://servicehub-api.onrender.com/services/${query}`);
      const service = response.data;
      setServices(
        service
          ? [
              {
                ...service,
                image: service.image
                  ? `https://savefiles.org/drive/folders/MjEzNjN8cGFkZA/${service.image}`
                  : null,
              },
            ]
          : []
      );
    } catch (error) {
      console.error("Error searching for services:", error);
      setServices([]); // Clear the list if search fails
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-8">
      {/* Search Component */}
      <Search onSearch={handleSearch} placeholder="Search for artisans, crafts, or services..." />

      {/* Services List */}
      {isLoading ? (
        <div className="text-center text-gray-500 mt-4">Loading...</div>
      ) : services.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#8D6E63] shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
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
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="text-white mt-2 text-sm">{service.description}</p>
                <div className="mt-6 flex justify-center">
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
        <div className="text-center text-gray-500 mt-4">No services found.</div>
      )}
    </div>
  );
};

export default ServiceList;
