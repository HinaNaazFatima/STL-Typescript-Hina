import { test, expect } from '@playwright/test';
import loginData from '../data/loginData.json';

//test data 
test.describe('Sauce Demo Login - DDT using JSON', () => {
  for (const user of loginData) {
    test(`Login with username: ${user.username}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');

      await page.fill('[data-test="username"]', user.username);
      await page.fill('[data-test="password"]', user.password);
      await page.click('[data-test="login-button"]');

      if (user.username === 'locked_out_user') {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      } else {
        await expect(page).toHaveURL(/inventory/);
      }

      // Logout if login is successful
      if (await page.locator('#react-burger-menu-btn').isVisible()) {
        await page.click('#react-burger-menu-btn');
        await page.click('#logout_sidebar_link');
      }
    });
  }
});
