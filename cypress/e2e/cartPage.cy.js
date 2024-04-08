/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("CART PAGE TESTING", () => {
  it("Should pass testing for every component in cart page scope", () => {
    cy.visit(
      "http://localhost:4173/?input=b3V0bGV0PUVkZ2UlMjBDYWZlJnRhYmxlTm89QTAwMSZ2YWxpZFVudGlsPTE3MTQxNTA4MDAwMDA=",
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

    // cy.get("#renderModalItemDetail").should("be.visible");
    // cy.get("#actionButtonAdd").should("be.enabled").click();
    // cy.get("#renderItemAttributes").should("be.visible");

    // cy.get("#A00010").should("be.visible").should("be.enabled").click();
    // cy.get("#A00001").should("be.visible").should("be.enabled").click();

    // cy.get("#actionButtonAdd")
    //   .click()
    //   .then(() => {
    //     cy.get("#loadingActionButtonAdd").contains("Adding...");
    //     cy.get("#renderCartSummary", { timeout }).should("be.visible").click();
    //     cy.get("#labelYouAreOrderFrom", { timeout: 50000 }).contains(
    //       "You are order from",
    //     );
    //     cy.get("#expandItemInCart")
    //       .should("be.enabled")
    //       .should("be.visible")
    //       .click();

    //     cy.get("#showSkeletonPaymentMethod").should("exist");
    //     cy.get("#Credit\\ Card").should("not.exist");
    //     cy.get("#Credit\\ Card").should("exist");
    //     cy.get("#showSkeletonPaymentMethod").should("not.exist");

    //     // cy.get("#buttonIncreaseCart")
    //     //   .should("be.enabled")
    //     //   .should("be.visible")
    //     //   .click();
    //     // cy.get("#labelUpdatingCartItem").should("be.visible");

    //     // cy.wait(5000);

    //     cy.get("#buttonEdit").should("be.visible").click();
    //     cy.get("#modalCartItem").should("be.visible");

    //     cy.get("#A00011").should("be.visible").should("be.enabled").click();
    //     cy.get("#A00014").should("be.visible").should("be.enabled").click();

    //     cy.get("#actionButtonAdd").should("be.visible").click();
    //     cy.get("#closeModalCartItem")
    //       .should("be.visible")
    //       .should("be.enabled")
    //       .click();

    //     cy.get("#labelChoosePayments").contains("Choose Payment Method");

    //     cy.get("#buttonFooterCart").should("have.attr", "disabled");
    //     cy.get("#Credit\\ Card")
    //       .should("be.visible")
    //       .should("be.enabled")
    //       .click();
    //     cy.get("#buttonFooterCart").should("not.have.attr", "disabled");
    //     cy.get("#buttonFooterCart")
    //       .should("be.visible")
    //       .should("be.enabled")
    //       .click();

    //     cy.get("#LabelOrderPayment", { timeout: 50000 }).contains(
    //       "Order Payment",
    //     );

    //     cy.get("#payment-form").should("exist");

    //     cy.get('iframe[name^="__privateStripeFrame"]', { timeout: 10000 })
    //       .first()
    //       .then(($iframe) => {
    //         cy.wrap($iframe).should("be.visible");
    //         cy.wrap($iframe).its("0.contentDocument").should("exist");
    //         cy.wrap($iframe)
    //           .its("0.contentDocument")
    //           .then(cy.wrap)
    //           .find('input[name="number"]')
    //           .type("4242424242424242");

    //         cy.wrap($iframe)
    //           .its("0.contentDocument")
    //           .then(cy.wrap)
    //           .find('input[name="expiry"]')
    //           .type("333");
    //         cy.wrap($iframe)
    //           .its("0.contentDocument")
    //           .then(cy.wrap)
    //           .find('input[name="cvc"]')
    //           .type("333");
    //       });

    //     cy.get("#footerButtonSubmit")
    //       .should("be.visible")
    //       .click()
    //       .then(() => {
    //         cy.get("#orderTableNo").should("exist");
    //         // cy.get("#skeletonOrderSummary").should("exist");
    //         // cy.get("#orderInformation").should("not.exist");
    //         // cy.get("#orderInformation").should("exist");
    //         // cy.get("#skeletonOrderSummary").should("not.exist");
    //         // cy.get("#backButtonCart").click();
    //         // cy.get("#skeletonOrderSummary").should("exist");
    //         // cy.get("#itemOrder").should("not.exist");
    //         // cy.get("#itemOrder").should("exist");
    //         // cy.get("#skeletonOrderSummary").should("not.exist");
    //         // cy.get("#backButtonCart").click();
    //         // cy.get("#notificationOrder").should("exist");
    //       });
    //   });
  });
});
