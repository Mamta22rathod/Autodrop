import { test, expect } from '@playwright/test';

test("Handle signup", async ({ page }) => {
    await page.goto('https://qavbox.github.io./demo/');
    await page.waitForTimeout(2000)
});