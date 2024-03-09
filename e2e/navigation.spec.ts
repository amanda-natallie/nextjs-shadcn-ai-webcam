import { test, expect } from '@playwright/test';

test('should navigate to the about page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Go to About');
  await expect(page).toHaveURL('/about');
  await expect(page.locator('h1')).toContainText('About');
});