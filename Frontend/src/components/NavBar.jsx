import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 fixed w-full z-10 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">Task Manager</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white text-lg hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-white text-lg hover:underline">
            About
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 mt-2">
          <Link
            to="/"
            className="block text-white py-2 px-4 border-b border-blue-500 hover:bg-blue-800"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-white py-2 px-4 hover:bg-blue-800"
            onClick={toggleMenu}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
