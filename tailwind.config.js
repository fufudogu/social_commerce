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
    screens: {
      'sm': {'max': '600px'},
      'md': {'min': '601x'},
      'lg': {'min': '960px'},
      'xl': {'min': '1280px'},
      '2xl': {'min': '1920px'},
    },
    minWidth: {
      '150': '150px',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
