import { test, expect } from '@playwright/test';

test("Handle Alerts popup", async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com');

    // //Alert Popuup
    // page.on('dailog', async dailog => {
    //     await except (dailog.type()).toContain('alert') // not neccessary
    //     await dailog.accept();
    // })

    // await page.locator('//input[@name="alert"]').click();
    // await page.waitForTimeout(2000)

    // //Handling Confirmation popup
    // page.on('dialog', async dialog => {
    //     // await expect(dialog.type()).toContain('confirm') //
    //     // await dialog.accept();
    //     await dialog.dismiss();
    // })
    // await page.locator('//input[@name="confirmation"]').click();
    // await page.waitForTimeout(2000)

//Handling Prompt popup
    page.on('dialog', async dialog => {
        // await expect(dialog.type()).toContain('prompt') //
        //await page.waitForTimeout(5000)
        await dialog.accept('Mamta');
        //await dialog.dismiss();
    })
    await page.locator('//button[text() = "Prompt"]').click();
    await page.waitForTimeout(2000)



})
