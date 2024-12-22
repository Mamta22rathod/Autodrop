const { test, expect } = require('@playwright/test');
//import {test, expect} from '@playwright/test';

test ('Verify Swag lab login credential', async({page})=>{
    //enter the application URL 
    await page.goto('https://www.saucedemo.com/');

    //enter username in username text field
    await page.locator('//input[@id="user-name"]').clear();
    await page.locator('//input[@id="user-name"]').click();
    await page.locator('//input[@id="user-name"]').fill('standard_user');

        //enter password in password text field
    await page.locator('//input[@type="password"]').clear();
    await page.locator('//input[@type="password"]').click();
    await page.locator('//input[@type="password"]').fill('secret_sauce');

    //click on login button
    await page.locator('//input[@name="login-button"]').click();
    
    //Validate Swag lab title in home page
    await expect(page.locator('//div[text()="Swag Labs"]')).toBeVisible();
    console.log(await page.locator('//div[text()="Swag Labs"]').textContent())

    //Title assertion---Approach-1
    let homeTitle = await page.title();
    console.log(homeTitle)
    await expect(homeTitle).toEqual('Swag Labs')

    //Title assertion----Approach-2
    await expect(page).toHaveTitle('Swag Labs')

    //URL assertion---Approach-1
    let homeUrl = await page.url()
    await expect(homeUrl).toEqual('https://www.saucedemo.com/inventory.html');

    //URL assertion---Approach-2
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    //Element validation by using toBeVisible()
    await expect(page.locator('//div[text()="Swag Labs"]')).toBeVisible();
    //Element validation by using toHaveText()
    await expect(page.locator('//div[text()="Swag Labs"]')).toHaveText('Swag Labs')

    //Element validation by using toContaintText()
    await expect(page.locator('//div[text()="Swag Labs"]')).toContainText('Swag');


    //
    await expect(await page.getByText('Sauce Labs Bolt T-Shirt')).toBeVisible()


    //Locate multiple web elements
    let link = await page.$$('//div[@class="inventory_item_label"]//a');

    for (let i = 0; i <= link.length - 1; i++) {
        let title = await link[i].textContent();
        console.log(title);
    }

    await page.locator('(//button[contains(text(), "Add to cart")])[1]').click();

    await page.locator('//a[@data-test="shopping-cart-link"]').click();

    await page.locator('//button[@id="checkout"]').click();

    await page.locator('//input[@id="first-name"]').fill('Mamta');

    await page.locator('//input[@placeholder="Last Name"]').fill('Rathod');

    await page.locator('//input[@name="postalCode"]').fill('560018');

    await page.locator('//input[@id="continue"]').click();

    await page.locator('(//button[contains(text(), "Finish")])').click();

    await page.waitForTimeout(2000);



})
