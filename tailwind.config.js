const windmill = require('@windmill/react-ui/config');

module.exports = windmill({
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    content: [
      './components/**/*.js',
      './pages/**/*.js',
      './pages/**/**/*.js',
      './components/**/**/*.js',
    ],
  },
  theme: {
    colors: {
      'sky-blue': '#87b9e8',
    },
    extend: {
      height: (theme) => ({
        'screen/2': '50vh',
        'screen/1.5': 'calc(100vh / 1.5)',
        'screen/3': 'calc(100vh / 3)',
        'screen/4': 'calc(100vh / 4)',
        'screen/5': 'calc(100vh / 5)',
      }),
    },
  },
  variants: {},
  plugins: [],
});
