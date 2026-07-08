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
          orange: '#8B5CF6',
          red: '#3B82F6',
          yellow: '#0EA5E9',
          blue: '#3B82F6',
          purple: '#8B5CF6',
          dark: '#0A0A0A',
          darker: '#050505',
          gray: '#1F1F1F',
          peach: '#EEF2F6',
        }
      }
    },
  },
  plugins: [],
}
