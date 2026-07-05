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
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          orange: '#FF6E14',
          red: '#EE534F',
          yellow: '#FDD835',
          blue: '#64B5F6',
          purple: '#CE93D8',
          dark: '#0A0A0A',
          darker: '#050505',
          gray: '#1F1F1F',
          peach: '#FFEDE1',
        }
      }
    },
  },
  plugins: [],
}
