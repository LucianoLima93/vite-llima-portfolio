/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      keyframes: {'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 }}},
      animation: {'fade-in': 'fade-in 1s ease-out'}
    },
  },
  plugins: [],
}

