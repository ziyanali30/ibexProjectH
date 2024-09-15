import React from 'react';

function Header() {
  // Store the navigation items in an array
    const navItems =  ['Home', 'Services', 'About', 'Contact'];

return (
    <header className="bg-white shadow-md">
    <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="logo">
        <img src="logo.jpg" alt="Ibex Logo" className="w-24" />
        </div>
        <ul className="flex space-x-6">
        {navItems.map((item) => (
            <li key={item} className="text-gray-700 hover:text-gray-900 font-medium">
            {item}
            </li>
        ))}
        </ul>
    </nav>
    </header>
);
}

export default Header;