const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{html,scss,ts}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'e-com-primary': '#311D3F',
        'e-com-secondary': '#522546',
        'e-com-secondary-variant': '#88304E',
        'e-com-accent': '#E23E57',
        'e-com-front-primary': '#E5E3C9',
        'e-com-front-secondary': '#B4CFB0',
        'e-com-front-secondary-variant': '#94B49F',
        'e-com-front-accent': '#789395',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
