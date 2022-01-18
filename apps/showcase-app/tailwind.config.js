const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'src/**/*.{html,scss,ts}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#303030',
        light: '#ececec',
        accent: '#61a6fa',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
