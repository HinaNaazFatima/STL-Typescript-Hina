import { Page } from '@playwright/test';

export async function navigateToSauceLabs(page:Page): Promise<void> {
     await page.goto('https://www.saucedemo.com/');
     await page.waitForSelector('#user-name'); // wait for login field as confirmation
}