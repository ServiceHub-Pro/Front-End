import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VeterinaryServicePage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchServiceDetails();
  }, [id]);

  const fetchServiceDetails = async () => {
    try {
      const response = await axios.get(
        `https://servicehub-api.onrender.com/services/${id}`
      );
      setService(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching service details:", err);
      setError("Failed to load service details. Please try again later.");
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading service details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!service) {
    return <div className="text-center text-gray-500">Service not found.</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-[#6A4E23] text-white">
      <h1 className="text-4xl font-bold text-center mb-6">{service.title}</h1>
      <div className="bg-white text-black shadow-lg rounded-lg overflow-hidden">
        {service.image && (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-6">
          <h2 className="text-3xl font-bold">{service.title}</h2>
          <p className="text-lg mt-4">{service.description}</p>
          <p className="mt-4">
            <span className="font-bold">Category:</span> {service.category}
          </p>
          <p className="mt-4">
            <span className="font-bold">Contact:</span> {service.contact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VeterinaryServicePage;
