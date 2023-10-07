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
        cardBg: "url('https://i.ibb.co/D9nHmPr/Rectangle-13.png')",
        qrBg: "url('https://i.ibb.co/ckBFKxX/Rectangle-14.png')",
      
      },
    },
  },
  plugins: [require("daisyui")],
};
