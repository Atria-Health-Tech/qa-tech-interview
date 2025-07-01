const { test, expect } = require('@playwright/test');

test("should visit the site", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});