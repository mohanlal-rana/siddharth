import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useEffect } from "react";

export default function Navbar() {
  const { isLogedIn, user } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNoticeOpen, setMobileNoticeOpen] = useState(false);
  return (
    <header className="bg-white/90  shadow-md fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
<div
  className="text-4xl font-bold tracking-wide text-blue-700 drop-shadow-sm hover:text-blue-900 transition-colors duration-300"
  style={{ fontFamily: "'Dancing Script', cursive" }}
>
  <NavLink to="/">SIDDHARTH</NavLink>
</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-bold">
          <NavLink to="/" className="hover:text-blue-600 transition">
            Home
          </NavLink>
          <div className="relative group">
            <button className="hover:text-blue-600 transition">Notice</button>
            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200 z-50 min-w-[150px]">
              <NavLink
                to="/notice"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              >
                Notice
              </NavLink>
              <NavLink
                to="/events"
                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              >
                Events
              </NavLink>
            </div>
          </div>

          <NavLink to="/academics" className="hover:text-blue-600 transition">
            Academics
          </NavLink>
          <NavLink to="/services" className="hover:text-blue-600 transition">
            Services
          </NavLink>
          <NavLink to="/about" className="hover:text-blue-600 transition">
            About Us
          </NavLink>
          <NavLink to="/contact" className="hover:text-blue-600 transition">
            Contact
          </NavLink>
          {isLogedIn ? (
            <>
              {user?.isAdmin && (
                <NavLink to="/admin" className="hover:text-blue-600 transition">
                  Admin
                </NavLink>
              )}

              <NavLink
                to="/logout"
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
              >
                Logout
              </NavLink>
            </>
          ) : (
            <NavLink
              to="/login"
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
            >
              Login
            </NavLink>
          )}
        </nav>

        {/* Mobile Hamburger / Close Icon */}
        <div className="md:hidden relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu Dropdown FULL WIDTH */}
          {menuOpen && (
            <div className="fixed h-90 w-100 inset-0 left-50 top-14 bg-black/70 px-6 py-5 text-white font-bold space-y-4 z-40  md:hidden sm:h-[100vh]">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-600"
              >
                Home
              </NavLink>
              <div>
                <button
                  onClick={() => setMobileNoticeOpen(!mobileNoticeOpen)}
                  className="w-full flex justify-between items-center hover:text-blue-600"
                >
                  Notice
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform duration-300 ${
                      mobileNoticeOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {mobileNoticeOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <NavLink
                      to="/notice"
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-blue-600"
                    >
                      Notice
                    </NavLink>
                    <NavLink
                      to="/events"
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-blue-600"
                    >
                      Events
                    </NavLink>
                  </div>
                )}
              </div>
              <NavLink
                to="/academics"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-600"
              >
                Academics
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-600"
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-600"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block hover:text-blue-600"
              >
                Contact
              </NavLink>
              {isLogedIn ? (
                <>
                  {user?.isAdmin && (
                    <NavLink
                      to="/admin"
                      className="hover:text-blue-600 transition block"
                    >
                      Admin
                    </NavLink>
                  )}

                  <NavLink
                    to="/logout"
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
                  >
                    Logout
                  </NavLink>
                </>
              ) : (
                <NavLink
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
                >
                  Login
                </NavLink>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
