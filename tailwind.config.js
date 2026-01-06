/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      colors: {
        gold: {
          prestige: '#D4AF37',
        }
      }
    },
  },
  plugins: [],
}
