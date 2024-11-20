import React from 'react';
import { Link } from 'react-router-dom';
import ArtisanList from '../components/ArtisanList';
import HeroSection from './HeroSection';
import { Search } from 'lucide-react';
import AboutUs from './AboutUs';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-[#F4E1D2]">
      {/* Hero Section */}
      <HeroSection />
      <br />

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
      <div className="w-full max-w-4xl">
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
