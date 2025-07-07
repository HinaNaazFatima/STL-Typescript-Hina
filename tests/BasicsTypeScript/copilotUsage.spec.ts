import { test, expect } from '@playwright/test';

test('navigate to The Good Guys login page', async ({ page }) => {
    // Open The Good Guys website
    await page.goto('https://www.thegoodguys.com.au/');

    // Click on the "Sign In" or "Login" button/link
    // The selector may change, so update if needed
    await page.waitForSelector('a[data-testid="header-sign-in-link"]', { state: 'visible' });
    await page.click('a[data-testid="header-sign-in-link"]');

    // Wait for the login form to appear
    await expect(page.locator('form')).toContainText(['Email', 'Password']);
    await expect(page).toHaveURL(/login/);
    // Optionally, you can fill in the login form if needed
    // await page.fill('input[name="email"]', 'your-email@example.com');
    // await page.fill('input[name="password"]', 'your-password');
    
});