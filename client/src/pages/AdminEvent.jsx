import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { useAuth } from "../store/auth";
import { FaTowerBroadcast } from "react-icons/fa6";
import { useAuth } from "../store/auth";

export default function AdminEvent() {
  // const [events, setEvents] = useState([]);
  const { authorizationToken, events, refreshEvents,API } = useAuth();
  // console.log(events[0].image)

  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
    image: null,
    imageURL: "",
  });

  const handleAddEvent = async () => {
    const { title, date, description, imageURL } = newEvent;
    if (!title || !date || !description || !imageURL) return;

    try {
      const formData = new FormData();
      formData.append("title", newEvent.title);
      formData.append("date", newEvent.date);
      formData.append("description", newEvent.description);
      formData.append("image", newEvent.image);
      if(!confirm('do you want to add event')){
        return 
      }

      const res = await fetch(`${API}api/event`, {
        method: "POST",
        headers: {
          Authorization: authorizationToken,
        },
        body: formData,
      });
      const savedEvent = await res.json();
      if (res.ok) {
        // alert("success");

        // setEvents((prev) => [savedEvent, ...prev]);

        setNewEvent({
          title: "",
          date: "",
          description: "",
          image: null,
          imageURL: "",
        });
      } else {
        console.log("failed to add event");
      }

      refreshEvents();
    } catch (error) {
      console.log(error);
    }
    // setEvents([event, ...events]);
    setNewEvent({
      title: "",
      date: "",
      description: "",
      image: null,
      imageURL: "",
    });
  };

  const handleDelete = async (id) => {
    // setEvents(events.filter((e) => e.id !== id));
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (!confirmDelete) return;
    try {
      await fetch(`${API}api/event/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },

      });
      refreshEvents();

    } catch (error) {
      console.error("Failed to delete event:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setNewEvent({ ...newEvent, image: file, imageURL });
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-xl">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        📅 Admin - Manage Events
      </h1>

      {/* Add New Event */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        <input
          type="text"
          placeholder="Event Title"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-blue-500"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="date"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-blue-500"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <textarea
          rows="3"
          placeholder="Event Description"
          className="border border-gray-300 p-3 rounded-lg w-full col-span-2 focus:outline-blue-500"
          value={newEvent.description}
          onChange={(e) =>
            setNewEvent({ ...newEvent, description: e.target.value })
          }
        />
        <div className="col-span-2 space-y-4">
          {/* File Input */}
          <label className="block text-sm font-medium text-gray-700">
            Upload Notice Image
            <input
              type="file"
              accept="image/*"
              className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                 file:rounded-md file:border-0 file:text-sm file:font-semibold
                 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100
                 cursor-pointer transition"
              onChange={handleImageChange}
            />
          </label>

          {/* Image Preview */}
          {newEvent.imageURL && (
            <div className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-md border">
              <img
                src={newEvent.imageURL}
                alt="Preview"
                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
        </div>
        <button
          onClick={handleAddEvent}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 justify-center col-span-2 text-lg transition"
        >
          <FaPlus /> Add Event
        </button>
      </div>

      {/* List Events */}
      <div className="grid gap-8 sm:grid-cols-2">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border"
          >
            {console.log(event.image)}
            <img
              src={`http://localhost:3000${event.image}`}
              alt={event.title}
              className="h-52 w-full object-cover transition-transform hover:scale-105 duration-200"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {event.title}
              </h2>
              <p className="text-sm text-gray-500 mb-1">📆 {event.date}</p>
              <p className="text-gray-700 mb-3">{event.description}</p>
              <button
                onClick={() => handleDelete(event._id)}
                className="text-red-600 hover:text-red-800 flex items-center gap-2"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
        {events.length === 0 && (
          <p className="text-center text-gray-500 col-span-2">
            No events added yet.
          </p>
        )}
      </div>
    </div>
  );
}
