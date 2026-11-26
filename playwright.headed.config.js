const { defineConfig } = require('@playwright/test');

const baseConfig = require('./playwright.config');

module.exports = defineConfig({
  ...baseConfig,
  use: {
    ...baseConfig.use,
    headless: false,
    actionTimeout: 15000,
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },
});
