//How to handle Auto suggest/Auto complete dropdown
//===================================================
import{test, expect} from '@playwright/test';

test('Handle Auto suggest dropdown',async({page})=>{
await page.goto('https://www.redbus.in');
 
await page.locator('#src').fill('Delhi');
//await page.waitForSelector("//li[contains(@class,'sciwKbI')]");
await page.waitForTimeout(2000);
const cityOptions=await page.$$("//text[text()='Mayur Vihar']");
for(const option of cityOptions)
 {
  let value=await option.textContent();
  console.log(value);
  if(value.includes('Mayur Vihar'))
   {
     await option.click();
     break;
     
   }
 }
})