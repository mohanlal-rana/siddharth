import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* School Logo / Name */}
        <div>
          <h2 className="text-3xl font-bold mb-4">SIDDHARTH</h2>
          <p className="text-sm leading-relaxed">
            Empowering students through education, values, and innovation.
            Join us to build a brighter future together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" className="hover:text-blue-300">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-blue-300">About Us</NavLink></li>
            <li><NavLink to="/academics" className="hover:text-blue-300">Academics</NavLink></li>
            <li><NavLink to="/services" className="hover:text-blue-300">Services</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-300">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-300" />
              Siddharth Nagar, Nepal
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-blue-300" />
              +977-9800000000
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-300" />
              info@siddharthschool.edu.np
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-white">
            <a href="https://www.facebook.com/our.ssbhss" target='_blank' className="hover:text-blue-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-300"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-blue-700 pt-6 text-center text-sm text-blue-300">
        © {new Date().getFullYear()} Siddharth School. All rights reserved.
      </div>
    </footer>
  );
}
