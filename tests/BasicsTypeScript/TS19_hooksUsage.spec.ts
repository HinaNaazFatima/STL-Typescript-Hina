import { test, expect } from '@playwright/test';
// all below hooks are specific to this test only they are not global hooks

// Runs once before all tests
test.beforeAll(async () => {
 
  console.log('Before all tests');
});

// Runs once after all tests
test.afterAll(async () => {
  console.log('After all tests');
});

// Runs before each test
test.beforeEach(async ({ page }) => {
  console.log('Navigating to Wikipedia homepage...');
   await page.pause();
  await page.goto('https://www.wikipedia.org/');
});

// Runs after each test
test.afterEach(async () => {
  console.log('Test completed');
});

// Test 1: Verify page title
test('Wikipedia homepage should have the correct title', async ({ page }) => {
  await expect(page).toHaveTitle("Wikipedia");
});

// Test 2: Verify search input is visible
test('Search input should be visible on the homepage', async ({ page }) => {
  const searchInput = page.locator('input[name="search"]');
  await expect(searchInput).toBeVisible();
});

// Test 3: Verify language selector exists
test('Language selector should contain English', async ({ page }) => {
  const englishLink = page.locator('a[id="js-link-box-en"]');
  await expect(englishLink).toContainText('English');
});
