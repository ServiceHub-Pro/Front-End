import React from "react";
import aboutUsImage from "../img/aboutus.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 leading-tight">
          About <span className="text-lime-400">ServiceHub</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-gray-200">
            <div>
              <h3 className="text-2xl font-semibold text-lime-300 mb-2">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg leading-relaxed">
                At <strong>ServiceHub</strong>, we aim to bridge the gap between skilled artisans and
                the people who need them. With trust, transparency, and top-tier craftsmanship,
                we’re redefining how services are found and delivered.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-lime-300 mb-2">
                What We Do
              </h3>
              <p className="text-base sm:text-lg leading-relaxed">
                We connect users with verified professionals in trades like plumbing, carpentry,
                electrical work, and more. Whether it’s a small repair or a major renovation,
                ServiceHub ensures the right hands are on the job.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-lime-600">
            <img
              src={aboutUsImage}
              alt="About ServiceHub"
              className="w-full h-full max-h-[500px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center max-w-3xl mx-auto px-4">
          <h3 className="text-3xl sm:text-4xl font-semibold text-lime-300 mb-4">
            Why Choose ServiceHub?
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            We're not just a directory — we’re your service partner. With a verified network of trusted
            artisans, ServiceHub takes the guesswork out of home repairs, upgrades, and everything in between.
            Think of us as the middleman with manners and standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
