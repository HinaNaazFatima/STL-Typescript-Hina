import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 await page.goto('https://www.google.com/');
 await page.getByRole('button', { name: 'Google Search' }).click();
 await page.getByRole('button', { name: 'I\'m Feeling Lucky' }).click();
 await page.locator('.hero-tag-carousel__collage').first().click();
 await page.locator('.hero-tag-carousel__collage').first().click();
 await page.locator('#glue-drawer-2465973').getByRole('link', { name: 'About' }).click();
 await page.locator('#glue-drawer-2465973').getByRole('link', { name: 'Creating a Doodle' }).click();
});