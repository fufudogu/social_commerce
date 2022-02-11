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
      },
      fontSize: {
        'xxs': '.65rem',
      }
    },
    minWidth: {
      '150': '150px',
     }
  },
  variants: {
    extend: {
      display: ['group-hover'],
      borderWidth: ['hover', 'focus']
    },
  },
  plugins: [],
}
