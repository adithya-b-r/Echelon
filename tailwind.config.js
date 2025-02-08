/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['sans-serif'],
        "gochi": ["Gochi Hand", "serif"],
        "Poppins": ["Poppins", "serif"],
      },
    },
  },
  plugins: [],
}