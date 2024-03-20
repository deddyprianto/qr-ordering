import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 375,
  viewportHeight: 667,

  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
