/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        background: {
          light: "#ffffff",
          dark: "#1a202c",
        },
        text: {
          light: "#1a202c",
          dark: "#ffffff",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
