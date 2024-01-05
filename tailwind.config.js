const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['Overpass', ...defaultTheme.fontFamily.sans],
        'undotted': ['Undotted', 'Overpass', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      'transparent': 'transparent',
      'white': '#FAF9F6',
      'black': '#1F1F21',
      'green': {
        '500': '#417C5E',
        '800': '#335645',
      }
    },
  },
  plugins: [],
}
