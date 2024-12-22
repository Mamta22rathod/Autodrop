import { test, expect } from '@playwright/test';

test("Page screenshot", async ({ page }) => {
    await page.goto('https://chercher.tech/practice/frames');

    await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'Homepage.png' })

})
test("Full Page screenshot", async ({ page }) => {
    await page.goto('https://chercher.tech/practice/frames');

    await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'FullPage.png', fullPage: false })

})
test("Element screenshot", async ({ page }) => {
    await page.goto('https://chercher.tech/practice/frames');

    await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').screenshot({ path: 'tests/screenshot/' + Date.now() + 'element.png' });
    await page.waitForTimeout(2000);
    //await name.screenshot({ path: 'tests/screenshot/' + Date.now() + 'FullPage.png', fullPage: true })

})