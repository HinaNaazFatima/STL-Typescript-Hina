import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
 
  await page.locator('[data-test="username"]').fill('standard_user');
 
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  const title1=await page.locator('[data-test="title"]').textContent();
   console.log(title1);
  expect(title1).toBe('Products');
 
  
});