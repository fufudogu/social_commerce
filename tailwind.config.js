module.exports = {
  purge: [
    './public/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '18': '4.5rem',
      },
      zIndex: {
       '60': 60,
       '70': 70,
       '80': 80,
       '90': 90,
       '100': 100,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
