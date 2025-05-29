import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
  test('Valid login should succeed', { tag: ['@smoke', '@positive'] }, async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('Invalid login should fail', { tag: ['@smoke', '@negative'] }, async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', 'invalid_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');
    const errorMessage = page.locator('[data-test="error"]'); 
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });
});

//how to run this test with tags
// Use the command line to run tests with specific tags         
// npx playwright test --grep "@smoke"
// npx playwright test --grep "@smoke @negative"
// run muliple tags 
// npx playwright test --grep "@smoke @positive @negative"
// exclude tag
// npx playwright test --grep @smoke --grep-invert @negative

