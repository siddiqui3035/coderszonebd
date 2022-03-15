module.exports = {
  purge: [
    "*.html"
  ],
  mode: "jit",
  content: [
    './public/**/*.html',
    './public/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      frontFamily: {
        sans: ["Fira sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}
