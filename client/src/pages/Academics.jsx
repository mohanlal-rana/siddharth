import React from 'react';
import { motion } from 'framer-motion';
import bannerImg from '../images/about-banner.jpg';

const topics = [
  {
    title: 'Elementary School',
    description:
      'Our Elementary School provides a strong academic foundation with a nurturing environment designed to foster curiosity, creativity, and a love for learning in young students.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/School-education-learning-1750587-h.jpg',
  },
  {
    title: 'Middle School',
    description:
      'The Middle School challenges students to develop critical thinking, independence, and collaborative skills preparing them for the rigors of high school academics.',
    img: 'https://d3i6fh83elv35t.cloudfront.net/static/2021/08/Field-Middle-school-solutions-3-1024x682.jpg',
  },
  {
    title: 'High School',
    description:
      'Our High School offers a rigorous college-preparatory curriculum designed to prepare students for university and beyond with a broad range of academic and extracurricular opportunities.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Student Services',
    description:
      'Comprehensive student support services include academic advising, counseling, and learning resources to ensure every student thrives.',
    img: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Arts, Athletics, Activities',
    description:
      'We encourage students to develop their talents and interests through vibrant programs in the arts, athletics, and a wide variety of extracurricular activities.',
    img: 'https://candorschool.edu.in/wp-content/uploads/2018/03/29063417_2030163806999243_3592958749553078206_n.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Academics() {
  return (
    <div className="w-full mx-auto px-6 py-12 text-gray-800">
      {/* Banner */}
      <div className="relative h-[70vh] w-full md:h-96">
        <img
          src={bannerImg}
          alt="School Banner"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl bg-black/50 md:text-6xl font-bold z-20">
            Academics
          </h1>
        </div>
      </div>

      {/* Cards Container */}
      <div className="max-w-5xl mx-auto mt-10 space-y-12">
        {topics.map(({ title, description, img }, index) => (
          <motion.div
            key={title}
            className={`flex flex-col md:flex-row rounded-lg bg-green-100/20 overflow-hidden ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="md:w-1/3 h-48 md:h-auto">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                {title}
              </h2>
              <p className="text-gray-700">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
