/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops)70%)',
      }
    },
  },
  plugins: [],
}
