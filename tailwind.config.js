/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textDecorationThickness: {
        6: '6px',}
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

