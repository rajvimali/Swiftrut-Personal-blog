import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Blog</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-indigo-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="text-white hover:text-indigo-300 transition-colors"
            >
              Create Post
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
