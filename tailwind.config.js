module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  darkMode: false, // ou 'media' ou 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-primeui'),
  ],
}