import { test, expect } from '@playwright/test';

// test.beforeAll("Before All test", async ({ page }) => {
//     console.log("Before All Test");
//     await page.goto('https://chercher.tech/practice/frames');

// })

// test.afterAll("After All test", async ({ page }) => {
//     console.log("After All Test");
//     await page.close()
// })
test.beforeEach("Before test", async ({ page }) => {
    console.log("Before Test");
    await page.goto('https://chercher.tech/practice/frames');

})

test.afterEach("After test", async ({ page }) => {
    console.log("After Test");
    await page.close()
})

test("Handle frames", async ({ page }) => {
    await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
    await page.waitForTimeout(2000);
    console.log("Test")

})

test("Handle frames1", async ({ page }) => {

    await page.frameLocator('//iframe[@id="frame2"]').locator('//select[@class="col-lg-3"]').selectOption('Baby Cat');
    await page.waitForTimeout(2000);
    console.log("Test2")
})