import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
 
  use: {
    browserName: 'chromium', // Change to firefox or webkit if needed
    headless: false, // Run tests with UI
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'on',

  },
  reporter: [['html', { outputFolder: 'reports' }]],
  timeout: 90000,
  });
