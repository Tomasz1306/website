/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
  plugins: [],
};
