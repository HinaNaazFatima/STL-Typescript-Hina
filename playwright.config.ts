import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
 
  use: {
    baseURL: 'https://www.saucedemo.com/',
    browserName: 'chromium', // Change to firefox or webkit if needed
    headless: false, // Run tests with UI
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on',
    viewport: { width: 1280, height: 720 } 
  },
  reporter: [['html', { outputFolder: 'reports' }]],
  timeout: 90000,
  });
