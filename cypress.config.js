const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Event listeners if needed
    },
    baseUrl: "https://example.cypress.io", // Change this URL to match your project
  },
})