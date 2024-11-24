import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Hardcoded services array (for demonstration)
const services = [
  {
    id: 1,
    title: "Veterinary Services",
    description:
      "Providing expert care and treatment for all types of animals, ensuring their health and well-being. From routine check-ups to emergency treatments, we are dedicated to safeguarding the lives of your beloved pets and farm animals.",
    image: "path_to_vetinary_image", // replace with actual image path
  },
  {
    id: 2,
    title: "Student Auto Work",
    description:
      "Hands-on automotive training designed for aspiring engineers and mechanics. Gain practical experience working on real vehicles, supervised by experienced professionals in a well-equipped workshop.",
    image: "path_to_auto_work_image",
  },
  {
    id: 3,
    title: "Kahoot Sessions",
    description:
      "Interactive learning sessions using Kahoot, making education engaging and fun. These sessions promote collaboration, test knowledge, and offer a unique approach to teaching and learning.",
    image: "path_to_kahoot_image",
  },
  // Add other services as needed
];

const ServiceDetail = () => {
  const { serviceId } = useParams(); // Get the service id from URL
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchedService = services.find((service) => service.id === parseInt(serviceId));
    setService(fetchedService);
  }, [serviceId]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="service-detail mt-8">
      <div className="flex flex-col items-center">
        <img src={service.image} alt={service.title} className="w-full h-72 object-cover rounded-lg" />
        <h2 className="text-3xl font-semibold mt-4">{service.title}</h2>
        <p className="text-lg mt-4">{service.description}</p>
        {/* Add additional details or a contact button as needed */}
      </div>
    </div>
  );
};

export default ServiceDetail;
