/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5D1A2C',
          dark: '#4a1523',
          light: '#7d2a3f',
        },
        accent: {
          DEFAULT: '#E87722',
          dark: '#d16a1d',
          light: '#f08a3d',
        },
        cream: '#FFF8F0',
        charcoal: '#2D2D2D',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
