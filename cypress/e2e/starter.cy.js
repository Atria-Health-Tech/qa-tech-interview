describe('Starter E2E Test', () => {
  it("should visit the site", () => {
    cy.visit("https://www.saucedemo.com/");
  });
});