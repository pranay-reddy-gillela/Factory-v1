import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'lucide-react';

const Navbar = () => {
  const handleVisitCompany = () => {
    window.open('https://maps.google.com/?q=sri+sai+balaji+spun+pipes+mahabubnagar', '_blank');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl text-blue-900">
            Home
          </Link>
          
          <div className="flex items-center gap-6">
            <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
            <button
              onClick={handleVisitCompany}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              <Navigation size={18} />
              Visit Company
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;