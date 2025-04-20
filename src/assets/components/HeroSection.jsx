import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTools, FaMapMarkerAlt } from 'react-icons/fa';

import image1 from '../img/barber.jpg';
import image2 from '../img/mechanics.jpg';
import image3 from '../img/plumber.jpg';
import image4 from '../img/supermarket1.jpg';
import image5 from '../img/spare-parts.jpg';

const HeroSection = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full min-h-screen max-h-[1200px] flex justify-center items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          filter: 'blur(2px)',
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-4xl w-full">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white font-poppins leading-tight drop-shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Find <span className="text-lime-400">Skilled Artisans</span> Near You
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-2xl mb-10 text-gray-200 leading-relaxed drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.2 }}
        >
          Easily connect with reliable professionals for your next home or business project — all in one place.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4 }}
        >
          <Link
            to="/signup"
            className="flex items-center gap-2 px-6 py-3 sm:px-8 bg-lime-500 hover:bg-lime-600 text-white font-semibold text-base sm:text-lg rounded-full shadow-lg transition duration-300"
          >
            <FaTools className="text-xl" />
            Become an Artisan
          </Link>

          <Link
            to="/login"
            className="flex items-center gap-2 px-6 py-3 sm:px-8 border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-base sm:text-lg rounded-full transition duration-300"
          >
            <FaMapMarkerAlt className="text-xl" />
            Find Nearby Artisans
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
