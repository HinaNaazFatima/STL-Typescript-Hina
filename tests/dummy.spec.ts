import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.thegoodguys.com.au/');
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('textbox', { name: 'Username*' }).click();
  await page.getByRole('textbox', { name: 'Username*' }).fill('abcd');
  await page.getByRole('textbox', { name: 'Password*' }).click();

});