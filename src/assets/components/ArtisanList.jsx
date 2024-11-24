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

// export default ServiceList;

import React from "react";
import { Link } from "react-router-dom";

// Importing images
import vetinary from "../img/vertinary.jpg";
import kahoot from "../img/kahoot.jpg";
import medicalDoctor from "../img/medical-doctor.jpg";
import careerOutlook from "../img/Career-Outlook-Medical-Lab-Technician.jpg";
import activeBarbers from "../img/active-barbers.jpg";
import eliteEngineering from "../img/elite-engineering.jpg";
import mechanic from "../img/car-mechanic.jpg"; // Ensure correct file extension

// Hardcoded services array
const services = [
  {
    id: 1,
    title: "Veterinary Services",
    description:
      "Providing expert care and treatment for all types of animals, ensuring their health and well-being. From routine check-ups to emergency treatments, we are dedicated to safeguarding the lives of your beloved pets and farm animals.",
    image: vetinary,
  },
  {
    id: 2,
    title: "Student Auto Work",
    description:
      "Hands-on automotive training designed for aspiring engineers and mechanics. Gain practical experience working on real vehicles, supervised by experienced professionals in a well-equipped workshop.",
    image: mechanic,
  },
  {
    id: 3,
    title: "Kahoot Sessions",
    description:
      "Interactive learning sessions using Kahoot, making education engaging and fun. These sessions promote collaboration, test knowledge, and offer a unique approach to teaching and learning.",
    image: kahoot,
  },
  {
    id: 4,
    title: "Medical Doctor",
    description:
      "Our medical services are tailored to meet your health needs, with a focus on patient care and professional expertise. From general consultations to specialized treatments, our doctors are here for you.",
    image: medicalDoctor,
  },
  {
    id: 5,
    title: "Lab Technician",
    description:
      "Providing advanced diagnostic and medical testing services. Our technicians ensure accuracy and precision in lab results, supporting physicians in diagnosing and treating various conditions effectively.",
    image: careerOutlook,
  },
  {
    id: 6,
    title: "Barber Services",
    description:
      "Offering premium grooming and styling services for men. From classic cuts to modern styles, our experienced barbers use quality tools and techniques to ensure you look your best.",
    image: activeBarbers,
  },
  {
    id: 7,
    title: "Engineering Solutions",
    description:
      "Innovative and cutting-edge engineering solutions for various industries. Our team of experts is dedicated to designing, developing, and implementing projects that drive progress and efficiency.",
    image: eliteEngineering,
  },
];

const ServiceList = () => {
  // Display only the first 6 services
  const displayedServices = services.slice(0, 6);

  return (
    <div className="mt-8">
      {displayedServices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#8D6E63] shadow-lg rounded-lg overflow-hidden flex flex-col transition transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Image Section */}
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

              {/* Content Section */}
              <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-white mt-2 text-sm line-clamp-3">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex justify-end">
                  <Link
                    to={`/artisan/${service.id}`} // Route to the detail page
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
        <div className="text-center text-gray-500">No services available</div>
      )}
    </div>
  );
};

export default ServiceList;



