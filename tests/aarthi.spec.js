import { test, expect } from '@playwright/test';
test('Facebook Login', async ({ page }) => {
    await page.goto('https://www.facebook.com/');