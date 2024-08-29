// playwright.config.js

const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests/", // Directory where test files are located
  retries: 0, // Number of retries in case of test failure
  timeout: 60000, // Timeout for each test (30 seconds)
  reporter: [["html", { open: "always" }]], // Reports in HTML format
  use: {
    headless: false, // Run in headless mode (set false to view browser)
    // viewport: { width: 1280, height: 720 }, // Default screen size
    actionTimeout: 50000, // Timeout for actions (like clicks, waits)
    ignoreHTTPSErrors: true, // Ignore HTTPS errors for testing
    baseURL: "https://growth.deel.training",
    browserName: "firefox", // Options: 'chromium', 'firefox', 'webkit'
  },
  globals: {
    typingDelay: 50000, // Default typing delay
  },
});
