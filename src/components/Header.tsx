import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';


function Header() {
  const navItems = ['Home', 'Services', 'About', 'Contact'];
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }
  }, [isMenuOpen]);

  return (
    <header className="bg-lightBg dark:bg-darkBg dark:text-darkText shadow-md sticky top-0 z-50">
      <nav className="w-full px-6 flex justify-between items-center py-4">
        <div className="logo hidden md:block">
          <img src="https://derhjzjgqhzkqefjmrer.supabase.co/storage/v1/object/public/assets/newlogo.png?t=2024-10-11T20%3A28%3A42.085Z" alt="AXIMO Logo" className="w-36" />
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
              <FiSun className="w-6 h-6 text-yellow-500" />
            ) : (
              <FiMoon className="w-6 h-6 text-gray-500 dark:hover:text-white" />
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
        ref={menuRef}
        className={`${
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-lightBg dark:bg-darkBg shadow-lg fixed top-0 left-0 w-full z-50`}
        style={{
          transform: isMenuOpen ? 'translateY(0)' : 'translateY(-100%)', // Slide down effect
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {/* Close Button on the Left Side */}
        <button onClick={toggleMenu} className="absolute top-2 left-2 text-gray-500 dark:text-white">
          <FiX className="w-8 h-8" />
        </button>
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