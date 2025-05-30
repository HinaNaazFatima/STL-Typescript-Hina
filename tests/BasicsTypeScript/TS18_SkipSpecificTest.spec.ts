import { test, expect } from '@playwright/test';

// when run command "npx playwright test", there are several tests inside tests folder only this test case will skip (not run)
test.skip('Nav to GoodGuys', { tag: ['@smoke', '@positive'] }, async ({ page }) => {
  await page.goto('https://www.thegoodguys.com.au/');
});
//Conditionally skip a test
//as we are using chromium to run this test, this test will run.
test('Nav to GoodGuys login', { tag: ['@smoke', '@positive'] }, async ({ page,browserName}) => {
  test.skip(browserName === 'firefox', 'Still working on it');
  await page.goto('https://www.thegoodguys.com.au/');
});



