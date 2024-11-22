import React from 'react';
import frontendImage from '../img/husseinheadshot.jpg'; // Import the frontend image
import backendImage from '../img/abuimage.jpg';       // Import the backend image

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#5D4037] flex flex-col items-center justify-center py-16 px-6 sm:px-12 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-[#F5F5F5] mb-10">Meet the Team Behind ServiceHub</h2>
      <p className="text-lg text-center text-[#F5F5F5] max-w-3xl mb-12 leading-relaxed">
        At ServiceHub, we are committed to delivering exceptional digital experiences. 
        Our team combines creativity and technical expertise to build an innovative platform 
        connecting artisans and clients with ease and reliability.
      </p>

      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row justify-center gap-8">
        {/* Frontend Developer Card */}
        <div className="w-full sm:w-96 bg-[#FAFAFA] bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src={frontendImage}
            alt="Frontend Developer - Abdallah Hussein"
            className="w-full h-81 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#4E342E] mb-2">Abdallah Hussein</h3>
            <p className="text-lg text-gray-600">Frontend Developer</p>
            <a
              href="https://github.com/yourgithub" // Replace with the correct GitHub profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8D6E63] hover:text-[#5D4037] mt-4 inline-block"
            >
              View GitHub Profile
            </a>
          </div>
        </div>

        {/* Backend Developer Card */}
        <div className="w-full sm:w-96 bg-[#FAFAFA] bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            src={backendImage}
            alt="Backend Developer - Abubakari Imoro"
            className="w-full h-81 object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-semibold text-[#4E342E] mb-2">Abubakari Imoro</h3>
            <p className="text-lg text-gray-600">Backend Developer</p>
            <a
              href="https://github.com/yourbackendgithub" // Replace with the correct GitHub profile URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8D6E63] hover:text-[#5D4037] mt-4 inline-block"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
