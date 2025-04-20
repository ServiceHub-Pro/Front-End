import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Search, Box, Briefcase } from "lucide-react";
import SearchComponent from "./Search";

const Search = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setIsLoading(true);
    setError(null);
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
      setError("Failed to load services. Please try again later.");
      console.error("Error fetching services:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = useCallback(async (query) => {
    setIsLoading(true);
    setError(null);
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
      setError("Error searching for services. Please try again.");
      setServices([]);
      console.error("Error searching for services:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8">
      {/* Search Bar */}
      <SearchComponent onSearch={handleSearch} placeholder="Search for artisans, crafts, or services..." />

      {/* Loader */}
      {isLoading && (
        <div className="text-center text-gray-500 mt-4">Loading...</div>
      )}

      {/* Error Message */}
      {error && (
        <div className="text-center text-red-500 mt-4">{error}</div>
      )}

      {/* Services Grid */}
      {!isLoading && !error && services.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-green-700 shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl flex flex-col"
            >
              {/* Image */}
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-600 text-xl">
                  📦 No Image
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="text-white text-sm">{service.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-white text-sm">
                  <div className="flex items-center gap-1">
                    <Box className="w-4 h-4" />
                    <span>{service.category || "General"}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{service.type || "Freelance"}</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Link
                    to={`/artisan/${service.id}`}
                    className="bg-green-600 hover:bg-green-800 text-white font-medium py-2 px-6 rounded-full transition duration-300"
                  >
                    View Artisan
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        !isLoading &&
        !error && (
          <div className="text-center text-gray-500 mt-8 italic">
            No services found. Maybe try a different search? 🤔
          </div>
        )
      )}
    </div>
  );
};

export default Search;
