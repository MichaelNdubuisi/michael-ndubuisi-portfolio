/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A0F1C",    // Deep Navy
        accent: "#1E90A0",     // Muted Teal (refined to fit Primary)
        text: "#F2F2F2",       // Light text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
