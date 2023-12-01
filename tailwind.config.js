/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        celadon: "#7BE0AD",
        "tiffany-blue": "#AEE5D8",
        platinum: "#E7E5E5",
        thistle: "#E5D0E3",
        "pink-lavender": "#E0B0D5",
        "black-2": "#1D1D1D",
        "black-3": "#282828",
        card: "#FFFFB7",
        button: "#DAEAF1",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
        metropolis: ["Metropolis", "sans-serif"],
      },
      shadow: {
        hard: "",
      },
      backgroundImage: {
        dots: "https://roundandround.sydney/build/assets/bg-dots-e39aed69.png",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
