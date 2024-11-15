import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Importing images from the assets folder
import image1 from '../img/barber.jpg';
import image2 from '../img/mechanics.jpg';
import image3 from '../img/plumber.jpg';
import image4 from '../img/supermarket1.jpg';
import image5 from '../img/spare-parts.jpg';

const HeroSection = () => {
  // Array of images imported from the assets folder
  const images = [image1, image2, image3, image4, image5];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Apply blur directly to the background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
          filter: 'blur(1px)', // Apply blur to the background image
        }}
      ></div>
      
      <div className="relative z-10 text-center px-4 md:px-12">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white font-poppins"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Find Skilled Local Artisans Near You
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl md:text-3xl mb-8 px-4 sm:px-12 text-white font-poppins"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          Hire and connect with artisans for your home or business projects. Find their locations and services all in one place.
        </motion.p>

        <div className="space-x-4">
          <Link
            to="/signup"
            className="inline-block px-8 py-3 bg-[#B78E59] text-white text-lg font-semibold rounded-lg hover:bg-[#6D4C41] transition duration-300"
          >
            Become an Artisan
          </Link>
          <a
            href="search"
            className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-[#5D4037] transition duration-300"
          >
            Find an Artisan Near You
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
