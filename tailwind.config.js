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
      white: 'var(--white)',
      black: 'var(--black)',
      green: {
        500: 'var(--green-500)',
        800: 'var(--green-800)',
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
      },
      minHeight: {
        'hero': 'min(100vh, 1080px)',
      },
      screens: {
        '4xl': '2200px',
      },
    },
  },
  plugins: [],
}