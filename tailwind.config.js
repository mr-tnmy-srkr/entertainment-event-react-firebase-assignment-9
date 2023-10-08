/** @type {import('tailwindcss').Config} */


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        koulen: ["Koulen", "cursive"],
        lato: ["Lato", "sans-serif"],
        outline: ['Kumar One Outline', 'cursive'],
      },
      backgroundImage: {
        qrBg: "url('https://i.ibb.co/ckBFKxX/Rectangle-14.png')",
      
      },
    },
  },
  plugins: [require("daisyui")],
};
