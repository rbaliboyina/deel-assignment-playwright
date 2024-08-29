const { test, expect } = require("@playwright/test");
const { Utility } = require("../utils/Utility");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.utility = new Utility(this.page);
    this.role = page.locator('input[name="role"]');
    this.country = page.locator('input[name="country"]');
    this.search = page.locator('button[type="submit"]');
    this.salaryTable = page.locator('div[data-qa="salary-table"]');
    this.roleCountryForm = page.locator("form h2.MuiTypography-root");
    this.titleOfSalaryTable = page.locator('div[data-qa="salary-table"] > h2', {
      state: "visible",
    });
    this.formTitle = page.locator("form[action='#'] h2.MuiTypography-h2");
  }

  // Method to return the text content of the welcome message
  async getWelcomeMessageText() {
    return await this.formTitle.textContent();
  }

  async login(roleName, countryName) {
    await this.utility.typeTextWithDelay(this.role, roleName, 200);
    await this.utility.arrowDown(this.role);
    await this.utility.enter(this.role);
    await this.utility.typeTextWithDelay(this.country, countryName, 200);
    await this.utility.arrowDown(this.country);
    await this.utility.enter(this.country);
    await this.search.click();
    await this.page.waitForTimeout(3000);
  }

  async clickSearch() {
    await this.page.click(this.search);
  }

  async getSalaryTable() {
    await this.titleOfSalaryTable.scrollIntoViewIfNeeded();
    return await this.titleOfSalaryTable;
  }
}
module.exports = LoginPage;
