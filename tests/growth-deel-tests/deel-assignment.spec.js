// tests/example.spec.js
const { test, expect } = require("@playwright/test");
const LoginPage = require("../../pages/LoginPage");
const fs = require("fs");

test("deel-assignment", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto("/dev/salary-insights");
  const welcomeMessage = await loginPage.getWelcomeMessageText();
  expect(welcomeMessage).toContain("Salary Insights Tool");

  const credentials = JSON.parse(
    fs.readFileSync("data/credentials.json", "utf-8")
  );
  for (const { rolename, countryname } of credentials) {
    await loginPage.login(rolename, countryname);
    const salaryTable = await loginPage.getSalaryTable();
    expect(salaryTable).toBeVisible();
  }
});
