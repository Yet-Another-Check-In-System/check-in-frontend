/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mintCream: "#F6FFF8",
        fireOpal: "#EF6351",
        ming: "#407076",
        spaceCadet: "#2E294E",
        cyberYellow: "#FFD400",
      },
      fontFamily: {
        roboto: ['"Roboto"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
