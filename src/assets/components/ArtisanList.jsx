import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ArtisanList = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetchArtisans();
  }, []);

  const fetchArtisans = async () => {
    try {
      const response = await axios.get("https://servicehub-api.onrender.com");
      setArtisans(response.data);
    } catch (error) {
      console.error("Error fetching artisans:", error);
    }
  };

  return (
    <div className="mt-8">
      {artisans.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-lg font-medium">{artisan.name}</h3>
                <p className="text-gray-600">{artisan.description}</p>
                <div className="mt-4">
                  <Link
                    to={`/artisans/${artisan.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                  >
                    View Artisan
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500">Loading artisans...</div>
      )}
    </div>
  );
};

export default ArtisanList;