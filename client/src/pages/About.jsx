import React from 'react';
import bannerImg from '../images/about.jpg';

export default function About() {
  return (
    <div className="w-full">
      {/* Image Banner */}
      <div className="relative h-[70vh] md:h-96 w-full">
        {/* Background Image */}
        <img
          src={bannerImg}
          alt="School Banner"
          className="w-full h-full object-cover object-top"
        />

        {/* Overlay with semi-transparent background */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl bg-black/50  md:text-6xl font-bold z-20">About Us</h1>
        </div>
      </div>

      {/* About Text Section */}
      <div className="relative z-0 max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-blue-800 mb-4">Welcome to Our School</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our school is a center of excellence in education and personal development. We are dedicated to fostering a
          nurturing environment where students can thrive academically, socially, and emotionally. Through innovative
          teaching methods and modern facilities, we encourage curiosity, creativity, and a love for learning. Our
          faculty is passionate about guiding every student toward success, preparing them for a bright and impactful future.
        </p>
      </div>
    </div>
  );
}
