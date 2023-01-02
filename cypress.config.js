const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on) {
      require("cypress-json-results")({
        on,
        filename: "results.json",
      });
    },
  },
});