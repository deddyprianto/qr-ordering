/* eslint-disable no-undef */
describe("test RenderOrderType", () => {
  it("should have a label and the order type should be clickable", () => {
    const timeout = 20000;
    cy.visit(
      "http://localhost:4173/?input=b3V0bGV0PUVkZ2VDYWZlVHJhaW5pbmcmdmFsaWRVbnRpbD0xNzEwNTIyMDAwMDAw",
    );
    cy.get("#checkHowToOrderLabel", { timeout }).contains(
      "How Would You Like to Order?",
    );
    cy.get("#takeaway").should("be.visible").should("be.enabled").click();
    cy.get("#dinein").should("be.visible").should("be.enabled").click();
  });
});
