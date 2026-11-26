const { test, expect } = require('@playwright/test');
const { safeGoto } = require('../utils/testHelpers');

test.describe('Navigation tests', () => {
  test('selected public navigation links are visible and lead to valid GFG destinations', async ({ page }) => {
    await safeGoto(page, '/');

    const navigationLink = page
      .locator('a[href]')
      .filter({ hasText: /Courses|Practice|Interview|Jobs|Contests/i })
      .first();

    await expect(navigationLink).toBeVisible({ timeout: 20000 });

    const href = await navigationLink.getAttribute('href');
    expect(href).toBeTruthy();

    if (href && href.startsWith('http')) {
      expect(href).toMatch(/geeksforgeeks\.org/i);
    }

    await navigationLink.click();
    await page.waitForLoadState('domcontentloaded');

    await expect(page).toHaveURL(/geeksforgeeks\.org/);
  });

  test('public learning pages can be reached from the homepage', async ({ page }) => {
    await safeGoto(page, '/java/');

    await expect(page.locator('body')).toBeVisible();
    expect(page.url()).toContain('geeksforgeeks.org/java');
  });

});
