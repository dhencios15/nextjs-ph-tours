const windmill = require('@windmill/react-ui/config');

module.exports = windmill({
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: { content: ['./components/**/*.js', './pages/**/*.js'] },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
});
