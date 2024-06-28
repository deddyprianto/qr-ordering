/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("TESTING CART PAGE", () => {
  it("Should pass testing for every component in cart page scope", () => {
    cy.visit(
      `http://localhost:4173/?input=${Cypress.env(
        "QS_TABLE_NO_AND_OUTLET_NAME",
      )}`,
    );

    cy.intercept(
      "GET",
      "https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/outlets/Edge%20Cafe/settings?",
    ).as("orderingType");

    cy.intercept(
      "GET",
      "https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/outlets/Edge%20Cafe?",
    ).as("outletName");
    cy.intercept(
      "GET",
      "https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/Products/Edge%20Cafe/ALL?search=100&skip=0&take=10&sortBy=buttonTitle&isDescending=false",
    ).as("searchAPI");

    cy.wait("@orderingType").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      const data = interception.response.body;
      let outletSetting = {
        dine_in_option: {},
        cash_carry_option: {},
      };
      for (const setting of data.data) {
        switch (setting.settingKey) {
          case "QR_DINEIN_Enable":
            outletSetting["dine_in_option"]["enable"] =
              setting.settingValue.toLowerCase() == "true";
            break;
          case "QR_DINEIN_DisplayAs":
            outletSetting["dine_in_option"]["displayName"] =
              setting.settingValue;
            break;
          case "QR_CASH_CARRY_Enable":
            outletSetting["cash_carry_option"]["enable"] =
              setting.settingValue.toLowerCase() == "true";
            break;
          case "QR_CASH_CARRY_DisplayAs":
            outletSetting["cash_carry_option"]["displayName"] =
              setting.settingValue;
            break;
          default:
            break;
        }
      }
      const isOrderTypeDisable =
        !outletSetting?.dine_in_option?.enable &&
        !outletSetting?.cash_carry_option?.enable;
      if (isOrderTypeDisable) {
        cy.get("div#orderTypeDisable").should("exist");
      }
    });
    cy.wait("@outletName").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      const data = interception.response.body;
      const isPOSOnline = data.data.posTerminals.find(
        (item) => item.outletName === data.data.outletName,
      );
      if (!isPOSOnline?.isOnline) {
        cy.get("h1#messagePOS")
          .should("exist")
          .and("have.text", `POS terminal on Edge%20Cafe is Offline`);
      } else {
        cy.get("h1#messagePOS").should("not.exist");
      }
    });
    cy.get("button#dinein").should("be.visible").should("be.enabled").click();
    cy.get("#buttonSearch").click();
    cy.get("#input-search")
      .type("100")
      .type("{enter}")
      .then(() => {
        cy.wait("@searchAPI").then((interception) => {
          expect(interception.response.statusCode).to.equal(200);
          const { data } = interception.response.body;
          if (data.length > 0) {
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

            cy.get("button#button-increaseQuantity")
              .should("be.visible")
              .click();
            cy.get("button#button-decreaseQuantity")
              .should("be.visible")
              .click();
          }
        });
      });
    cy.get("#btn-back-search").click();
    cy.get("button#navbarItem")
      .first()
      .click()
      .then(($element) => {
        const dataType = $element.attr("data-type");
        const dataRefno = $element.attr("data-refno");
        cy.intercept(
          "GET",
          `https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/products/Edge%20Cafe/${dataType}/${dataRefno}?skip=0&take=5`,
        ).as("getSubGroups");
        cy.wait("@getSubGroups").then((interception) => {
          expect(interception.response.statusCode).to.equal(200);
          const { data } = interception.response.body;
          data.forEach((item) => {
            if (item.viewType) {
              cy.get("div#buttonTitleNavbar").contains(item.buttonTitle);
            }
          });
          data.forEach((item) => {
            if (item.productInfo.bundles.length > 0) {
              cy.get(`[data-id=${item.productInfo.itemNo}]`).first().click();
              cy.get("button#actionButtonAdd")
                .should("be.visible")
                .should("be.enabled")
                .click();
              item.productInfo.bundles.forEach((item) => {
                cy.get("button#itemBundle").eq(0).click();
                if (item.max > 1) {
                  cy.get("button#qtyPlusBundle")
                    .eq(0)
                    .click()
                    .wait(100)
                    .click();
                } else {
                  cy.get("button#qtyPlusBundle").eq(0).click();
                }
                cy.get("div#IconCheckPassed").should("exist");
                cy.get("button#bundleItemGroups").click({ multiple: true });
              });
              cy.get("button#actionButtonAdd").should("be.enabled").click();
            }
          });
        });
      });

    cy.get("button#navbarItem")
      .eq(1)
      .click()
      .then(($element) => {
        const dataType = $element.attr("data-type");
        const dataRefno = $element.attr("data-refno");
        cy.intercept(
          "GET",
          `https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/products/Edge%20Cafe/${dataType}/${dataRefno}?skip=0&take=5`,
        ).as("getSubGroups");
        cy.wait("@getSubGroups").then((interception) => {
          expect(interception.response.statusCode).to.equal(200);
          const { data } = interception.response.body;
          data.forEach((item) => {
            if (item.viewType) {
              cy.get("div#buttonTitleNavbar").contains(item.buttonTitle);
            }
          });
          data.forEach((item) => {
            if (item.productInfo.attributes.length > 0) {
              cy.get(`[data-id=${item.productInfo.itemNo}]`).first().click();
              cy.get("#renderModalItemDetail").should("exist");
              cy.get("#actionButtonAdd").should("be.enabled").click();
              cy.get("button#attributeItem").first().click();
              cy.get("#actionButtonAdd").should("be.visible").click();
            }
          });
        });
      });

    cy.get("button#navbarItem")
      .eq(2)
      .click()
      .then(($element) => {
        const dataType = $element.attr("data-type");
        const dataRefno = $element.attr("data-refno");
        cy.intercept(
          "GET",
          `https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/products/Edge%20Cafe/${dataType}/${dataRefno}?skip=0&take=5`,
        ).as("getSubGroups");
        cy.wait("@getSubGroups").then((interception) => {
          expect(interception.response.statusCode).to.equal(200);
          const { data } = interception.response.body;
          data.forEach((item) => {
            if (item.viewType) {
              cy.get("div#buttonTitleNavbar").contains(item.buttonTitle);
            }
          });
          data.forEach((item) => {
            if (
              item.productInfo.attributes.length === 0 &&
              item.productInfo.bundles.length === 0
            ) {
              cy.get(`[data-id=${item.productInfo.itemNo}]`).first().click();
            }
          });
        });
      });

    cy.get("#renderCartSummary").should("be.visible").click();
    cy.intercept(
      "POST",
      "https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/carts/*/switchordertype",
    ).as("switchordertype");

    cy.intercept(
      "GET",
      "https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/outlets/Edge%20Cafe/paymentmodes?",
    ).as("paymentmodes");

    cy.get("#buttonFooterCart").should("have.attr", "disabled");

    cy.wait("@orderingType").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      const { data } = interception.response.body;
      let outletSetting = {
        dine_in_option: {},
        cash_carry_option: {},
      };
      for (const setting of data) {
        switch (setting.settingKey) {
          case "QR_DINEIN_Enable":
            outletSetting["dine_in_option"]["enable"] =
              setting.settingValue.toLowerCase() == "true";
            break;
          case "QR_DINEIN_DisplayAs":
            outletSetting["dine_in_option"]["displayName"] =
              setting.settingValue;
            break;
          case "QR_CASH_CARRY_Enable":
            outletSetting["cash_carry_option"]["enable"] =
              setting.settingValue.toLowerCase() == "true";
            break;
          case "QR_CASH_CARRY_DisplayAs":
            outletSetting["cash_carry_option"]["displayName"] =
              setting.settingValue;
            break;
          default:
            break;
        }
      }
      if (outletSetting.cash_carry_option?.enable) {
        cy.get("button#takeAwayButton")
          .click()
          .then(($element) => {
            const cartID = $element.attr("data-cartid");
            cy.intercept(
              "POST",
              `https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/carts/${cartID}/switchordertype`,
              (req) => {
                req.reply({
                  statusCode: 200,
                  body: {
                    orderType: "CASH_CARRY",
                  },
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
              },
            ).as("switchordertype");

            cy.wait("@switchordertype").then((interception) => {
              expect(interception.response.statusCode).to.equal(200);
              const data = interception.response.body;
              cy.get("button#buttonFooterCart")
                .should("exist")
                .and("have.text", `PAY - $ ${data.data.nettAmount}`);
            });
          });
      } else if (outletSetting.dine_in_option?.enable) {
        cy.get("button#dineInButton")
          .click()
          .then(($element) => {
            const cartID = $element.attr("data-cartid");
            cy.intercept(
              "POST",
              `https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/carts/${cartID}/switchordertype`,
              (req) => {
                req.reply({
                  statusCode: 200,
                  body: {
                    orderType: "CASH_CARRY",
                  },
                  headers: {
                    "Content-Type": "application/json",
                  },
                });
              },
            ).as("switchordertype");

            cy.wait("@switchordertype").then((interception) => {
              expect(interception.response.statusCode).to.equal(200);
              const data = interception.response.body;
              cy.get("button#buttonFooterCart")
                .should("exist")
                .and("have.text", `PAY - $ ${data.data.nettAmount}`);
            });
          });
      }
    });

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
        cy.get(`[data-provider=${stripePayment.provider}]`).click();
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
    cy.intercept(
      "GET",
      "https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/orders/*?",
    ).as("getOrders");

    cy.get("button#footerButtonSubmit")
      .should("be.enabled")
      .click()
      .then(($element) => {
        const idCartInfo = $element.attr("data-idcart");
        cy.intercept(
          "GET",
          `https://t1.equipweb.biz/EdgeCafeTraining/ordering/api/orders/${idCartInfo}?`,
        ).as("getOrders");
        cy.wait("@getOrders").then((interception) => {
          expect(interception.response.statusCode).to.equal(200);
          const data = interception.response.body;
          if (data.data.tableNo) {
            cy.get("div#orderTableNo").contains(data.data.tableNo);
          }
          cy.get("div#subtotalSummaryNETT").contains(data.data.nettAmount);
          if (!data.data.subtotalSummary?.LINE_DISC) {
            cy.get("div#discount").should("not.exist");
          } else {
            cy.get("div#discount").should("exist");
          }
          data.data.details.forEach((item) => {
            cy.get("div#itemNameDetailSummary").contains(
              item.productInfo.itemName,
            );
          });
        });
      });
  });
});