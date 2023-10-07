/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        koulen: ["Koulen", "cursive"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        cardBg: "url('')",
        qrBg: "url('')",
      
      },
    },
  },
  plugins: [require("daisyui")],
};
