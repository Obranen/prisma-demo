/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        myDefaultLight: '#0a9734',
        myDefaultDark: '#eefa7f',
      },
    },
  },
  plugins: [],
}
