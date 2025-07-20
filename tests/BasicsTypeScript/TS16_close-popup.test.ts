import { test, expect } from '@playwright/test';

test('Close cookie banner on W3Schools', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
  await page.pause();

  // Wait for the cookie consent banner to appear
  const consentBanner = page.locator('#accept-choices');

  // Check if it's visible
  if (await consentBanner.isVisible()) {
    // Click the Accept button to close the banner
    await consentBanner.click();
    console.log('Cookie banner closed.');
  }

  // Continue with a normal assertion
  await expect(page).toHaveTitle(/W3Schools/);
});
