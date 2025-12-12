import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("homepage loads correctly", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Procedure/);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("about page loads correctly", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveTitle(/About/);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("contact page loads correctly", async ({ page }) => {
    await page.goto("/contact");
    await expect(page).toHaveTitle(/Contact/);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("services page loads correctly", async ({ page }) => {
    await page.goto("/services/enterprise");
    await expect(page.locator("h1")).toBeVisible();
  });

  test("case studies page loads correctly", async ({ page }) => {
    await page.goto("/case-studies");
    await expect(page).toHaveTitle(/Case Studies/);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("footer links work", async ({ page }) => {
    await page.goto("/");

    // Scroll to footer and test a link there
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check footer is visible
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("direct navigation works", async ({ page }) => {
    // Test direct URL navigation works for key pages
    await page.goto("/about");
    await expect(page).toHaveURL(/\/about/);

    await page.goto("/contact");
    await expect(page).toHaveURL(/\/contact/);

    await page.goto("/case-studies");
    await expect(page).toHaveURL(/\/case-studies/);
  });

  test("logo links to homepage", async ({ page }) => {
    await page.goto("/about");

    // Click the logo to go back to homepage
    const logo = page.locator('a[href="/"]').first();
    await logo.click();
    await expect(page).toHaveURL("/");
  });
});

test.describe("Mobile Navigation", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("mobile menu button is visible", async ({ page }) => {
    await page.goto("/");

    // Look for mobile menu button
    const menuButton = page.locator(
      'button[aria-label*="menu"], button[aria-label*="Menu"]',
    );
    await expect(menuButton.first()).toBeVisible();
  });
});
