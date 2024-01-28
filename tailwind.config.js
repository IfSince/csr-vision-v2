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
        'h4': 'clamp(1.25rem, 2.5vw, 1.75rem)', // 20px - 28px
      },
      screens: {
        'xs': '520px',
        '4xl': '2200px',
      },
      gridTemplateColumns: {
        'layout': '[full-width-start] var(--horizontal-spacing) [content-start] repeat(12, minmax(0, 1fr)) [content-end] var(--horizontal-spacing) [full-width-end]',
        'footer': 'minmax(650px, 1fr) minmax(0, max(768px, 35vw))',
      },
      gridColumn: {
        'full-width': 'full-width',
        'content': 'content',
      },
      minHeight: {
        'hero': 'min(100vh, 67.5rem)', // 100vh - 1080px
      },
      maxWidth: {
        '2xs': '16rem', // 256px
      },
      padding: {
        'hero-max': 'max(10rem, 15vh)',
        'hero-min': 'max(5.75rem, 25vh)',
      },
    },
  },
  plugins: [],
}