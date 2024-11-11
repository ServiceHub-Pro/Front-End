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
      <div className="relative w-full max-w-3xl p-6 bg-[#8D6E63] rounded-lg shadow-lg mt-8">
        <div className="flex items-center space-x-4">
          <Search className="text-white text-xl" />
          <input
            type="text"
            placeholder="Search for Artisan"
            className="w-full p-3 text-lg text-white placeholder-white bg-[#8D6E63] border-2 border-[#8D6E63] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6D4C41] transition duration-300"
          />
        </div>
      </div>

      {/* Artisan List */}
      <div>
        <ArtisanList />
      </div>

      <div>
        <AboutUs/>
      </div>
    </div>
  );
};

export default Home;
