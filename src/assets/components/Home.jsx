import React from 'react';
import { Search } from 'lucide-react';
import HeroSection from './HeroSection';
import ArtisanList from '../components/ArtisanList';
import AboutUs from './AboutUs';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-[#A5D6A7] to-[#66BB6A]">
      {/* Hero Section */}
      <HeroSection />

      {/* Search Section */}
      <div className="relative w-full max-w-xl p-4 bg-[#2E7D32] rounded-xl shadow-lg mt-6 mx-auto">
        <div className="flex items-center space-x-3">
          <Search className="text-white text-lg" />
          <input
            type="text"
            placeholder="Search for Artisan"
            className="w-full p-2 text-sm text-white placeholder-white bg-[#2E7D32] border border-[#1B5E20] rounded-md focus:outline-none focus:ring-2 focus:ring-[#81C784] transition duration-300"
          />
        </div>
      </div>

      {/* Artisan List */}
      <div className="w-full max-w-5xl mt-10 px-4">
        <ArtisanList
          tileStyle="p-3 text-sm bg-[#C8E6C9] shadow-lg rounded-xl space-y-2"
          imageSize="h-20 w-20"
        />
      </div>

      {/* About Us Section */}
      <div className="w-full mt-10 bg-[#81C784] py-8 px-6 rounded-xl shadow-md">
        <AboutUs />
      </div>

      {/* Contact Section */}
      <div className="w-full mt-2 bg-[#A5D6A7] py-8 px-6 rounded-xl shadow-md">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
