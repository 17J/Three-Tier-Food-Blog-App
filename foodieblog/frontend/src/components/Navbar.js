import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">FoodieBlog</Link>
        <div>
          <Link to="/login" className="text-gray-300 hover:text-white mr-4">Login</Link>
          <Link to="/signup" className="text-gray-300 hover:text-white">Signup</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;