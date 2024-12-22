import { test, expect } from '@playwright/test';

test("Handle drag and drop action", async ({ page }) => {
    await page.goto('https://demo.guru99.com/test/drag_drop.html');

     let source = await page.locator('(//a[@class="button button-orange"])[2]');
     let destination = await page.locator('(//li[@class="placeholder"])[2]');

     await source.dragTo(destination);
     await page.waitForTimeout(5000);

// let source = await page.locator('(//a[@class="button button-orange"])[2]');
// await page.waitForSelector("//h3[contains (text(), 'Amount')]");
// let amount = await page.$$("//h3[contains (text(), 'Amount')]");
// console.log(amount.length);
// for (let i = 0; i<= amount.length-1; i++) {
//   await source.dragTo(amount[i]);
//   await page.waitForTimeout(5000);
// }
})