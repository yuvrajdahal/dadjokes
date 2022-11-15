/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#010101",
        "c-gray": "#717171",
      },
      fontFamily: {
        vt323: ["VT323", "monospace"],
      },
    },
  },
  plugins: [],
};
