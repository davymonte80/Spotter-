import { test, expect } from '@playwright/test';

test.describe('Spotter.ai UI', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3001');
  });

  test('should display the Hero section', async ({ page }) => {
    await expect(page.locator('section:has-text("Build intelligent and data-driven products")')).toBeVisible();
  });

  test('should display the Features section', async ({ page }) => {
    await expect(page.locator('section:has-text("The market\'s most intelligent analytics platform")')).toBeVisible();
  });

  test('should display the Stats section', async ({ page }) => {
    await expect(page.locator('section:has-text("Trusted by data-driven teams worldwide")')).toBeVisible();
  });

  test('should display the Testimonials section', async ({ page }) => {
    await expect(page.locator('section:has-text("What our customers say")')).toBeVisible();
  });

  test('should display the CTA section', async ({ page }) => {
    await expect(page.locator('section:has-text("Ready to transform your data strategy?")')).toBeVisible();
  });

  test('should have working Start Free Trial button', async ({ page }) => {
    const button = page.locator('button:has-text("Start Free Trial")');
    await expect(button).toBeVisible();
    await button.click();
    // Add assertions for navigation or modal if applicable
  });

  test('should have working Schedule Demo button', async ({ page }) => {
    const button = page.locator('button:has-text("Schedule Demo")');
    await expect(button).toBeVisible();
    await button.click();
    // Add assertions for navigation or modal if applicable
  });
});
