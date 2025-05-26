import { test, expect } from '@playwright/test';

const testData= [
    { username: 'standard_user', password: 'secret_sauce', expected: 'success' },
    { username: 'locked_out_user', password: 'secret_sauce', expected: 'error' },
    { username: 'problem_user', password: 'secret_sauce', expected: 'success' }
]


// Loop through test data and create dynamic test cases
testData.forEach(({username,password,expected})=>{
    test(`login test for user: ${username}`, async({page})=>{
        await page.goto('https://www.saucedemo.com/');
        
    // Fill login form
    await page.fill('[data-test="username"]',username);
    await page.fill('[data-test="password"]', password);
    await page.click('[data-test="login-button"]');

    // Validation
    if(expected === 'success'){
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
    else {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }
  

    })
})
