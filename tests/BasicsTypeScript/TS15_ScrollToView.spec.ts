import { test, expect } from '@playwright/test';

test('Scroll to last product on SauceDemo', async ({ page }) => {
  // Login first
  await page.goto('https://www.saucedemo.com');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Wait for inventory to load
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Locate the last product (e.g., "Test.allTheThings() T-Shirt (Red)")
  const lastProduct = page.locator('.inventory_item').last();

  // Scroll into view [ not need in playwright, but for demonstration ]
  await lastProduct.scrollIntoViewIfNeeded();

  // Highlight the product [this is just for visual confirmation in the test]
  await lastProduct.evaluate(el => el.style.border = '2px solid red');
  console.log('Scrolled to last product:', await lastProduct.textContent());

  // Check if visible
  await expect(lastProduct).toBeVisible();
});
