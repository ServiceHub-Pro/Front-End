import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center py-16 px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#5D4037] mb-12">About Us</h2>

      {/* About Section: Cards in Horizontal Layout */}
      <div className="flex justify-center gap-8 mb-16">
        {/* Frontend Card */}
        <div className="w-96 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-[#8D6E63] shadow-lg">
          <img 
            src="path_to_your_image" // replace with your image path
            alt="Frontend Developer" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-[#8D6E63]">Your Name</h3>
            <p className="text-lg text-gray-600">Frontend Developer</p>
            <a 
              href="https://github.com/yourgithub" // replace with your GitHub profile
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#B78E59] hover:text-[#6D4C41] mt-4 inline-block"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Backend Card */}
        <div className="w-96 bg-white bg-opacity-30 backdrop-blur-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-[#8D6E63] shadow-lg">
          <img 
            src="path_to_backend_image" // replace with your backend image path
            alt="Backend Developer" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold text-[#8D6E63]">Your Backend Name</h3>
            <p className="text-lg text-gray-600">Backend Developer</p>
            <a 
              href="https://github.com/yourbackendgithub" // replace with your backend GitHub profile
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#B78E59] hover:text-[#6D4C41] mt-4 inline-block"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
