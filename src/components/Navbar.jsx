// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full flex justify-center mt-16 mb-8">
      <div className="bg-white rounded-md shadow-md flex flex-wrap justify-center">
        <Link
          to="/"
          className={`px-6 py-3 text-gray-800 font-medium hover:bg-gray-100 rounded-md m-1 transition ${
            isActive('/') ? 'text-blue-600 font-bold' : ''
          }`}
        >
          HOME
        </Link>
        <Link
          to="/about"
          className={`px-6 py-3 text-gray-800 font-medium hover:bg-gray-100 rounded-md m-1 transition ${
            isActive('/about') ? 'text-blue-600 font-bold' : ''
          }`}
        >
          ABOUT
        </Link>
        <Link
          to="/journey"
          className={`px-6 py-3 text-gray-800 font-medium hover:bg-gray-100 rounded-md m-1 transition ${
            isActive('/journey') ? 'text-blue-600 font-bold' : ''
          }`}
        >
          JOURNEY
        </Link>
        <Link
          to="/blog"
          className={`px-6 py-3 text-gray-800 font-medium hover:bg-gray-100 rounded-md m-1 transition ${
            isActive('/blog') || location.pathname.startsWith('/blog/') ? 'text-blue-600 font-bold' : ''
          }`}
        >
          BLOG
        </Link>
        {/* <Link
          to="/speaking"
          className={`px-6 py-3 text-gray-800 font-medium hover:bg-gray-100 rounded-md m-1 transition ${
            isActive('/speaking') ? 'text-blue-600 font-bold' : ''
          }`}
        >
          SPEAKING ENGAGEMENTS
        </Link> */}
        <Link
          to="/contact"
          className={`px-6 py-3 text-gray-800 font-medium hover:bg-gray-100 rounded-md m-1 transition ${
            isActive('/contact') ? 'text-blue-600 font-bold' : ''
          }`}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;