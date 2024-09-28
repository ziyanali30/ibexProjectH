import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon } from 'react-icons/fi'; // Importing the icons
function Header() {
  // Store the navigation items in an array
  const navItems = ['Home', 'Services', 'About', 'Contact'];
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () =>{
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

  const [activeNav, setActiveNav] = useState('Home');
return (
<header className=" bg-lightBg dark:bg-darkBg dark:text-darkText shadow-md sticky top-0 z-50 justify-between items-center">

      <nav className=" w-full px-6 flex justify-between items-center py-4 ">
        <div className="logo">
          <img src="logo.jpg" alt="Ibex Logo" className="w-36" />
        </div>
        <ul className="flex space-x-6 text-lightText dark:text-darkText">
        <button onClick={toggleDarkMode} className="focus:outline-none">
        {darkMode ? (
          <FiSun className="w-6 h-6 text-yellow-500" /> // Sun icon for light mode
        ) : (
          <FiMoon className="w-6 h-6 text-gray-500 dark:hover:text-white" /> // Moon icon for dark mode
        )}
          </button>
          {navItems.map((item) => (
            <li key={item} className="relative group dark:hover:text-white font-medium ">
              <Link
                to={`/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-gray-900 dark:text-white"
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