/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("TESTING CART PAGE", () => {
  it("Should pass testing for every component in cart page scope", () => {
    cy.visit(
      `http://localhost:4173/?input=${Cypress.env(
        "QS_TABLE_NO_AND_OUTLET_NAME",
      )}`,
    );
    cy.get("#dinein", { timeout: 5000 })
      .should("be.visible")
      .should("be.enabled")
      .click();
    cy.get("#TagInsight").should("be.visible");

    cy.get("#buttonSearch").click();
    cy.get("#input-search").type("100").type("{enter}");

    cy.get("div#groupingSearchItem")
      .first()
      .then(($element) => {
        const objHtml = $element[0];
        const nameGroupItemSearchElement = objHtml.querySelector(
          "#nameGroupItemSearch",
        );
        const buttonAdd = objHtml.querySelector("button#idItem");
        cy.get(buttonAdd).should("be.visible").click();
        cy.get(nameGroupItemSearchElement).should("exist");
      });

    cy.get("button#button-increaseQuantity").should("be.visible").click();
    cy.get("button#button-decreaseQuantity").should("be.visible").click();
    cy.get("#btn-back-search").click();

    cy.intercept(
      "GET",
      `https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/products/Edge%20Cafe/*/*?skip=0&take=5`,
    ).as("getData");

    cy.get("button#navbarItem")
      .first()
      .click()
      .then(($element) => {
        const dataType = $element.attr("data-type");
        const dataRefno = $element.attr("data-refno");
        cy.intercept(
          "GET",
          `https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/products/Edge%20Cafe/${dataType}/${dataRefno}?skip=0&take=5`,
        ).as("getData");
        cy.wait("@getData").then((interception) => {
          expect(interception.response.statusCode).to.equal(200);
          const { data } = interception.response.body;
          data.forEach((item) => {
            if (item.viewType) {
              cy.get("div#buttonTitleNavbar").contains(item.buttonTitle);
            }
          });
        });
      });

    // // TESTING ADD ITEM(attr)
    cy.get("button#navbarItem").first().click();
    cy.get("button#idItem")
      .first()
      .click()
      .then(() => {
        cy.get("#renderModalItemDetail").should("exist");
        cy.get("#actionButtonAdd").should("be.enabled").click();
        cy.get("#renderItemAttributes").should("exist");

        cy.get("button#attributeItem").first().as("firstItemAttr");
        cy.get("button#attributeItem").eq(3).as("fourthItemAttr");
        cy.get("@firstItemAttr").click();
        cy.get("@fourthItemAttr").click();
        cy.get("#actionButtonAdd").should("be.visible").click();
      });

    // // TESTING ADD ITEM (bundle)
    cy.get("button#navbarItem").eq(1).click();
    cy.get("button#idItem")
      .first()
      .click()
      .then(() => {
        cy.get("#renderModalItemDetail").should("exist");
        cy.get("#actionButtonAdd").should("be.enabled").click();
        cy.get("#renderItemBundle").should("exist");

        cy.get("button#bundleItemGroups").first().as("itemGroupBundleFirst");
        cy.get("button#bundleItemGroups").eq(1).as("itemGroupBundleSecond");
        cy.get("button#bundleItemGroups").eq(2).as("itemGroupBundleThird");

        cy.get("button#itemBundle").first().as("buttonItemBundleFirstItem");
        cy.get("@buttonItemBundleFirstItem").click();

        cy.get("button#qtyPlusBundle").first().as("buttonQtyPlusFirstItem");
        cy.get("@buttonQtyPlusFirstItem").click();

        cy.get("div#IconCheckPassed").first().as("iconCheckPassedFirst");
        cy.get("@iconCheckPassedFirst").should("exist");

        cy.get("@itemGroupBundleSecond")
          .click()
          .then(() => {
            cy.get("button#itemBundle")
              .first()
              .as("buttonItemBundleSecondItem");
            cy.get("@buttonItemBundleSecondItem").click();
            cy.get("button#qtyPlusBundle")
              .first()
              .as("buttonQtyPlusSecondItem");
            cy.get("@buttonQtyPlusSecondItem").click();

            cy.get("div#IconCheckPassed").eq(1).should("exist");
          });

        cy.get("@itemGroupBundleThird")
          .click()
          .then(() => {
            cy.get("button#itemBundle").click();
            cy.get("button#qtyPlusBundle").click();
            cy.get("div#IconCheckPassed").eq(2).should("exist");
          });
        cy.get("#actionButtonAdd").click();
      });

    cy.get("button#navbarItem").eq(2).click();
    cy.get("button#idItem").first().click();
    cy.get("button#button-increaseQuantity").click();
    cy.get("div#updatingButtonLabel").contains("Updating...");
    cy.get("button#button-decreaseQuantity").click();

    // End Testing all item type
    cy.get("#renderCartSummary").should("be.visible").click();
    cy.intercept(
      "GET",
      "https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/outlets/Edge%20Cafe/paymentmodes?",
    ).as("paymentmodes");

    cy.get("#buttonFooterCart")
      .scrollIntoView()
      .should("have.attr", "disabled");

    cy.wait("@paymentmodes").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      const { data } = interception.response.body;
      const stripePayment = data.find(
        (paymentMode) => paymentMode.provider === "Stripe",
      );
      const fomoPayment = data.find(
        (paymentMode) => paymentMode.provider === "FOMO",
      );
      if (stripePayment) {
        console.log("YOUR LOG =>", stripePayment);
        cy.get(`div#${stripePayment.provider}`).click();
        cy.get("#buttonFooterCart").should("not.have.attr", "disabled");
        cy.get("#buttonFooterCart").click();

        cy.get("#SkeletonPaymentInput").should("exist");
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
      } else if (fomoPayment) {
        console.log("YOUR LOG =>", fomoPayment);
        cy.get(`div#${fomoPayment.provider}`).click();
        cy.get("#buttonFooterCart").should("not.have.attr", "disabled");
        cy.get("#buttonFooterCart").should("be.visible").click();
        cy.get("#SkeletonPaymentInput").should("exist");

        cy.url().then((url) => {
          cy.log("Current URL:", url);
        });
        cy.interactWithFomoPayIframe();
      }
    });

    cy.get("#footerButtonSubmit")
      .should("be.visible")
      .click()
      .then(() => {
        cy.wait(5000);
        cy.get("#orderTableNo").should("be.visible");
        cy.get("#backButtonCart").should("be.visible").click();

        cy.get("#detailOrderStatus").should("be.visible").click();
        cy.get("#backButtonCart").click();
        cy.get("#backButtonCart").click();
        cy.get("#notificationOrder").should("exist");
      });
  });
});