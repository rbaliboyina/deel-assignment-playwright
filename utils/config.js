// utils/config.js

const { defineConfig } = require("@playwright/test");
const config = require("../playwright.config");

module.exports = {
  getTypingDelay: () => config.globals.typingDelay || 100,
};
