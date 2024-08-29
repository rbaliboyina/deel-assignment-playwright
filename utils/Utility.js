const { test, expect } = require("@playwright/test");

class Utility {
  constructor(page) {
    this.page = page;
  }

  async waitForElementIsVisible(element) {
    const isElementVisisble = await element.isVisible();
    expect(isElementVisisble).toBe(true);
  }

  async waitForElement(element) {
    try {
      await this.waitForElement(element, 60000);
    } catch (error) {
      //Ignore the error
    }
  }

  async typeTextWithDelay(element, text, delayTime) {
    try {
      await this.waitForElementIsVisible(element);
      await element.press("Control+A"); // Select all text
      await element.press("Backspace"); // Delete the selected text
      await element.type(text, { delay: delayTime });
    } catch (error) {
      console.log("An error occured ", error);
    }
  }

  async arrowDown(element) {
    try {
      // await this.waitForElementIsVisible(element);
      await element.press("ArrowDown");
    } catch (error) {
      //ignore the error
    }
  }

  async enter(element) {
    try {
      //   await this.waitForElementIsVisible(element);
      await element.press("Enter");
    } catch (error) {
      //ignore the error
    }
  }
}
module.exports = { Utility };
