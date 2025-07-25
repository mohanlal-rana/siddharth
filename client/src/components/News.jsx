import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth } from "../store/auth";

export default function News() {
  const { events,API } = useAuth();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16">
        News & Events
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">
          No events available right now.
        </p>
      ) : (
        <div className="space-y-12">
          {events.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } items-center bg-blue-50 border border-blue-100 rounded-2xl overflow-hidden transition duration-300 hover:bg-blue-100`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="md:w-1/2 w-full h-64 overflow-hidden">
                <img
                  src={`${API}${item.image}`}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="md:w-1/2 w-full p-6 md:p-10">
                <p className="text-xs text-blue-500 uppercase mb-2 tracking-wider">
                  {new Date(item.date).toDateString()}
                </p>
                <h3 className="text-2xl font-bold text-blue-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-blue-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
