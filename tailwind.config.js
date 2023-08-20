/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.{html,js}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Montserat: ["Montserat", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      white: "white",
      black: "black",
      beige: "#DCC1AB",
      green: "#1B5B31",
      gray: "#F5F0EC",
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
