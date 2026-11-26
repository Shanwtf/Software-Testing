const { test, expect } = require('@playwright/test');
const { baseUrl } = require('../test-data/testData');
const { typeText } = require('../utils/testHelpers');

test.describe('Search behavior', () => {
  test('searching for Java from the homepage shows search results', async ({ page }, testInfo) => {
    await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });

    await page.getByRole('img', { name: /search icon/i }).click();
    const searchInput = page.getByRole('textbox', { name: /search/i });
    await expect(searchInput).toBeVisible();
    await typeText(searchInput, 'Java', testInfo);
    await expect(searchInput).toHaveValue('Java');
    await searchInput.press('Enter');

    await expect(page).toHaveURL(/\/search\/\?.*gq=Java/i);
    await expect(page.getByRole('link', { name: /Java Tutorial.*GeeksforGeeks/i })).toBeVisible();
  });

  test('an unusual query route is handled without throwing an unexpected page error', async ({ page }) => {
    const response = await page.goto(`${baseUrl}/search/%40%23%24%20java/`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });

    expect(response).not.toBeNull();
    expect([200, 301, 302, 404]).toContain(response.status());
    await expect(page.locator('body')).toBeVisible();
  });

});
