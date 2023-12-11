/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        englebert: ["Englebert", "cursive"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
