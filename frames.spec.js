import { test, expect } from '@playwright/test';

test("Handle Frames", async ({ page }) => {
    await page.goto('https://chercher.tech/practice/frames');
    
    await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').fill('Mamta');
    await page.waitForTimeout(2000);

})