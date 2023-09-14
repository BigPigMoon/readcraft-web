/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'playfairDisplay': ['Playfair Display'],
      'yesevaOne': ['Yeseva One'],
      'forum': ['Forum'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {},
}

