const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FAF9F6',
      black: ' #1F1F21',
      green: {
        500: '#417C5E',
        800: '#335645',
      },
      primary: 'var(--clr-primary, #FAF9F6)',
      secondary: 'var(--clr-secondary, #1F1F21)',
      accent: 'var(--clr-accent, #335645)',
    },
    extend: {
      fontFamily: {
        overpass: ['Overpass', ...defaultTheme.fontFamily.sans],
        undotted: ['Undotted', 'Overpass', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'h1': 'clamp(3.375rem, 11vw, 11.25rem)', // 54px - 180px
        'h2': 'clamp(54px, 10vw, 121px)' // 54px - 121px
      },
      minHeight: {
        'hero': 'min(100vh, 1080px)',
      },
      padding: {
        'hero-max': 'max(160px, 15vh)',
        'hero-min': 'max(50px, 10vh)',
      },
      screens: {
        '4xl': '2200px',
      },
    },
  },
  plugins: [],
}