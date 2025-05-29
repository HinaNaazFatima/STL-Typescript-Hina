

//navigate to sauce lab website
import { test, expect } from '@playwright/test';    


test('Dropdown Select Test', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.fill("[data-test='username']", 'standard_user');
    await page.fill("[data-test='password']", 'secret_sauce');
    await page.click("[data-test='login-button']");

    // Navigate to the Sauce Labs inventory page
    //await page.goto('https://www.saucedemo.com/inventory.html');

    // Select the dropdown element
    const dropdown = page.locator('.product_sort_container');

    // Verify the dropdown is visible
    await expect(dropdown).toBeVisible();

    // Select the option "Name (A to Z)"
    await dropdown.selectOption({ label: 'Name (A to Z)' });

    // Verify the selected option
    const selectedOption = await dropdown.inputValue();
    expect(selectedOption).toBe('az');

    // Select the option "Name (Z to A)"
    await dropdown.selectOption({ label: 'Name (Z to A)' });

    // Verify the selected option
    const selectedOption2 = await dropdown.inputValue();
    expect(selectedOption2).toBe('za');
});
