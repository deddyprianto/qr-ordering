import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 375,
  viewportHeight: 667,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
