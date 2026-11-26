const { test, expect } = require('@playwright/test');
const { safeGoto } = require('../utils/testHelpers');

test.describe('Content validation', () => {
  test('public Java tutorial page loads and shows meaningful content', async ({ page }) => {
    const response = await safeGoto(page, '/java/');

    expect(response).not.toBeNull();
    expect(response.status()).toBeLessThan(400);
    await expect(page.locator('body')).toBeVisible();
    await expect(page.locator('h1, h2').filter({ hasText: /Java Tutorial|Java/i }).first()).toBeVisible({
      timeout: 20000,
    });
  });

  test('navigation between homepage and tutorial page works', async ({ page }) => {
    await safeGoto(page, '/java/');
    await expect(page).toHaveURL(/geeksforgeeks\.org\/java/);

    await page.goto('/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await expect(page).toHaveURL(/geeksforgeeks\.org\/?$/);
  });

});
