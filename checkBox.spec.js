import { test, expect } from '@playwright/test';

test("Handle check box", async ({ page }) => {
    await page.goto('https://demo.seleniumeasy.com/basic-checkbox-demo.html');
    await page.waitForTimeout(2000);
    await page.locator('//input[@id="isAgeSelected"]').check();
    //await page.locator('//input[@id="isAgeSelected"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//input[@id="isAgeSelected"]').uncheck();
    //await page.locator('//input[@id="isAgeSelected"]').click();
    await page.waitForTimeout(2000);

    // multiple locators in web elements
    let check = await page.$$('//input[@class="cb1-element"]');
    for (let i = 0; i <= check.length - 1; i++) {
        await check[i].check();
        await page.waitForTimeout(2000);
    }


})