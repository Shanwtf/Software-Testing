const { test, expect } = require('@playwright/test');
const { safeGoto } = require('../utils/testHelpers');
const { expectedHomeTitle } = require('../test-data/testData');

test.describe('Homepage smoke tests', () => {
  test('homepage loads successfully and exposes core page content', async ({ page }) => {
    const response = await safeGoto(page, '/');

    expect(response).not.toBeNull();
    expect(response.status()).toBeLessThan(400);
    await expect(page.locator('body')).toBeVisible();
    await expect(page).toHaveTitle(expectedHomeTitle);
    expect(page.url()).toContain('geeksforgeeks.org');
  });

  test('homepage exposes key visible navigation items', async ({ page }) => {
    await safeGoto(page, '/');

    const navItems = page
      .locator('a[href], button')
      .filter({ hasText: /Courses|Practice|Interview|Jobs|Contests|Java|Python/i });

    await expect(navItems.first()).toBeVisible({ timeout: 20000 });
  });

});
