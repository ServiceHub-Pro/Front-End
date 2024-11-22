import React from "react";
import aboutUsImage from "../img/aboutus.jpg"; // Replace with your image path

const AboutUs = () => {
  return (
    <section className="bg-[#8D6E63] text-white py-12">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">About ServiceHub</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-sm leading-relaxed">
              At ServiceHub, our mission is to bridge the gap between skilled artisans and clients
              in need of high-quality services. We aim to create a platform where trust and
              professionalism are the cornerstones of every interaction.
            </p>
            <h3 className="text-xl font-semibold">What We Do</h3>
            <p className="text-sm leading-relaxed">
              ServiceHub connects clients with artisans across various trades, including carpentry,
              plumbing, masonry, and more. We facilitate seamless connections, enabling artisans to
              thrive and clients to achieve their goals effortlessly.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src={aboutUsImage} 
              alt="About ServiceHub"
              className="rounded-md shadow-md w-full md:w-[90%] object-cover"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Why Choose ServiceHub?</h3>
          <p className="text-sm leading-relaxed max-w-3xl mx-auto">
            We are dedicated to ensuring quality, reliability, and convenience in every service
            interaction. Whether you're searching for skilled artisans or looking to grow your trade,
            ServiceHub is the trusted partner you can rely on. Experience the difference today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
