module.exports = {
  purge: [
    './public/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '18': '4.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
