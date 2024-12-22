import { test, expect } from '@playwright/test';

test("Handle double click", async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.locator("//button[text()='Double-Click Me To See Alert']").dblclick()
    await page.waitForTimeout(2000);

})