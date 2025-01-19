module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add a modern font like Inter
      },
      colors: {
        primary: '#1a202c', // Dark gray
        secondary: '#2d3748', // Lighter gray
        accent: '#3182ce', // Blue
      },
    },
  },
  plugins: [],
};