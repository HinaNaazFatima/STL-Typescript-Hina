//navigate to https://www.thegoodguys.com.au/UserRegistrationForm?myAcctMain=1&new=Y&catalogId=30000&langId=-1&storeId=900


import { test, expect } from '@playwright/test';

test('GGRegPageDropDown Test', async ({ page }) => {
    // Navigate to the Good Guys registration page
    await page.goto('https://www.thegoodguys.com.au/UserRegistrationForm?myAcctMain=1&new=Y&catalogId=30000&langId=-1&storeId=900');

    // Select the dropdown element for title
    const titleDropdown = page.locator('#personal_info_title');

    // Verify the dropdown is visible
    await expect(titleDropdown).toBeVisible();

    // Select the option "Mr"
    await titleDropdown.selectOption({ label: 'Mr' });

    // Verify the selected option
    const selectedTitle = await titleDropdown.inputValue();
    expect(selectedTitle).toBe('Mr');

    // Select the option "Mrs"
    await titleDropdown.selectOption({ label: 'Mrs' });

    // Verify the selected option
    const selectedTitle2 = await titleDropdown.inputValue();
    expect(selectedTitle2).toBe('Mrs');
});