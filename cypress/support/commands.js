/* eslint-disable no-undef */
/// <reference types="Cypress" />

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("interactWithFomoPayIframe", () => {
  cy.origin("https://ipg.fomopay.net", () => {
    // Ensure the iframe or any other elements are loaded
    cy.get("iframe", { timeout: 20000 }).should("be.visible"); // Increase timeout to 20000ms

    // You can now interact with elements inside the iframe if needed
    cy.get("iframe").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body)
        .find("selector-inside-iframe") // Replace with the actual selector inside the iframe
        .should("be.visible");
    });
  });
});
