import React, { useState } from "react";
import bannerImg from "../images/contact.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate();
  const {API}=useAuth()

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const res_data = await response.json();
      if (response.ok) {
        toast.success("submitted successfully");
        navigate("/");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("failed to submit");
    }
    // Reset form
  };

  return (
    <div className="w-full text-gray-800">
      {/* Banner */}
      <div className="relative h-[70vh] md:h-96 w-full">
        <img
          src={bannerImg}
          alt="Contact Banner"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-4xl md:text-6xl font-bold bg-black/50 px-6 py-2 rounded-md z-20">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Info and Form */}
      <div className="max-w-6xl mx-auto p-6 md:p-12 grid md:grid-cols-2 gap-12 mt-10">
        {/* Left - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-800">
            General Inquiries
          </h2>

          <div>
            <h3 className="font-semibold">Mail</h3>
            <p>Siddharth School</p>
            <p>P.O. Box 2673, Rabi Bhawan, Belauri, Kanchanpur, Nepal</p>
          </div>

          <div>
            <h3 className="font-semibold">Phone</h3>
            <p>+977 1-5371436</p>
          </div>

          <div>
            <h3 className="font-semibold">Contact Hours</h3>
            <p>Monday – Friday: 8:00 AM – 4:00 PM</p>
            <p>Saturday & Sunday: Closed</p>
          </div>

          <a
            href="#"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Request for Additional Information and Admissions
          </a>
        </div>

        {/* Right - Contact Form */}
        <form
          className="bg-white shadow-lg rounded-lg p-8 space-y-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label className="block font-medium mb-2">
              Your Name (required)
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Your Email (required)
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
