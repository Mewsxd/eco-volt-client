/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "robo-mono": ["Roboto Mono", "monospace"],
        lexend: ["Lexend", "sans-serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        cgreen: "#0fcb7b",
      
      },
    },
  },
  plugins: [],
};
