const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        retroBrown: '#e07a5f',
        retroBeige: '#f4f1de',
        retroGreen: '#81b29a',
        retroDark: '#3d405b',
      },
      fontFamily: {
        retro: ['Courier New', 'Courier', 'monospace'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
