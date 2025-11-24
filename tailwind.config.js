/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans"', 'Roboto', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
      },
      colors: {
        google: {
          blue: '#1a73e8',
          gray: '#f0f4f9',
          text: '#1f1f1f',
          subtext: '#444746',
          border: '#e0e3e7',
          nav: '#f9f9fa',
          hover: '#f2f2f2'
        }
      }
    },
  },
  plugins: [],
}