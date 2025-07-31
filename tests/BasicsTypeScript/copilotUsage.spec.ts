import { test, expect } from '@playwright/test';

test('navigate to The Good Guys login page', async ({ page }) => {
    // Open The Good Guys website
    await page.goto('https://www.thegoodguys.com.au/');

    // Click on the "Sign In" button
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByTestId('login-input').click();
   
  
       await page.getByTestId('dialog-title').click({
      button: 'right'
    });
    
    await page.getByTestId('dialog-title').click();
    await expect(page).toHaveURL('https://www.thegoodguys.com.au/');
    
    // Optionally, you can fill in the login form if needed
    // await page.fill('input[name="email"]', 'your-email@example.com');
    // await page.fill('input[name="password"]', 'your-password');
    
});