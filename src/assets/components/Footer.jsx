import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <ul>
            <li className="mb-2"><Link to="/" className="text-white hover:text-blue-300">Home</Link></li>
            <li className="mb-2"><Link to="/about" className="text-white hover:text-blue-300">About</Link></li>
            <li className="mb-2"><Link to="/contact" className="text-white hover:text-blue-300">Contact</Link></li>
            <li><Link to="/faq" className="text-white hover:text-blue-300">FAQ</Link></li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Services</h4>
          <ul>
            <li className="mb-2"><Link to="/electrical" className="text-white hover:text-blue-300">Electrical</Link></li>
            <li className="mb-2"><Link to="/carpentry" className="text-white hover:text-blue-300">Carpentry</Link></li>
            <li className="mb-2"><Link to="/masonry" className="text-white hover:text-blue-300">Masonry</Link></li>
            <li><Link to="/plumbing" className="text-white hover:text-blue-300">Plumbing</Link></li>
          </ul>
        </div>
        <div className="flex items-center">
          <p className="text-sm">&copy; 2024 Artisan Connect. All rights reserved.</p>
          <div className="social-links ml-4">
            <a href="#" target="_blank" className="text-lg mr-2">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" target="_blank" className="text-lg mr-2">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" target="_blank" className="text-lg">
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;