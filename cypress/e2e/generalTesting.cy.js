/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("TESTING CART PAGE", () => {
  it("Should pass testing for every component in cart page scope", () => {
    cy.visit(
      `http://localhost:5173/?input=${Cypress.env(
        "QS_TABLE_NO_AND_OUTLET_NAME",
      )}`,
    );
    cy.get("#takeaway", { timeout: 5000 })
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
        const buttonAdd = objHtml.querySelector("button.justify-center");
        cy.get(buttonAdd).should("be.visible").click();
        cy.get(nameGroupItemSearchElement).should("exist");
      });
    cy.get("#btn-back-search").click();

    cy.intercept(
      "GET",
      `https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/products/Edge%20Cafe/*/*?skip=0&take=5`,
    ).as("getData");

    cy.get("button#navbarItem")
      .eq(1)
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
          cy.get("div#buttonTitleNavbar").first().contains(data[0].buttonTitle);
        });
      });

    cy.get("button#navbarItem").first().click();

    cy.get("button#idItem").eq(1).as("secondAddButtonForBundle");
    cy.get("button#idItem").eq(3).as("thirdAddButtonForAttr");

    // // TESTING ADD ITEM(attr)
    cy.get("@secondAddButtonForBundle")
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

        cy.get("button#button-increaseQuantity")
          .eq(2)
          .as("buttonIncreaseQtyAttr");
        cy.get("@buttonIncreaseQtyAttr")
          .click()
          .then(() => {
            cy.get("#increaseQtyAttr").should("be.visible").click();
            cy.get("#labelUpdating").contains("Updating...");
            cy.get("#decreaseQtyAttr").should("be.visible").click();
          });
        cy.get("#iconCloseAction")
          .scrollIntoView()
          .should("be.visible")
          .click();
      });

    // // TESTING ADD ITEM (bundle)
    cy.get("@thirdAddButtonForAttr")
      .click()
      .then(() => {
        cy.get("#renderModalItemDetail").should("exist");
        cy.get("#actionButtonAdd").should("be.enabled").click();
        cy.get("#renderItemBundle").should("exist");

        cy.get("button#bundleItemGroups").first().as("itemGroupBundleFirst");
        cy.get("button#bundleItemGroups").eq(1).as("itemGroupBundleSecond");
        cy.get("button#bundleItemGroups").eq(2).as("itemGroupBundleThird");

        cy.get("@itemGroupBundleFirst")
          .click()
          .then(() => {
            cy.get("button#itemBundle").first().as("buttonItemBundleFirstItem");
            cy.get("@buttonItemBundleFirstItem").click();
            cy.get("button#qtyPlusBundle").first().as("buttonQtyPlusFirstItem");
            cy.get("@buttonQtyPlusFirstItem").click();
            cy.get("div#IconCheckPassed").first().as("iconCheckPassedFirst");
            cy.get("@iconCheckPassedFirst").should("exist");
          });

        cy.get("@itemGroupBundleSecond")
          .click()
          .then(() => {
            cy.get("button#itemBundle").eq(5).as("buttonItemBundleSecondItem");
            cy.get("@buttonItemBundleSecondItem").click();
            cy.get("button#qtyPlusBundle").eq(1).as("buttonQtyPlusSecondItem");
            cy.get("@buttonQtyPlusSecondItem").click();
            cy.get("div#IconCheckPassed").eq(1).as("iconCheckPassedSecond");
            cy.get("@iconCheckPassedSecond").should("exist");
          });
        cy.get("@itemGroupBundleThird")
          .click()
          .then(($element) => {
            const objHtml = $element[0].textContent;
            const startIndex = objHtml.indexOf("Choose") + 6;
            const endIndex = objHtml.indexOf(")", startIndex);
            const chooseCount = parseInt(
              objHtml.substring(startIndex, endIndex),
            );
            cy.get("button#itemBundle").eq(9).click();
            cy.get("button#qtyPlusBundle").eq(2).click();
            if (chooseCount > 1) {
              cy.get("button#qtyPlusBundle").eq(2).click();
              cy.get("button#itemBundle").eq(10).click();
              cy.get("div#IconCheckPassed").eq(2).should("exist");
            }
          });
        cy.get("#actionButtonAdd").click();
      });
    // End Testing all item type

    cy.get("#renderCartSummary").should("be.visible").click();
    cy.get("#orderingModeDineIN").should("exist");
    cy.get("#orderingModeTakeAway").should("exist");

    cy.get("#buttonFooterCart")
      .scrollIntoView()
      .should("have.attr", "disabled");

    cy.intercept(
      "GET",
      "https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/outlets/Edge%20Cafe/paymentmodes?",
    ).as("paymentmodes");

    cy.get("button#paymentMethod")
      .eq(7)
      .click()
      .then(() => {
        cy.intercept(
          "GET",
          "https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/outlets/Edge%20Cafe/paymentmodes?",
        ).as("paymentmodes");
        cy.wait("@paymentmodes").then((interception) => {
          expect(interception.response.statusCode).to.equal(200);
          const { data } = interception.response.body;
          cy.get("div#paymentModeName").eq(0).contains(data[0].displayName);
        });
      });

    cy.get("#buttonFooterCart").should("not.have.attr", "disabled");
    cy.get("#buttonFooterCart")
      .should("be.visible")
      .should("be.enabled")
      .click();

    cy.get("#SkeletonPaymentInput").should("exist");
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

        cy.get("#detailOrderStatus").should("be.visible").click();
        cy.get("#backButtonCart").click();
        cy.get("#backButtonCart").click();
        cy.get("#notificationOrder").should("exist");
      });
  });
});