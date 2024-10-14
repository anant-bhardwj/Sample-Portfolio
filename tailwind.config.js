/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: "#FFB400",
        customGrey: "#767676",
      },
    },
  },
  plugins: [require("daisyui")],
};
