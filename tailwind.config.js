const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx}`,
    `./src/components/**/*.{js,jsx}`,
    './src/hooks/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#FAF9F6',
      black: '#1F1F21',
      green: {
        500: '#417C5E',
        800: '#335645',
      },
      primary: 'rgb(var(--clr-primary, 250 249 246) / <alpha-value>)',
      secondary: 'rgb(var(--clr-secondary, 31 31 33) / <alpha-value>)',
      accent: 'rgb(var(--clr-accent, 51 86 69) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        overpass: ['Overpass', ...defaultTheme.fontFamily.sans],
        undotted: ['Undotted', 'Overpass', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'h1': 'clamp(4rem, 11vw, 11.25rem)', // 64px - 180px
        'h2': 'clamp(3.375rem, 10vw, 7.5rem)', // 54px - 120px
        'h3': 'clamp(1.75rem, 4vw, 3.375rem)', // 30px - 54px
        'h4': 'clamp(1.5rem, 3vw, 1.875rem)', // 24px - 30px
      },
      minHeight: {
        'hero': 'min(100vh, 67.5rem)', // 1080px
      },
      padding: {
        'hero-max': 'max(10rem, 15vh)',
        'hero-min': 'max(5.75rem, 25vh)',
      },
      screens: {
        'xs': '520px',
        '4xl': '2200px',
      },
    },
  },
  plugins: [],
}