/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        "lean-green": "#093a05"
      },
    },
  },
  plugins: [require('rippleui'), require('tw-elements/dist/plugin')],
  rippleui: {},
}
