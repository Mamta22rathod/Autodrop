import { test, expect } from '@playwright/test';

test("Handle right click", async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.locator("//span[text()='right click me']").click({ button: 'right' })
    await page.waitForTimeout(2000);

})