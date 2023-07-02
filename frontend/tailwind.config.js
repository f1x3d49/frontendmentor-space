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
      screens: {
        mb: "375px",
        tb: "768px",
        dt: "1440px",
      },
      backgroundImage: {
        bgHomeMobile: "url('/src/assets/home/background-home-mobile.jpg')",
        bgHomeTablet: "url(/src/assets/home/background-home-tablet.jpg)",
        bgHomeDesktop: "url(/src/assets/home/background-home-desktop.jpg)",
      },
    },
  },
  plugins: [],
};
