module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary' : '#3dbeff'
    }),
    letterSpacing: {
      widest: '.35em'
    },
    fill: theme => ({
      'white': theme('colors.red.500'),
    })
  },
  variants: {
    extend: {
      fill:['hover', 'focus'],
    },
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline = {
        '.underline': {
          'textDecoration' : 'underline',
          'text-decoration-color':'red',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}
