import React, { useState, useEffect } from "react";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";
import aboutImg from "../images/about.jpg";
import Program from "../components/Program";
import Faculty from "../components/Faculty";
import News from "../components/News";
import Application from "../components/Application";
import Footer from "../components/Footer";

const images = [img1, img2, img3, img4];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <>
      <section className="mt-0 relative max-w-full ">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-[50vh] md:h-[80vh] object-cover shadow-lg rounded-md transition-opacity duration-700 ease-in-out"
          key={currentIndex}
        />

        {/* Arrow buttons container below the image, centered */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6">
          {/* Left arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="bg-black/50 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="bg-black/50 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-3 shadow-lg transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>
    <section className=" py-12 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
      Welcome to <span className="text-blue-600">Siddharth School</span>
    </h2>
    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
      Discover a nurturing environment where curiosity is encouraged, excellence is pursued, and potential is realized. Join a vibrant academic community dedicated to shaping tomorrow’s leaders through knowledge, compassion, and innovation.
    </p>
    <div className="mt-8">
      <a
        href="#"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-md"
      >
        Explore Our Vision
      </a>
    </div>
  </div>
</section>
<section className="max-w-7xl mx-auto px-6 py-12 mt-12">
  <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden ">
    
    {/* Image Section */}
    <div className="w-full md:w-1/2">
      <img
        src={aboutImg}
        alt="About Siddharth School"
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
      />
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 bg-blue-50 p-10 flex flex-col justify-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 leading-tight">
        About <span className="text-blue-600">Siddharth School</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
        At Siddharth School, we believe in empowering students to explore, excel,
        and evolve. Our mission is to create an inclusive learning environment
        that fosters intellectual curiosity, creativity, and confidence. With a
        perfect blend of modern education and traditional values, we ensure each
        child thrives academically, emotionally, and socially.
      </p>
      <div className="mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md">
          Learn More
        </button>
      </div>
    </div>
    
  </div>
</section>


<Program/>

<Faculty/>

<News/>

{/* <Application/> */}
{/* <Footer/> */}
    </>
  );
}
