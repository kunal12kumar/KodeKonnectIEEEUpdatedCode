/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, #1e3c72, #2a5298)', // Replace with your colors
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}