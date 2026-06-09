const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/",
    viewportHeight: 550,
    viewportWidth: 1000,
    experimentalStudio: false,
    defaultCommandTimeout: 2000,
  },
});
