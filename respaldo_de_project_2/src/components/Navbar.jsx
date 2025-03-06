import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">KanIA</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/precios" className="text-gray-600 hover:text-gray-900">Precios</Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900">Blog</Link>
            <Link to="/login" className="text-gray-600 hover:text-gray-900">Iniciar sesión</Link>
            <Link to="/registro" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
              Comenzar gratis
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;