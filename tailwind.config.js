/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{njk,md}", "./content/**/*.svg",],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

