import { test, expect } from '@playwright/test';

test('Simple TODO test on SauceLabs', async ({ page }) => {
  // Navigate to the TODO app hosted on SauceLabs
  // use / as the base URL this is set in the playwright.config.ts file
  await page.goto('/');

  
});
