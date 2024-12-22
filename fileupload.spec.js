import { test, expect } from '@playwright/test';

test("File upload", async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/image_upload/');
    await page.locator('//input[@id="photoimg"]').setInputFiles('C:/Users/mamta/OneDrive/Documents');
    await page.locator(2000);

// //Upload multiple files
// await page.locator('//input[@id="photoimg"]').setInputFiles(['C:/Users/mamta/OneDrive/Documents', 'C:/Users/mamta/OneDrive/Documents']);
// await page.waitForTimeout(10000);

//Removing files
// await page.locator('//input[@id="photoimg"]').setInputFiles([]);
// await page.waitForTimeout(10000);

})