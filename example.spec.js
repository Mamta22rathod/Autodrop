import{test, expect} from '@playwright/test';
import { type } from 'os';

test('handling the user deatails', async ({page})=> {
    await page.goto("url");
    await page.locator("xpath path location").clear();
    await page.toHavetext();
    
    await page.locator("").fill(username);
    await page.locator().fill(email-id);
    await page.locator().fill(phonenum);
    await page.waitForTimeout(2000);

    await page.locator().selectOption({index: Female})// gender
    await page.locator().selectOption() // state

    await page.locator('//input[text()="Submit"]').click();

test.only('page dailog',async dailog  => {
    await expect(dailog.type).toContain("Alert");
    await dailog.accept()
    await page.locator().click()
})
})