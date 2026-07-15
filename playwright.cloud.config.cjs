const { defineConfig } = require('@playwright/test');
const { wsEndpoint } = require('./playwright-single');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-cloud-report' }]
  ],
  use: {
    browserName: 'chromium',
    headless: true,
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    video: 'on-first-retry',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    connectOptions: {
      wsEndpoint,
      timeout: 60000
    }
  },
  projects: [
    {
      name: 'testmuai-chrome'
    }
  ]
});