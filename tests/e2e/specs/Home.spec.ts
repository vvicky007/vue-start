// https://docs.cypress.io/api/introduction/api.html
/// <reference types="Cypress" />
describe("Home.vue", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Feel Football");
    cy.get('a[href="/"]')
      .click()
      .should("have.class", "router-link-exact-active");
    cy.get('a[href="/leagues"]')
      .click()
      .should("have.class", "router-link-exact-active");
    cy.get('a[href="/form"]')
      .click()
      .should("have.class", "router-link-exact-active");
    cy.get("#email").should("be.focused");
  });
});
