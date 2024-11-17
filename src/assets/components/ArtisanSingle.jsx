import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ArtisanSingle = () => {
  const { id } = useParams(); // Get artisan ID from URL params
  const [artisan, setArtisan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false); // To track booking status

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

  const handleBooking = () => {
    setBooking(true);
    alert("Booking successful! We will contact you soon.");
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading artisan details...</div>;
  }

  if (!artisan) {
    return <div className="text-center text-gray-500">Artisan not found.</div>;
  }

  return (
    <div className="container mx-auto p-6 bg-[#6A4E23]">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
        <div className="w-1/2">
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

            {/* Booking Button */}
            <button
              onClick={handleBooking}
              className="mt-4 bg-[#B78E59] text-white py-2 px-4 rounded-lg hover:bg-[#6D4C41]"
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="w-1/2 p-6">
          <h3 className="text-2xl font-bold text-gray-800">Location on Map</h3>
          <div className="h-64 mt-4">
            {/* Google Maps integration */}
            {artisan.location && (
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${artisan.location.lat},${artisan.location.lng}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Artisan Location"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanSingle;
