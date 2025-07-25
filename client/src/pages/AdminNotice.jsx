import React, { useState, useEffect } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";
import { useAuth } from "../store/auth";

export default function AdminNotice() {
  const { authorizationToken, notices, refreshNotices,API } = useAuth();
  // const [notices, setNotices] = useState([]);

  const [selectedNotice, setSelectedNotice] = useState(null);
  const [newNotice, setNewNotice] = useState({
    title: "",
    date: "",
    image: null,
    imageURL: "",
  });

  // useEffect(() => {
  //   fetchNotices();
  // }, [newNotice]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewNotice({
      ...newNotice,
      image: file,
      imageURL: file ? URL.createObjectURL(file) : "",
    });
  };

  const handleAddNotice = async () => {
    if (!newNotice.title || !newNotice.date || !newNotice.image) return;

    try {
      const formData = new FormData();
      formData.append("title", newNotice.title);
      formData.append("date", newNotice.date);
      formData.append("image", newNotice.image);

      const res = await fetch(`${API}api/admin/notice`, {
        method: "POST",
        headers: {
          Authorization: authorizationToken,
        },
        body: formData,
      });
      const savedNotice = await res.json();

      refreshNotices();

      if (res.ok) {
        // setNotices((prev) => [...prev, savedNotice]);
        setNewNotice({ title: "", date: "", image: null, imageURL: "" });
      } else {
        console.log("failed to add notice");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `${API}api/admin/notice/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      refreshNotices();
      if (!res.ok) throw new Error("Failed to delete notice");

      // setNotices((prev) => prev.filter((notice) => notice._id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Notices</h2>

      {/* Add New Notice Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded-md"
          value={newNotice.title}
          onChange={(e) =>
            setNewNotice({ ...newNotice, title: e.target.value })
          }
        />
        <input
          type="date"
          className="border p-2 rounded-md"
          value={newNotice.date}
          onChange={(e) => setNewNotice({ ...newNotice, date: e.target.value })}
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
          {newNotice.imageURL && (
            <div className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden shadow-md border">
              <img
                src={newNotice.imageURL}
                alt="Preview"
                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}
        </div>

        <button
          onClick={handleAddNotice}
          className="col-span-2 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          <FaPlus />
          Add Notice
        </button>
      </div>

      {/* Notices Table */}
      {notices.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice) => (
                <tr key={notice._id} className="hover:bg-gray-50">
                  <td className="p-3 border">
                    <img
                      src={`http://localhost:3000${notice.image}`}
                      alt={notice.title}
                      className="h-16 w-28 object-cover rounded cursor-pointer"
                      onClick={() => setSelectedNotice(notice)}
                    />
                  </td>

                  <td className="p-3 border">{notice.title}</td>
                  <td className="p-3 border">{notice.date}</td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleDelete(notice._id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      {/* <FaTrash /> */}
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      {selectedNotice && (
            <div className="fixed inset-0 bg-black/50 flex  items-center justify-center z-50 px-4">
              <div className="bg-white rounded-lg p-6 max-w-xl w-full h-[90vh] overflow-auto relative">
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
      ) : (
        <p className="text-gray-600">No notices added yet.</p>
      )}
    </div>
  );
}
