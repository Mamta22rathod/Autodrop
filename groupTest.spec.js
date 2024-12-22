import { test, expect } from '@playwright/test';

test.describe('Group-1', () => {

    test("Handle frames", async ({ page }) => {
        await page.goto('https://chercher.tech/practice/frames');
        await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
        await page.waitForTimeout(2000);
        console.log("Test")

    })
test("Handle frames1", async ({ page }) => {
        await page.goto('https://chercher.tech/practice/frames');
        await page.frameLocator('//iframe[@id="frame2"]').locator('//select[@class="col-lg-3"]').selectOption('Baby Cat');
        await page.waitForTimeout(2000);
        console.log("Test2")
    })
})
test.describe.only('Group-2', () => {

    test("Handle frames1", async ({ page }) => {
        await page.goto('https://chercher.tech/practice/frames');
        await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
        await page.waitForTimeout(2000);
        console.log("Test")
    })

    test("Handle frames12", async ({ page }) => {
        await page.goto('https://chercher.tech/practice/frames');
        await page.frameLocator('//iframe[@id="frame2"]').locator('//select[@class="col-lg-3"]').selectOption('Baby Cat');
        await page.waitForTimeout(2000);
        console.log("Test2")
    })

})