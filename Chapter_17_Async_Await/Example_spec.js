import { test, expect } from '@playwright/test';

test('uses await in a Playwright test', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Except a title "to contain" a substring
    await expect(page).toHaveTitle(/Playwright/);

    let value = await getExampleValue();
    expect(value).toBe('abc');
});

async function getExampleValue() {
    return 'abc';
}