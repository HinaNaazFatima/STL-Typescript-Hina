import { test, expect } from '@playwright/test';
import {navigateToSauceLabs} from '../utils/navigate.spec';

test('Login page loads correctly', async ({ page }) => {
    await navigateToSauceLabs(page);
    // Assert login fields are visible
   await expect(page.locator('#password')).toBeVisible();
    });