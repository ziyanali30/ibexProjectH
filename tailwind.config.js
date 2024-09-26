/** @type {import('tailwindcss').Config} */
export default {
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
      },
    },
  },
  plugins: [],
}