import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Application() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto p-8 my-12 w-full">
      <h2
        className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10"
        data-aos="fade-up"
      >
        Application Topics
      </h2>

      <div
        className="bg-blue-100 rounded-lg p-8 flex flex-col md:flex-row gap-6 w-full"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* First topic */}
        <div className="flex-1" data-aos="zoom-in" data-aos-delay="200">
          <h3 className="text-lg md:text-2xl font-extrabold mb-1 text-blue-800">
            Registration of Interest
          </h3>
          <NavLink
            to="/registration"
            className="inline-block text-sm md:text-lg text-blue-900 border border-blue-900 rounded px-3 py-1 hover:text-blue-700 hover:border-blue-700 transition"
          >
            Register
          </NavLink>
        </div>

        {/* Second topic */}
        <div className="flex-1" data-aos="zoom-in" data-aos-delay="300">
          <h3 className="text-lg md:text-2xl font-extrabold mb-1 text-blue-800">
            Application of Admission
          </h3>
          <NavLink
            to="/apply"
            className="inline-block text-sm md:text-lg text-blue-900 border border-blue-900 rounded px-3 py-1 hover:text-blue-700 hover:border-blue-700 transition"
          >
            Apply
          </NavLink>
        </div>

        {/* Third topic */}
        <div className="flex-1" data-aos="zoom-in" data-aos-delay="400">
          <h3 className="text-lg md:text-2xl font-extrabold mb-1 text-blue-800">
            Other inquiries
          </h3>
          <NavLink
            to="/contact-us"
            className="inline-block text-sm md:text-lg text-blue-900 border border-blue-900 rounded px-3 py-1 hover:text-blue-700 hover:border-blue-700 transition"
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </section>
  );
}
