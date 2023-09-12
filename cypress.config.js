const { defineConfig } = require("cypress");
const browserify = require('@cypress/browserify-preprocessor');

module.exports = defineConfig({
  viewportWidth:1680,
  viewportHeight: 660,
  video:false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    base_url:'https://globalsqa.com'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const options = browserify.defaultOptions
      options.browserifyOptions.transform[1][1].plugins.push([
        'module-resolver',
        {
          alias: {
            '@test': './test',
            '@helper': './test/helper',
          },
        },
      ]);
      on('file:preprocessor', browserify(options));
    },
    specPattern:'test/scenario/**/*.test.js'
  },
});
