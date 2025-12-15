import { test, expect } from "@playwright/test";

test.describe("Contact Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("page loads correctly", async ({ page }) => {
    await expect(page).toHaveTitle(/Contact/);
    await expect(page.locator("h1")).toBeVisible();
  });

  test("contact information is visible", async ({ page }) => {
    // Check that some contact-related content is visible
    const mainContent = page.locator("main");
    await expect(mainContent).toBeVisible();
  });

  test("page has proper SEO metadata", async ({ page }) => {
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute("content", /.+/);
  });

  test("page is accessible", async ({ page }) => {
    // Check for proper heading structure
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();

    // Check for skip link or main content landmark
    const main = page.locator("main");
    await expect(main).toBeVisible();
  });
});

test.describe("Contact Page - Mobile", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("contact page is responsive", async ({ page }) => {
    await page.goto("/contact");

    // Check that main content is visible on mobile
    const mainContent = page.locator("main");
    await expect(mainContent).toBeVisible();

    // Check that h1 is visible
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
  });
});
