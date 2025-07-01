const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://example.cypress.io',
    supportFile: false,
  },
}); 