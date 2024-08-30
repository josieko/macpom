/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx,stories.tsx,stories.jsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    colors: {
      // Existing colors
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      // New custom colors
      dark: "#1F2937", // Example dark color, adjust as needed
      "dark-2": "#374151", // Example dark-2 color
      "dark-3": "#4B5563", // Example dark-3 color
      "dark-5": "#6B7280", // Example dark-5 color
      "body-color": "#4B5563", // Example body-color
      white: "#FFFFFF",
      "gray-3": "#D1D5DB", // Example gray-3 color
      "gray-4": "#E5E7EB", // Example gray-4 color
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("preline/plugin"),
    require("tailgrids/plugin"),
  ],
  // Enable dark mode
  darkMode: "class",
};
