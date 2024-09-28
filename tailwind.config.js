/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'Arial', 'sans-serif'], // Adjust this based on the Ibex font
      },
      colors: {
        primary: '#EF3340', // Red color for the underlining effect
        secondary: '#4A4A4A', // General text color
        lightBg: '#ffffff',  // Light mode background
        darkBg: '#1f2937',   // Dark mode background
        lightText: '#000000',  // Light mode text
        darkText: '#ffffff',   // Dark mode text
      },
    },
  },
  plugins: [],
}