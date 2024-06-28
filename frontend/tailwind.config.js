const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: true,
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s infinite alternate, blink .7s infinite, line-height 1.7"
      },
      colors: {
        retroBrown: '#e07a5f',
        retroBeige: '#f4f1de',
        retroGreen: '#81b29a',
        retroDark: '#3d405b',
        green: '#8ED563',
        white: '#FFFFFF',
        darkGreen: '#040D01',
        gradientGreen: '#003809',
      },
      fontFamily: {
        retro: ['Courier New', 'Courier', 'monospace'],
        mont: ['montserrat'],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};