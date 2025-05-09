/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#FDF2F4',
          100: '#FCE8EC',
          200: '#F9DFDC',
          300: '#F4C6CB',
          400: '#EBA3AD',
          500: '#E57E8F',
          600: '#D45A71',
          700: '#B13E58',
          800: '#8F2D45',
          900: '#6D2036',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};