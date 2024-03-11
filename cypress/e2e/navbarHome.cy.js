/* eslint-disable no-undef */
describe("header qr-ordering testing", () => {
  it("should pass show the correct table number and outlet,search button,show search bar search item search bar", () => {
    const timeout = 20000;
    cy.visit(
      "http://localhost:5173/?input=b3V0bGV0PUJyeWFudCZ0YWJsZU5vPUEwMDEmdmFsaWRVbnRpbD0xNzEwNjk0ODAwMDAw",
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
        cy.wait(50000);
        cy.get("#searchLabel")
          .should("be.visible")
          .contains("Search result for");

        cy.get("#searchResults").should("be.visible");
      });
  });
});
