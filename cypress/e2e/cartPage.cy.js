/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("CART PAGE TESTING", () => {
  it("Should pass testing for every component in cart page scope", () => {
    const timeout = 20000;
    cy.visit(
      "http://localhost:5173/?input=b3V0bGV0PUVkZ2UlMjBDYWZlJnRhYmxlTm89QTAwMTAmdmFsaWRVbnRpbD0xNzEzNDU5NjAwMDAw",
    );
    cy.get("#takeaway", { timeout })
      .should("be.visible")
      .should("be.enabled")
      .click();

    cy.get("#TagInsight", { timeout: 50000 }).should("be.visible");
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
        cy.get("#renderCartSummary", { timeout }).should("be.visible").click();
        cy.get("#labelYouAreOrderFrom", { timeout: 50000 }).contains(
          "You are order from",
        );
        cy.get("#expandItemInCart")
          .should("be.enabled")
          .should("be.visible")
          .click();

        cy.get("#showSkeletonPaymentMethod").should("exist");
        cy.get("#Credit\\ Card").should("not.exist");
        cy.get("#Credit\\ Card").should("exist");
        cy.get("#showSkeletonPaymentMethod").should("not.exist");

        // cy.get("#buttonIncreaseCart")
        //   .should("be.enabled")
        //   .should("be.visible")
        //   .click();
        // cy.get("#labelUpdatingCartItem").should("be.visible");

        // cy.wait(5000);

        cy.get("#buttonEdit").should("be.visible").click();
        cy.get("#modalCartItem").should("be.visible");

        cy.get("#A00011").should("be.visible").should("be.enabled").click();
        cy.get("#A00014").should("be.visible").should("be.enabled").click();

        cy.get("#actionButtonAdd").should("be.visible").click();
        cy.get("#closeModalCartItem")
          .should("be.visible")
          .should("be.enabled")
          .click();

        cy.get("#labelChoosePayments").contains("Choose Payment Method");

        cy.get("#buttonFooterCart").should("have.attr", "disabled");
        cy.get("#Credit\\ Card")
          .should("be.visible")
          .should("be.enabled")
          .click();
        cy.get("#buttonFooterCart").should("not.have.attr", "disabled");
        cy.get("#buttonFooterCart")
          .should("be.visible")
          .should("be.enabled")
          .click();

        cy.get("#LabelOrderPayment", { timeout: 50000 }).contains(
          "Order Payment",
        );
        cy.get("#showEdgeSnackNotif").should("be.visible");
        cy.get("#payment-form").should("exist");
      });
  });
});
