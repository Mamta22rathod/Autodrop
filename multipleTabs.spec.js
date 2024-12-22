import { test, expect, chromium } from '@playwright/test';

test("Handle multiple tabs", async () => {

    //Create our own pages
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    //const page1 = await context.newPage();
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
//Here we navigating one page to another page
    const pagePromise = context.waitForEvent('page');
    await page.locator('//a[text()="OrangeHRM, Inc"]').click();

    const newpage = await pagePromise;
    await newpage.waitForTimeout(5000);
    //await newpage.locator('//button[text()="Book a Free Demo"]').click();
    console.log(await newpage.locator('//a[text()="Solutions"]').textContent())

})