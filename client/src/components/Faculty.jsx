import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import sachin from '../images/faculty/sachin.jpg';
import arjun from '../images/faculty/arjun.jpg';
import nain from '../images/faculty/nain.jpg';
import mohan from '../images/faculty/mohan.jpg';

const facultyMembers = [
  {
    name: "Dr. Sachin Rana",
    position: "Principal",
    image: sachin,
    bio: "A visionary leader with over 15 years of experience in academic excellence and student empowerment.",
  },
  {
    name: "Mr. Arjun Rana",
    position: "Science Coordinator",
    image: arjun,
    bio: "Specialist in physics and chemistry, inspiring innovation and scientific thinking.",
  },
  {
    name: "Ms. Nain Rana",
    position: "Mathematics Head",
    image: nain,
    bio: "Loves simplifying complex problems and making mathematics enjoyable for all students.",
  },
  {
    name: "Mr. Mohan Rana",
    position: "Computer Instructor",
    image: mohan,
    bio: "Passionate about coding, AI, and preparing students for the digital future.",
  },
];

export default function Faculty() {
  useEffect(() => {
    AOS.init({
      duration: 10000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-white py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-12">Our Faculty</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {facultyMembers.map((member, index) => (
<div
  key={index}
  className="bg-blue-50 rounded-xl p-4 transition-shadow duration-300 shadow hover:shadow-md"
  data-aos="fade-up"
  data-aos-delay={index * 100}
>
  {/* Top: Image + Name + Position */}
  <div className="flex items-center gap-4">
    <img
      src={member.image}
      alt={member.name}
      className="w-24 h-24 object-cover rounded-full border-4 border-blue-200 shadow-sm"
    />
    <div>
      <h3 className="text-lg font-semibold text-blue-800">{member.name}</h3>
      <p className="text-sm text-gray-600">{member.position}</p>
    </div>
  </div>

  {/* Bottom: Bio */}
  <p className="mt-4 text-sm text-gray-700">{member.bio}</p>
</div>
        ))}
      </div>
    </section>
  );
}
