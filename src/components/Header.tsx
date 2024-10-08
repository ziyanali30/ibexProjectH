import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'; // Importing icons for dark mode and menu

function Header() {
  const navItems = ['Home', 'Services', 'About', 'Contact'];
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu visibility
  const menuRef = useRef(null); // Reference to the mobile menu

  const toggleDarkMode = () => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      if (storedTheme === 'dark') {
        root.classList.add('dark');
        setDarkMode(true);
      } else {
        root.classList.remove('dark');
        setDarkMode(false);
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.classList.add('dark');
      setDarkMode(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-lightBg dark:bg-darkBg dark:text-darkText shadow-md sticky top-0 z-50">
      <nav className="w-full px-6 flex justify-between items-center py-4">
        <div className="logo hidden md:block">
          <img src="https://derhjzjgqhzkqefjmrer.supabase.co/storage/v1/object/public/assets/logo.jpg" alt="Ibex Logo" className="w-36" />
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
          </button>
        </div>

        {/* Desktop Navigation and Dark Mode Toggle */}
        <ul className="hidden md:flex space-x-6 text-lightText dark:text-darkText items-center">
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? (
              <FiSun className="w-6 h-6 text-yellow-500" /> // Sun icon for light mode
            ) : (
              <FiMoon className="w-6 h-6 text-gray-500 dark:hover:text-white" /> // Moon icon for dark mode
            )}
          </button>
          {navItems.map((item) => (
            <li key={item} className="relative group dark:hover:text-white font-medium">
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 dark:text-white"
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking a link
              >
                {item}
              </Link>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      <ul
        ref={menuRef} // Attach the ref to the mobile menu
        className={`${
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-lightBg dark:bg-darkBg shadow-lg`}
      >
        <button onClick={toggleDarkMode} className="focus:outline-none p-4">
          {darkMode ? (
            <FiSun className="w-6 h-6 text-yellow-500 mx-auto" />
          ) : (
            <FiMoon className="w-6 h-6 text-gray-500 dark:hover:text-white mx-auto" />
          )}
        </button>
        {navItems.map((item) => (
          <li key={item} className="py-4 text-center dark:hover:text-white font-medium">
            <Link
              to={`/${item.toLowerCase()}`}
              className="block text-gray-700 hover:text-gray-900 dark:text-white"
              onClick={() => setIsMenuOpen(false)} // Close menu after clicking a link
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
