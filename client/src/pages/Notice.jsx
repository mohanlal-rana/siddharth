import React, { useState } from "react";
import { useAuth } from "../store/auth";

export default function Notice() {
  const { notices } = useAuth();
  const [selectedNotice, setSelectedNotice] = useState(null);
  console.log(notices[0].image);
  const handleDownload = async (url, filename) => {
    try {
      const response = await fetch(url, {
        mode: "cors", // make sure CORS is allowed
      });
      if (!response.ok) throw new Error("Network response was not ok");

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = filename || "notice.jpg";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 mt-10">
      <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">
        Latest Notices
      </h1>

      {/* Notices Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {notices.map((notice, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition pb-5"
          >
            <img
              src={`http://localhost:3000${notice.image}`}
              alt={notice.title}
              className="w-full h-48 object-cover object-top"
            />
            <div className="p-5">
              <p className="text-sm text-left text-gray-500 mt-1 italic">
                {new Date(notice.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h2 className="text-lg font-semibold text-left text-blue-900 tracking-wide">
                {notice.title}
              </h2>
            </div>

            <div className="flex justify-center gap-4 mt-2">
              <button
                onClick={() => setSelectedNotice(notice)}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
              >
                View Notice
              </button>
              <button
                onClick={() =>
                  handleDownload(
                    `http://localhost:3000${notice.image}`,
                    `${notice.title}`
                  )
                }
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Notice Modal */}
   {selectedNotice && (
            <div className="fixed inset-0 bg-black/50 flex  items-center justify-center z-50 px-4">
              <div className="bg-white rounded-lg p-6 max-w-xl w-full h-[90vh]  overflow-auto relative">
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl font-bold"
                >
                  &times;
                </button>

                {/* Scrollable image container */}
                <div className=" overflow-auto h-[70vh] mb-4">
                  <img
                    src={`http://localhost:3000${selectedNotice.image}`}
                    alt={selectedNotice.title}
                    className="w-full object-contain  "
                  />
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  {selectedNotice.title}
                </h3>
                <p className="text-gray-600">Date: {selectedNotice.date}</p>
              </div>
            </div>
          )}
    </div>
  );
}
