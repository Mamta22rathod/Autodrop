import {test, expect} from '@playwright/test';

test('Handle dropDown', async ({page}) =>{
         await page.goto('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html');
         await page.waitForTimeout(2000);
         await page.locator('//select[@id="select-demo"]').selectOption({ index: 7 });
         await page.waitForTimeout(2000);
     })



     
// test.skip ('Handle dropDown', async ({page}) =>{
//          await page.goto('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html');
//          await page.waitForTimeout(2000);
//          await page.locator('//select[@id="select-demo"]').selectOption('Wednesday')
//          await page.waitForTimeout(2000);
//      })