/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("CART PAGE TESTING", () => {
  it("Should pass testing for every component in cart page scope", () => {
    cy.visit(
      `http://localhost:5173/?input=${Cypress.env(
        "QS_TABLE_NO_AND_OUTLET_NAME",
      )}`,
    );
    cy.get("#takeaway").should("be.visible").should("be.enabled").click();

    cy.get("#TagInsight").should("be.visible");
    cy.get("#idItem")
      .invoke("attr", "data-id")
      .then((idItem) => {
        cy.get(`[data-id="${idItem}"]`).scrollIntoView().click();
        cy.get("#updatingButtonLabel").contains("Adding...");
      });

    cy.get("#renderCartSummary").should("be.visible").click();

    cy.get("#buttonFooterCart").should("have.attr", "disabled");
    cy.get("#Credit\\ Card").should("be.visible").should("be.enabled").click();
    cy.get("#buttonFooterCart").should("not.have.attr", "disabled");
    cy.get("#buttonFooterCart")
      .should("be.visible")
      .should("be.enabled")
      .click();

    cy.get("#LabelOrderPayment").contains("Order Payment");

    cy.get("#payment-form").should("exist");
    cy.get('iframe[name^="__privateStripeFrame"]')
      .first()
      .then(($iframe) => {
        cy.wait(5000);
        cy.wrap($iframe).should("be.visible");
        cy.wrap($iframe).its("0.contentDocument").should("exist");
        cy.wrap($iframe)
          .its("0.contentDocument")
          .then(cy.wrap)
          .find('input[name="number"]')
          .type("4242424242424242");

        cy.wrap($iframe)
          .its("0.contentDocument")
          .then(cy.wrap)
          .find('input[name="expiry"]')
          .type("333");
        cy.wrap($iframe)
          .its("0.contentDocument")
          .then(cy.wrap)
          .find('input[name="cvc"]')
          .type("333");
      });

    cy.get("#footerButtonSubmit")
      .should("be.visible")
      .click()
      .then(() => {
        cy.wait(5000);
        cy.get("#orderTableNo").should("be.visible");
        cy.get("#backButtonCart").should("be.visible").click();

        cy.get("#detailOrderStatus")
          .should("be.visible")
          .click()
          .then((data) => {
            console.log(data);
          });
      });
  });
});