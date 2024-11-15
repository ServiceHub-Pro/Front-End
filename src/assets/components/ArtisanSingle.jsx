import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArtisanSingle = () => {
  const { id } = useParams(); // Get artisan ID from URL params
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtisanDetails();
  }, [id]);

  const fetchArtisanDetails = async () => {
    try {
      const response = await axios.get(`https://servicehub-api.onrender.com/services/${id}`);
      setArtisan(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching artisan details:", error);
    }
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading artisan details...</div>;
  }

  if (!artisan) {
    return <div className="text-center text-gray-500">Artisan not found.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {artisan.image && (
          <img
            src={artisan.image}
            alt={artisan.name}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800">{artisan.name}</h2>
          <p className="text-gray-600 mt-4">{artisan.description}</p>
          <p className="text-gray-600 mt-4">Category: {artisan.category}</p>
          <p className="text-gray-600 mt-4">Contact: {artisan.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtisanSingle;
