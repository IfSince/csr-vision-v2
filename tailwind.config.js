const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx}`,
    `./src/components/**/*.{js,jsx}`,
    `./src/templates/**/*.{js,jsx}`,
    './src/hooks/**/*.{js,jsx}',
    './src/svg/**/*.{js,jsx}',
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
      error: 'rgb(var(--clr-error, 244 67 54) / <alpha-value>)',
    },
    extend: {
      fontFamily: {
        overpass: ['Overpass', ...defaultTheme.fontFamily.sans],
        undotted: ['Undotted', 'Overpass', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'heading-1': 'clamp(4rem, 11vw, 11.25rem)', // 64px - 180px
        'heading-3': 'clamp(1.5rem, 3.5vw, 2.25rem)', // 24px - 36px

        '3-extra-large': 'clamp(3rem, 9vw, 7.5rem)', // 54px - 120px,
        '2-extra-large': 'clamp(1.75rem, 4vw, 3.375rem)', // 30px - 54px
        'extra-large': 'clamp(1.125rem, 2.5vw, 1.75rem)', // 18px - 28px
        'lg': '18px',
      },
      screens: {
        'xs': '520px',
        '4xl': '2200px',
      },
      gridTemplateColumns: {
        'layout': '[full-width-start] var(--horizontal-spacing) [content-start] repeat(12, minmax(0, 1fr)) [content-end] var(--horizontal-spacing) [full-width-end]',
        'project-list': 'var(--horizontal-spacing) [content-start] repeat(3, minmax(0, 1fr)) [content-end] var(--horizontal-spacing)',
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