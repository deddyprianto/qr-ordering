/* eslint-disable no-undef */
describe("test ProductCatalog", () => {
  it("should have a list for product catalog", () => {
    const timeout = 40000;
    cy.visit(
      "http://localhost:5173/?input=b3V0bGV0PUJyeWFudCZ0YWJsZU5vPUEwMDEmdmFsaWRVbnRpbD0xNzEwNjk0ODAwMDAw",
    );

    cy.get("#takeaway", { timeout })
      .should("be.visible")
      .should("be.enabled")
      .click();

    cy.get("#TagInsight", { timeout }).should("be.visible");
    cy.get("#ITEM_I0000322").should("be.visible");
    cy.get("#renderButtonAdd").should("be.enabled").click();
    cy.get("#renderModalItemDetail").should("be.visible");
    cy.get("#actionButtonAdd").should("be.enabled").click();
    cy.get("#renderItemAttributes").should("be.visible");

    cy.get("#A00010").should("be.visible").should("be.enabled").click();
    cy.get("#A00001").should("be.visible").should("be.enabled").click();

    cy.get("#actionButtonAdd")
      .click()
      .then(() => {
        cy.get("#loadingActionButtonAdd").contains("Adding...");
        cy.wait(8000);
        cy.get("#renderCartSummary").should("be.visible");
        cy.get("#button-decreaseQuantity")
          .should("be.visible")
          .should("be.enabled");
        cy.get("#quantity").should("be.visible");
        cy.get("#button-increaseQuantity")
          .should("be.visible")
          .should("be.enabled");
      });
  });
});
