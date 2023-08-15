/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      height: {
        'min35vh': 'min(35vh, 100vh)',
      },
      keyframes: {'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 }}},
      animation: {'fade-in': 'fade-in 1s ease-out'},
      gridTemplateColumns: {
        '3/2': '3fr 2fr',
        '1/4': '1fr 4fr',
      },
    },
  },
  plugins: [],
}

