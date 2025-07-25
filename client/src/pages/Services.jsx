
import React from 'react';
import bannerImg from '../images/services.webp'; // Replace with your actual banner image

const services = [
  {
    title: 'Student Services',
    description:
      'Members of a diverse community of confident, collegial young people, Siddharth students make a difference.',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Food and Nutrition',
    description:
      'We provide balanced, nutritious meals to support students’ health and learning needs.',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Transportation',
    description:
      'Safe and reliable transportation options ensure students get to and from school securely.',
    img: 'https://www.tatamotors.com.np/sites/nepal/files/styles/webp/public/product/images/S-LP712.jpg.webp?itok=bmu3sTLl',
  },
  {
    title: 'Health Services',
    description:
      'On-campus health services provide care and support for student well-being.',
    img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Air Quality',
    description:
      'We monitor and maintain clean, healthy air quality throughout the school facilities.',
    img: 'https://images.samsung.com/is/image/samsung/assets/hk_en/p6-b2b/gro2-2/system-air-conditioner-solutions/icd/DA_KV_Education_1440x640_PC.png?imwidth=1366',
  },
  {
    title: 'Child Protection',
    description:
      'We prioritize child safety and have strict policies to protect every student.',
    img: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Safety and Security',
    description:
      'Comprehensive safety protocols and security measures keep our school community safe.',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div className="w-full mx-auto px-6 py-12 text-gray-800">
      {/* Banner */}
      <div className="relative h-[70vh] w-full md:h-96">
        <img
          src={bannerImg}
          alt="Services Banner"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl bg-black/50 md:text-6xl font-bold z-20">
            Services
          </h1>
        </div>
      </div>
    
    {/* Section Intro */}
    <div className="text-center mt-12 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
        Explore What We Offer
      </h2>
      <p className="text-md md:text-lg text-gray-600">
        From academic excellence to co-curricular support, our services are designed
        to empower every student to grow, learn, and thrive in a nurturing environment.
      </p>
    </div>

      {/* Cards Container */}
      <div className="max-w-5xl mx-auto mt-10 space-y-12">
        {services.map(({ title, description, img }, index) => (
          <motion.div
            key={title}
            className={`flex flex-col md:flex-row bg-sky-200/20 rounded-lg  overflow-hidden ${
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

      {/* Additional Text */}
      <div className="max-w-5xl mx-auto mt-16 p-6 bg-green-50 rounded-lg  text-gray-800">
        <p className="mb-4">
          Siddharth becomes the main social center for most of our high school students, and for most, the school day
          does not end when classes finish. After school, students may join extracurricular, service or sports activities,
          or seek study support from teachers or peers. Siddharth’s formal student-led organizations include Student Council and the National Honor Society.
        </p>
        <p className="mb-4">
          By actively promoting student voice and student-driven initiatives, Siddharth School helps students build their
          sense of self-efficacy and the essential skills for citizens of a democratic, just and diverse society.
          Siddharth students have authentic opportunities to shape important school-wide decisions, organize programs,
          coordinate community activities and projects, and help one another discover their best selves.
        </p>
        <p>
          Our students share a commitment to ethical, responsible engagement with the world around them.
        </p>
      </div>
    </div>
  );
}
