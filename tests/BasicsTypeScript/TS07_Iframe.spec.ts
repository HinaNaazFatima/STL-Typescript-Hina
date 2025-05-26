import { test, expect, chromium } from '@playwright/test';

test('has title', async ({ page }) => {
await page.goto('https://stl-automationtesting.blogspot.com/p/iframetesting.html');
const frame =await page.frameLocator('//*[@id="post-body-5397669245567307389"]/iframe');
//enter username
//await frame.locator("//*[@name='uname']").fill("test");
await frame.getByRole('textbox', { name: 'username' }).fill('testuser');
//enter password
await frame.getByRole('textbox', { name: 'password' }).fill('testpassword');
//click login
await frame.getByRole('button', { name: 'Login' }).click();     
});