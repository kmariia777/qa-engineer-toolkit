import { test, expect } from '@playwright/test';

test('mock API response to test empty state', async ({ page }) => {
  await page.route('**/api/orders', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: '[]',
    });
  });

  await page.goto('https://example.com/orders');
  await expect(page.getByText(/no orders/i)).toBeVisible();
});

test('simulate server error to test error handling', async ({ page }) => {
  await page.route('**/api/orders', async (route) => {
    await route.fulfill({ status: 500, body: 'Server error' });
  });

  await page.goto('https://example.com/orders');
  await expect(page.getByText(/something went wrong/i)).toBeVisible();
});
