import {test, expect, chromium} from '@playwright/test'

test('Handle multiple tabs', async () => {
    
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    //const page1 = await context.newPage();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator('//input[@placeholder="Username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');

    //here we navigating one page to another
    const pagePromise = context.waitForEvent('page');
    await page.locator('//a[text()= "OrangeHRM, Inc"]').click();

    const newPage = await pagePromise;
    await newPage.waitForTimeout(5000);
    console.log(await newPage.locator('//a[text()="Solutions"]').textContent());

    
})