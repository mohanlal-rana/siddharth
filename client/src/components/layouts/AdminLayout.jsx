import React from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdEmojiEvents } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { useAuth } from "../../store/auth";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isLoadding } = useAuth();

  if (isLoadding) return <h1>Loading...</h1>;
  if (!user?.isAdmin) {
    navigate("/");
    return null;
  }

  const isDashboard = location.pathname === "/admin";

  const adminLinks = [
    {
      to: "/admin/profile",
      label: "Profile",
      icon: <FaUser className="text-3xl" />,
      bg: "bg-purple-100",
      textColor: "text-purple-800",
      description: "View and update your admin profile information.",
    },
    {
      to: "/admin/contacts",
      label: "Contacts",
      icon: <FaMessage className="text-3xl" />,
      bg: "bg-green-100",
      textColor: "text-green-800",
      description: "Manage user contacts and communication channels.",
    },
    {
      to: "/admin/events",
      label: "Events",
      icon: <MdEmojiEvents className="text-3xl" />,
      bg: "bg-pink-100",
      textColor: "text-pink-800",
      description: "Create and organize upcoming events and activities.",
    },
    {
      to: "/admin/notice",
      label: "Notice",
      icon: <IoNotifications className="text-3xl" />,
      bg: "bg-yellow-100",
      textColor: "text-yellow-800",
      description: "Publish and manage important announcements and notices.",
    },
    {
      to: "/",
      label: "Home",
      icon: <FaHome className="text-3xl" />,
      bg: "bg-blue-100",
      textColor: "text-blue-800",
      description: "Go back to the main home page of the application.",
    },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      {isDashboard ? (
        <div className="max-w-5xl mx-auto bg-white/80 border border-gray-200 rounded-xl h-[80vh] p-6 shadow-sm">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {adminLinks.map(
              ({ to, label, icon, bg, textColor, description }) => (
                <NavLink
                  key={label}
                  to={to}
                  className={({ isActive }) =>
                    `flex flex-col items-center justify-center gap-3 rounded-lg p-6 
     bg-green-100/30 border border-green-300/80 
     hover:bg-green-200/35 hover:scale-105 transition-transform duration-300
     ${isActive ? "ring-2 ring-offset-2 ring-green-400" : ""}`
                  }
                >
                  {icon}
                  <span className="text-xl">{label}</span>
                  <p className="text-sm font-normal text-center max-w-xs">
                    {description}
                  </p>
                </NavLink>
              )
            )}
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
