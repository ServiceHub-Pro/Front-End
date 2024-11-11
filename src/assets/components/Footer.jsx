import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#4E342E] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Quick Links */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2 text-white">Quick Links</h4>
          <ul>
            <li className="mb-2"><Link to="/" className="text-white hover:text-[#D4B18B] transition">Home</Link></li>
            <li className="mb-2"><Link to="/about" className="text-white hover:text-[#D4B18B] transition">About</Link></li>
            <li className="mb-2"><Link to="/contact" className="text-white hover:text-[#D4B18B] transition">Contact</Link></li>
            <li><Link to="/faq" className="text-white hover:text-[#D4B18B] transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2 text-white">Services</h4>
          <ul>
            <li className="mb-2"><Link to="/electrical" className="text-white hover:text-[#D4B18B] transition">Electrical</Link></li>
            <li className="mb-2"><Link to="/carpentry" className="text-white hover:text-[#D4B18B] transition">Carpentry</Link></li>
            <li className="mb-2"><Link to="/masonry" className="text-white hover:text-[#D4B18B] transition">Masonry</Link></li>
            <li><Link to="/plumbing" className="text-white hover:text-[#D4B18B] transition">Plumbing</Link></li>
          </ul>
        </div>

        {/* Social Media and Copyright */}
        <div className="flex flex-col md:flex-row items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; 2024 Artisan Connect. All rights reserved.</p>
          <div className="social-links ml-0 md:ml-4 flex space-x-4">
            <a href="#" target="_blank" className="text-lg hover:text-[#D4B18B] transition">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" target="_blank" className="text-lg hover:text-[#D4B18B] transition">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" target="_blank" className="text-lg hover:text-[#D4B18B] transition">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
