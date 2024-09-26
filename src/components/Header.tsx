import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Header() {
  // Store the navigation items in an array
  const navItems = ['Home', 'Services', 'About', 'Contact'];
  const [activeNav, setActiveNav] = useState('Home');
return (
<header className="bg-white shadow-md sticky top-0 z-50">
      <nav className=" w-full px-6 flex justify-between items-center py-4">
        <div className="logo">
          <img src="logo.jpg" alt="Ibex Logo" className="w-36" />
        </div>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item} className="relative group">
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 font-medium"
              >
                {item}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
);
}

export default Header;