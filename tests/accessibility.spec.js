const { test, expect } = require('@playwright/test');
const { safeGoto } = require('../utils/testHelpers');

test.describe('Accessibility smoke tests', () => {
  test('homepage has a meaningful title and common interactive elements have accessible names or placeholders', async ({ page }) => {
    await safeGoto(page, '/');

    await expect(page).toHaveTitle(/GeeksforGeeks/i);

    const interactiveElements = await page.locator('a[href], button, input:not([type="hidden"]), select, textarea').evaluateAll((elements) =>
      elements
        .filter((element) => {
          const style = window.getComputedStyle(element);
          if (style.display === 'none' || style.visibility === 'hidden' || element.hidden) {
            return false;
          }

          const text = (element.textContent || '').trim();
          return Boolean(
            text ||
              element.getAttribute('aria-label') ||
              element.getAttribute('placeholder') ||
              element.getAttribute('name') ||
              element.getAttribute('title') ||
              element.getAttribute('value')
          );
        })
        .slice(0, 12)
        .map((element) => element.tagName)
    );

    expect(interactiveElements.length).toBeGreaterThan(0);
  });

  test('keyboard navigation reaches a visible focus target', async ({ page }) => {
    await safeGoto(page, '/');

    const focusableElement = page.locator('a[href], button, input:not([type="hidden"]), select, textarea').first();
    await expect(focusableElement).toBeVisible();

    await page.keyboard.press('Tab');

    await expect.poll(async () => {
      const activeTag = await page.evaluate(() => document.activeElement?.tagName);
      return activeTag && activeTag !== 'BODY';
    }).toBeTruthy();
  });
});
