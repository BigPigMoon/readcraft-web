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
      'sans': ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {themes: ["pastel"],},
}

