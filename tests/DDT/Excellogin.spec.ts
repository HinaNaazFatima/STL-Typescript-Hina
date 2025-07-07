import { test, expect } from '@playwright/test';
import { readLoginDataFromExcel } from '../../utils/readExcel';

const testData = readLoginDataFromExcel('tests/data/test-data.xlsx');

test.describe('DDT Login Tests - SauceDemo', () => {
  for (const data of testData) {
    test(`Login test for user: ${data.username}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');
      await page.fill('#user-name', data.username);
      await page.fill('#password', data.password);
      await page.click('#login-button');

      if (data.username === 'standard_user') {
        await expect(page).toHaveURL(/inventory/);
      } else {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }
    });
  }
});
