// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ArtisanSingle = () => {
//   const { id } = useParams(); // Get artisan ID from URL params
//   const [artisan, setArtisan] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [booking, setBooking] = useState(false); // To track booking status

//   useEffect(() => {
//     fetchArtisanDetails();
//   }, [id]);

//   const fetchArtisanDetails = async () => {
//     try {
//       const response = await axios.get(`https://servicehub-api.onrender.com/services/${id}`);
//       setArtisan(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching artisan details:", error);
//     }
//   };

//   const handleBooking = () => {
//     setBooking(true);
//     alert("Booking successful! We will contact you soon.");
//   };

//   if (loading) {
//     return <div className="text-center text-gray-500">Loading artisan details...</div>;
//   }

//   if (!artisan) {
//     return <div className="text-center text-gray-500">Artisan not found.</div>;
//   }

//   return (
//     <div className="container mx-auto p-6 bg-[#6A4E23]">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
//         <div className="w-1/2">
//           {artisan.image && (
//             <img
//               src={artisan.image}
//               alt={artisan.name}
//               className="w-full h-64 object-cover"
//             />
//           )}
//           <div className="p-6">
//             <h2 className="text-3xl font-bold text-gray-800">{artisan.name}</h2>
//             <p className="text-gray-600 mt-4">{artisan.description}</p>
//             <p className="text-gray-600 mt-4">Category: {artisan.category}</p>
//             <p className="text-gray-600 mt-4">Contact: {artisan.contact}</p>

//             {/* Booking Button */}
//             <button
//               onClick={handleBooking}
//               className="mt-4 bg-[#B78E59] text-white py-2 px-4 rounded-lg hover:bg-[#6D4C41]"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>

//         <div className="w-1/2 p-6">
//           <h3 className="text-2xl font-bold text-gray-800">Location on Map</h3>
//           <div className="h-64 mt-4">
//             {/* Google Maps integration */}
//             {artisan.location && (
//               <iframe
//                 src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${artisan.location.lat},${artisan.location.lng}`}
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 title="Artisan Location"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArtisanSingle;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import artisanImage from "../img/vertinary.jpg";

const ArtisanSingle = () => {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [booking, setBooking] = useState(false);

  const artisanData = {
    id: 1,
    name: "Veterinary Services",
    description:
      "Providing expert care and treatment for all types of animals, ensuring their health and well-being. From routine check-ups to emergency treatments, we are dedicated to safeguarding the lives of your beloved pets and farm animals.",
    category: "Animal Healthcare",
    contact: "233-456-7890",
    image: artisanImage,
    location: {
      lat: 37.7749,
      lng: -122.4194,
    },
  };

  useEffect(() => {
    setArtisan(artisanData);
  }, [id]);

  const handleBooking = () => {
    setBooking(true);
    alert("Booking successful! We will contact you soon.");
  };

  if (!artisan) return <div className="text-center text-white mt-20">Loading artisan...</div>;

  return (
    <div className="bg-gradient-to-br from-[#4E342E] to-[#3E2C29] min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden grid md:grid-cols-2">
        {/* Image Section */}
        <div className="relative">
          <img
            src={artisan.image}
            alt={artisan.name}
            className="w-full h-full object-cover md:h-full"
          />
          <div className="absolute bottom-0 bg-black bg-opacity-40 w-full p-4 text-white">
            <h2 className="text-3xl font-bold">{artisan.name}</h2>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-[#5D4037] mb-4">Service Info</h3>
            <p className="text-gray-700 mb-4">{artisan.description}</p>
            <p className="text-sm text-gray-600"><strong>Category:</strong> {artisan.category}</p>
            <p className="text-sm text-gray-600 mb-4"><strong>Contact:</strong> {artisan.contact}</p>
          </div>

          <button
            onClick={handleBooking}
            className="bg-[#5D4037] hover:bg-[#B78E59] text-white font-semibold py-2 px-6 rounded-full transition duration-300 shadow-md"
          >
            {booking ? "Booked ✅" : "Book Now"}
          </button>
        </div>
      </div>

      {/* Location Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <h3 className="text-2xl text-white font-bold mb-4">📍 Artisan Location</h3>
        <div className="h-72 rounded-xl shadow-lg overflow-hidden">
          {artisan.location?.lat && artisan.location?.lng ? (
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${artisan.location.lat},${artisan.location.lng}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Artisan Location"
            />
          ) : (
            <div className="text-center text-gray-300 flex items-center justify-center h-full">
              Location not available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtisanSingle;

