/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flash: {
          "0%": { backgroundColor: "gray", opacity: "1" },
          "100%": { backgroundColor: "transparent", opacity: "1" },
        },
      },
      animation: {
        flash: "flash 1s ease-out",
      },
      fontFamily: {
        "robo-mono": ["Roboto Mono", "monospace"],
        lexend: ["Lexend", "sans-serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        cgreen: "#0fcb7b",
        cblue: "#00384F",
      },
    },
  },
  plugins: [],
};
