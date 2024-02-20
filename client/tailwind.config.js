/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ceead6',
          200: '#9dd5ae',
          300: '#6cc185',
          400: '#3bac5d',
          500: '#0a9734',
          600: '#08792a',
          700: '#065b1f',
          800: '#043c15',
          900: '#021e0a',
        },
      },
      fontFamily: {
        SpaceMonoRegular: ['SpaceMono-Regular'],
        SingleDayRegular: ['SingleDay-Regular'],
      },
    },
  },
  plugins: [],
}
