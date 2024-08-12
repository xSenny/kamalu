/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "accent": "#ee560b"
      },
      backgroundImage: {
        'testimonials': "url('/assets/testimonials.jpg')"
      }
    },
  },
  plugins: [],
}