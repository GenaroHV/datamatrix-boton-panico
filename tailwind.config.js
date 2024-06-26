/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      borderRadius: {
        '5xl': '3rem',
      },
      colors: {
        oficial: {
          50: '#f2f7fc',
          100: '#e2edf7',
          200: '#cbe0f2',
          300: '#a8cce8',
          400: '#7eb1dc',
          500: '#6096d1',
          600: '#4c7dc4',
          700: '#426bb3',
          800: '#3b5792',
          900: '#334a74',
          950: '#232f48'
        }
      }
    },
  },
  plugins: [],
}

