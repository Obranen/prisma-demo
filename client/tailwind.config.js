// const { platformSelect } = require('nativewind')

// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      myDefaultLight: '#0a9734',
      // myPrimaryLight: '#f5efe6',
      // mySecondaryLight: '#000000',
      // myHighlightLight: '#e05810',

      myDefaultDark: '#eefa7f',
      // myPrimaryDark: '#f5efe6',
      // mySecondaryDark: '#000000',
      // myHighlightDark: '#e05810',
      // error: platformSelect({
      //   android: 'blue',
      // }),
    },
  },
  plugins: [],
}
