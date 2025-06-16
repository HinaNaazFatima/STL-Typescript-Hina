import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load the correct .env file based on ENV
dotenv.config({ path: `.env.${process.env.ENV || 'dev'}` });

console.log(`Environment: ${process.env.ENV || 'dev'}`);
console.log(`BASE_URL: ${process.env.BASE_URL}`);
console.log(`USERNAME: ${process.env.USERNAME1}`);
console.log(`PASSWORD: ${process.env.PASSWORD}`);


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
  workers: 4, // Run tests in a single worker
  // reporter: [['html', { outputFolder: 'reports' }]],
  reporter: [
    ['list'],  // Default CLI output
    ['allure-playwright'],  // Enable Allure reporting
  ],

  timeout: 90000,
  });
