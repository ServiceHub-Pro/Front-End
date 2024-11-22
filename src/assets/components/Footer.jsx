import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4E342E] text-white py-10">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              ServiceHub connects skilled artisans with clients, providing top-notch services across various trades. We prioritize professionalism and quality to ensure satisfaction.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+233123456789" className="hover:underline hover:text-gray-300">
                  +233 123 456 789
                </a>
              </li>
              <li>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:info@servicehub.com" className="hover:underline hover:text-gray-300">
                  info@servicehub.com
                </a>
              </li>
              <li>
                <span className="font-medium">Address:</span> Tamale, Ghana
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-lg">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ServiceHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
