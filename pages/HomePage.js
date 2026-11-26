const { expect } = require('@playwright/test');

class HomePage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  }

  async assertPageReady() {
    await expect(this.page.locator('body')).toBeVisible();
    await expect(this.page).toHaveURL(/geeksforgeeks\.org/);
    await expect(this.page).toHaveTitle(/GeeksforGeeks/i);
  }

  async getKeyNavigationItems() {
    return this.page.locator('a[href], button').filter({
      hasText: /Courses|Practice|Interview|Jobs|Contests|Java|Python/i,
    });
  }

  async findSearchInput() {
    return this.page.locator(
      'input[placeholder*="Search" i], input[type="search"], input[aria-label*="Search" i], input[name*="search" i]'
    ).first();
  }
}

module.exports = { HomePage };
