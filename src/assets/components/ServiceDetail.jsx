import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "Veterinary Services",
    description:
      "Expert care and treatment for all types of animals. From check-ups to emergencies, we’ve got your furry and feathered friends covered.",
    image: "/img/vertinary.jpg",
  },
  {
    id: 2,
    title: "Student Auto Work",
    description:
      "Practical automotive training for future engineers. Work on real vehicles in a supervised, professional environment.",
    image: "/img/car-mechanic.jpg",
  },
  {
    id: 3,
    title: "Kahoot Sessions",
    description:
      "Fun and interactive learning through Kahoot. Perfect for classrooms, team-building, and engaging reviews.",
    image: "/img/kahoot.jpg",
  },
];

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchedService = services.find((s) => s.id === parseInt(serviceId));
    setService(fetchedService);
  }, [serviceId]);

  if (!service) return <div className="text-center mt-20 text-green-700">Loading service details...</div>;

  return (
    <div className="max-w-5xl mx-auto mt-16 px-6">
      <div className="bg-white/90 border border-green-200 backdrop-blur-md rounded-3xl shadow-2xl p-8 transition-all duration-300">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-72 object-cover rounded-2xl shadow-md mb-6"
        />
        <h2 className="text-4xl font-bold text-green-800 mb-4">{service.title}</h2>
        <p className="text-green-900 text-lg leading-relaxed">{service.description}</p>

        {/* Optional: Add a CTA or contact button */}
        <div className="mt-8 text-right">
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition">
            Contact Artisan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
