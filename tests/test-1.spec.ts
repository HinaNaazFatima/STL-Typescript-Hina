import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.thegoodguys.com.au/');
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('button', { name: 'CREATE ACCOUNT' }).click();
  await page.getByRole('button', { name: 'CREATE ACCOUNT' }).click();
});