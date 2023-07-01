/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary1: "#0B0D17",
        primary2: "#D0D6F9",
        primary3: "#FFFFFF",
      },
      fontFamily: {
        barlowcondensed: ["Barlow Condensed", "sans-serif"],
        bellefair: ["Bellefair", "serif"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
