/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["light", "dark", "cupcake","garden"],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-45': 'linear-gradient(45deg, #1e3c72, #2a5298)', // Replace with your colors
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'] ,// Add your custom font here
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        playfair:[ 'Playfair Display', 'serif'],
        agu:['Agu Display', 'serif']

      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}








