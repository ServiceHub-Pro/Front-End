import React from 'react';
import { Search } from 'lucide-react';
import HeroSection from './HeroSection';
import ArtisanList from '../components/ArtisanList';
import AboutUs from './AboutUs';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 bg-[#F4E1D2]">
      {/* Hero Section */}
      <HeroSection />

      {/* Search Section */}
      <div className="relative w-full max-w-xl p-4 bg-[#8D6E63] rounded-md shadow-md mt-6">
        <div className="flex items-center space-x-3">
          <Search id="search" className="text-white text-lg" />
          <input
            type="text"
            placeholder="Search for Artisan"
            className="w-full p-2 text-sm text-white placeholder-white bg-[#8D6E63] border border-[#6D4C41] rounded-md focus:outline-none focus:ring-1 focus:ring-[#6D4C41] transition duration-300"
          />
        </div>
      </div>

      {/* Artisan List */}
      <div className="w-full max-w-4xl">
        <ArtisanList
          tileStyle="p-3 text-sm bg-white shadow rounded-md space-y-2"
          imageSize="h-16 w-16"
        />
      </div>

      {/* About Us Section */}
      <div className="w-full">
        <AboutUs />
      </div>

      {/* Contact Section */}
      <div className="w-full">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
