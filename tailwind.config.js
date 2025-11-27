/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f7f1',
          100: '#d9ead9',
          200: '#b8dab8',
          300: '#96c896',
          400: '#8fbf8f',
          500: '#7ba97b',
          600: '#4a7d4a',
          700: '#2d5c2d',
          800: '#1B3400',
          900: '#0f1f00',
        },
        secondary: {
          50: '#f7f3f0',
          100: '#e8dcd3',
          200: '#d9c5b7',
          300: '#c9ad9a',
          400: '#A17C5B',
          500: '#946f4f',
          600: '#876244',
          700: '#6b4a32',
          800: '#4f3820',
          900: '#33260e',
        },
      },
    },
  },
  plugins: [],
};
