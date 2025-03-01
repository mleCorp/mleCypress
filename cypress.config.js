const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Event listeners if needed
    },
    baseUrl: "https://example.cypress.io", // Change to your site
    supportFile: "cypress/support/e2e.js", // Ensure Cypress finds this file
  },
})