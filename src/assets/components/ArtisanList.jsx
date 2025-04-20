// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const ServiceList = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     fetchServices();
//   }, []);

//   const fetchServices = async () => {
//     try {
//       const response = await axios.get("https://servicehub-api.onrender.com/services");
//       const servicesWithImages = response.data.map((service) => ({
//         ...service,
//         image: service.image
//           ? `https://savefiles.org/drive/s/Oaa0SrcXTB7CPHsSooD6vO0ERKcWgw/${service.image}`
//           : null, // Assuming service.image contains a relative path
//       }));
//       setServices(servicesWithImages.slice(0, 9)); // Limit to 9 services
//     } catch (error) {
//       console.error("Error fetching services:", error);
//     }
//   };

//   return (
//     <div className="mt-8">
//       {services.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {services.map((service) => (
//             <div
//               key={service.id}
//               className="bg-[#8D6E63] shadow-lg rounded-lg overflow-hidden flex flex-col transition transform hover:scale-105 hover:shadow-2xl"
//             >
//               {/* Image Display */}
//               {service.image ? (
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-48 object-cover"
//                 />
//               ) : (
//                 <div className="w-full h-48 bg-gray-300 flex items-center justify-center text-gray-500">
//                   No Image Available
//                 </div>
//               )}

//               {/* Content */}
//               <div className="flex flex-col justify-between flex-1 p-6">
//                 <div>
//                   <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
//                   <p className="text-white mt-2 text-sm line-clamp-3">
//                     {service.description}
//                   </p>
//                 </div>
//                 <div className="mt-6 flex justify-end">
//                   <Link
//                     to={`/artisan/${service.id}`}
//                     className="bg-[#4E342E] hover:bg-[#3E2B2B] text-white font-medium py-2 px-6 rounded-full transition"
//                   >
//                     View Artisan
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="text-center text-gray-500">Loading services...</div>
//       )}
//     </div>
//   );
// };

import React from "react";
import { Link } from "react-router-dom";

// Importing images
import vetinary from "../img/vertinary.jpg";
import kahoot from "../img/kahoot.jpg";
import medicalDoctor from "../img/medical-doctor.jpg";
import careerOutlook from "../img/Career-Outlook-Medical-Lab-Technician.jpg";
import activeBarbers from "../img/active-barbers.jpg";
import eliteEngineering from "../img/elite-engineering.jpg";
import mechanic from "../img/car-mechanic.jpg";

// Hardcoded services array
const services = [
  {
    id: 1,
    title: "Veterinary Services",
    description: "Expert animal care from pets to livestock.",
    image: vetinary,
  },
  {
    id: 2,
    title: "Student Auto Work",
    description: "Practical auto repair training with real cars.",
    image: mechanic,
  },
  {
    id: 3,
    title: "Kahoot Sessions",
    description: "Fun and interactive quiz-based learning.",
    image: kahoot,
  },
  {
    id: 4,
    title: "Medical Doctor",
    description: "General and specialized medical consultations.",
    image: medicalDoctor,
  },
  {
    id: 5,
    title: "Lab Technician",
    description: "Accurate diagnostics and lab testing.",
    image: careerOutlook,
  },
  {
    id: 6,
    title: "Barber Services",
    description: "Sharp cuts, clean fades, and grooming care.",
    image: activeBarbers,
  },
  {
    id: 7,
    title: "Engineering Solutions",
    description: "Smart engineering for real-world problems.",
    image: eliteEngineering,
  },
];

const ServiceList = () => {
  const displayedServices = services.slice(0, 6);

  return (
    <div className="mt-12 px-4 sm:px-6 md:px-12">
      {displayedServices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#0A391D]/80 backdrop-blur-xl border border-lime-600 rounded-2xl overflow-hidden shadow-lg hover:shadow-lime-400/30 transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Image */}
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="w-full h-56 bg-green-800 flex items-center justify-center text-white">
                  No Image Available
                </div>
              )}

              {/* Content */}
              <div className="p-6 text-white flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-lime-300 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-200 mb-6">
                  {service.description}
                </p>

                {/* Button: sticks to bottom */}
                <div className="mt-auto">
                  <Link
                    to={`/artisan/${service.id}`}
                    className="inline-block bg-lime-600 hover:bg-lime-500 text-white font-semibold px-5 py-2 rounded-full transition duration-200"
                  >
                    View Artisan
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400">No services available</div>
      )}
    </div>
  );
};

export default ServiceList;









