import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#5D4037] flex flex-col items-center justify-center py-16 px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#F5F5F5] mb-12">About Us</h2>

      {/* About Section: Cards in Horizontal Layout */}
      <div className="flex flex-col sm:flex-row justify-center gap-8 mb-16">
        {/* Frontend Card */}
        <div className="w-80 sm:w-96 bg-[#FAFAF5] bg-opacity-90 backdrop-blur-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-[#BCAAA4] shadow-lg">
          <img 
            src="path_to_your_image" // replace with your image path
            alt="Frontend Developer" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-[#4E342E]">Your Name</h3>
            <p className="text-lg text-gray-700">Frontend Developer</p>
            <a 
              href="https://github.com/yourgithub" // replace with your GitHub profile
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8D6E63] hover:text-[#5D4037] mt-4 inline-block"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Backend Card */}
        <div className="w-80 sm:w-96 bg-[#FAFAF5] bg-opacity-90 backdrop-blur-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 border border-[#BCAAA4] shadow-lg">
          <img 
            src="path_to_backend_image" // replace with your backend image path
            alt="Backend Developer" 
            className="w-full h-48 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-[#4E342E]">Your Backend Name</h3>
            <p className="text-lg text-gray-700">Backend Developer</p>
            <a 
              href="https://github.com/yourbackendgithub" // replace with your backend GitHub profile
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#8D6E63] hover:text-[#5D4037] mt-4 inline-block"
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
