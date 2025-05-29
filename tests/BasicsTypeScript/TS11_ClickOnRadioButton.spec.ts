//navigate to website https://echoecho.com/htmlforms10.htm and click on the radio button with value "Milk" and verify that it is selected
import { test, expect } from '@playwright/test';        

test.describe('Radio Button Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://echoecho.com/htmlforms10.htm');
    });

    // test('click on radio button with value "Milk"', async ({ page }) => {
    //     const milkRadioButton = page.locator('input[type="radio"][value="Milk"]');
    //     await milkRadioButton.click();
    //     await expect(milkRadioButton).toBeChecked();
    // });

    // this wont work as there are multiple radio buttons with the same name
    // test('click on radio button with name "radio1"', async ({ page }) => {
    //     const radioButton = page.locator('input[type="radio"][name="radio1"]');
    //     await radioButton.click();
    //     await expect(radioButton).toBeChecked();
    // });

    // this is how we handle multiple radio buttons with the same name
    test('click and verify all radio buttons with name radio1', async ({ page }) => {
        const radioButtons = page.locator('input[type="radio"][name="radio1"]');
        const count = await radioButtons.count();
        for (let i = 0; i < count; i++) {
            const radioButton = radioButtons.nth(i);
            await radioButton.click();
            await expect(radioButton).toBeChecked();
           //this is how we break the loop if we want to stop after the first checked radio button
            break
        }

     });
    test.afterEach(async ({}, testInfo) => {
        console.log(`Test "${testInfo.title}" finished`);
    });
 });