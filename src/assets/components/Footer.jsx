import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white py-16">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-lime-300 mb-4">About Us</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              ServiceHub bridges the gap between trusted artisans and those who need quality service, fast. From busted pipes to building dreams, we’ve got your back.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-lime-300 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="font-medium text-white">Phone:</span>{" "}
                <a href="tel:+233123456789" className="hover:text-lime-400 hover:underline">
                  +233 123 456 789
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Email:</span>{" "}
                <a href="mailto:info@servicehub.com" className="hover:text-lime-400 hover:underline">
                  info@servicehub.com
                </a>
              </li>
              <li>
                <span className="font-medium text-white">Location:</span>{" "}
                Tamale, Ghana
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-bold text-lime-300 mb-4">Follow Us</h3>
            <div className="flex gap-6 text-2xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 transition-transform duration-200 transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 transition-transform duration-200 transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 transition-transform duration-200 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 transition-transform duration-200 transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 border-t border-green-600 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">ServiceHub</span>. Built with 💚 in Ghana.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
