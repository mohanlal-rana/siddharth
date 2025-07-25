import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../images/program.jpg';

export default function Program() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only once per scroll
    });
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10 bg-blue-50 rounded-xl  mt-16"
    >
      {/* Image */}
      <div
        data-aos="fade-right"
        className="md:w-1/2 w-full overflow-hidden rounded-lg shadow-lg"
      >
        <img
          src={img1}
          alt="Programs"
          className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text and Program List */}
      <div data-aos="fade-left" className="md:w-1/2 w-full">
        <h2 className="text-4xl font-extrabold text-blue-800 mb-6">Our Programs</h2>
        <ul className="space-y-4 text-gray-700 text-lg">
          {[
            'Science and Technology',
            'Mathematics Excellence',
            'Arts and Music',
            'Sports and Physical Education',
            'Computer and Coding Classes',
          ].map((program, index) => (
            <li key={index} className="flex items-start gap-3" data-aos="fade-up" data-aos-delay={index * 100}>
              <span className="text-blue-600 mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{program}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
