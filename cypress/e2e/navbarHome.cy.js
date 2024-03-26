/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("header qr-ordering testing", () => {
  it("should pass show the correct table number and outlet,search button,show search bar search item search bar", () => {
    const timeout = 20000;
    cy.visit(
      "http://localhost:5173/?input=b3V0bGV0PUJyeWFudCZ0YWJsZU5vPUEwMDEmdmFsaWRVbnRpbD0xNzE0MTUwODAwMDAw",
    );
    cy.get("#takeaway", { timeout })
      .should("be.visible")
      .should("be.enabled")
      .click();

    cy.get("#outletName", { timeout }).contains("Bryant");

    cy.get("#tableNo", { timeout }).contains("A001");

    cy.get("#buttonSearch").should("be.visible").should("be.enabled").click();
    cy.get("#input-search", { timeout }).type("orlenda");

    cy.get("#buttonSearch")
      .click()
      .then(() => {
        cy.get("#searchLabel")
          .should("be.visible")
          .contains("Search result for");
        cy.get("#d869cde2-533d-4a52-baa2-53cc21c6ebc4")
          .scrollIntoView()
          .should("be.visible");
        cy.wait(5000);
        cy.get("#2af5b539-7d0b-418f-a605-5840fd1a3cf4")
          .scrollIntoView()
          .should("be.visible");

        // cy.get("#0ae5b408-3762-4b88-88b4-1a2f1e9ab00d")
        //   .should("be.visible")
        //   .should("be.enabled")
        //   .click();
        // cy.get("#labelLoadingSearchBarItem").contains("Updating...");
        // cy.get("#showEdgeSnackNotif").should("be.visible");
      });
  });
});
