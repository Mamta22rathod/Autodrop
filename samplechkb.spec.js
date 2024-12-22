import { test, except} from '@playwright/test'
import { beforeEach } from 'node:test'

// test ('Handle checkBox', async ({page}) => {
//     await page.goto('https://demo.seleniumeasy.com/basic-checkbox-demo.html');
//     await page.waitForTimeout(2000);
//     await page.locator('//input[@id="isAgeSelected"]').check();
//     await page.waitForTimeout(2000);
//     await page.locator('//input[@id="isAgeSelected"]').uncheck();
//     await page.waitForTimeout(2000);

//     let check = await page.$$('//input[@class="cb1-element"]');
//     for (let i=0; i <= check.length - 1; i++){
//         await check[i].check();
//         await page.waitForTimeout(2000);
//     }
// })
// ---------------------------------------------------------------------------------------

// test ('Handle dropDown', async ({page}) =>{
//     await page.goto('https://demo.seleniumeasy.com/basic-select-dropdown-demo.html');
//     await page.waitForTimeout(2000);
//     await page.locator('//select[@id="select-demo"]').selectOption({ index: 7 });
//     await page.waitForTimeout(2000);
// })
// -----------------------------------------------------------------------------------------
//  test('handle alertpopup', async ({page}) => {
//     await page.goto('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver')

//     page.on('dailog', async dailog =>{
//         await except (dailog.type()).toContain('alert')
//         await dailog.accept();
//     })
   

//     await page.locator('//input[@name="alert"]').click();
//     await page.waitForTimeout(2000);
// })
// ---------------------------------------------------------------------------------------

// handling confirm
// page.on('dailog', async dailog => {
//    // await except (dailog.type()).toContain('confirm')
//     await dailog.accept();
//     await dailog.dismiss();
// })

//     await page.locator('//input[@name="confirmation"]').click();
//     await page.waitForTimeout(2000);

// })
// ------------------------------------------------------------------------------------

//prompt handling

// handling prompt popup
// page.on('dailog', async dailog => {
//     await dailog.accept('KuhooKittu');
// })

// await page.locator('//input[@name="prompt"]').click();
// await page.waitForTimeout(2000);
//  })
// ------------------------------------------------------------------------------------
// test("Handle double click", async ({page}) => {
//     await page.goto('https://demo.guru99.com/test/simple_context_menu.html');
//     await page.locator("//button[text() = 'Double-Click Me To See Alert']").dblclick();
//     await page.waitForTimeout(2000);
// })
//--------------------------------------------------------------------------------------

// test('Handle frames', async ({page})=> {
//     await page.goto('https://chercher.tech/practice/frames');
//     await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Ishika');
//     await page.waitForTimeout(2000);
// })
//------------------------------------------------------------------------------------

// test('Handle right click', async ({page}) => {
//     await page.goto('https://demo.guru99.com/test/simple_context_menu.html');
//     await page.locator("//span[text()='right click me']").click({button : 'right'});
//     await page.waitForTimeout(2000);
// })
//------------------------------------------------------------------------------------

// test('handle mouse hover', async ({page}) => {
//     await page.goto("https://www.amazon.in/s?k=amazon+prime+membership&adgrpid=1320515078795879&hvadid=82532458763367&hvbmt=bb&hvdev=c&hvlocphy=157506&hvnetw=o&hvqmt=b&hvtargid=kwd-82533075230534%3Aloc-90&hydadcr=5653_2377271&msclkid=5d0095f3803c17a0e967f3aa5a03f89a&tag=msndeskstdin-21&ref=pd_sl_6iluw3gs69_b");

//     await page.locator("//span[text()='Fresh']").hover()
//     await page.waitForTimeout(2000);

// })
//--------------------------------------------------------------------------------
// dragDrop
// test('Handle dragDrop', async ({page}) => {
//     await page.goto('https://demo.guru99.com/test/drag_drop.html');
    
//     let source = await page.locator('(//a[@class="button button-orange"])[2]');
//     let destination = await page.locator('(//li[@class="placeholder"])[2]');

//     await source.dragTo(destination);
//     await page.waitForTimeout(2000);
// })
//---------------------------------------------------------------------------------

// test('Handle fileupload', async ({page}) => {
//     await page.goto('https://demo.guru99.com/test/image_upload/');
//     await page.locator('//input[@id="photoimg"]').setInputFiles('C:/Users/mamta/OneDrive/Documents');
//     await page.locator(10000);

// })
// -----------------------------------------------------------------------------------------

// BEFORE AFTER

// test.beforeAll("Before All test", async ({ page }) => {
//     console.log("Before All Test");
//     await page.goto('https://chercher.tech/practice/frames');

// })

// test.afterAll("After All test", async ({ page }) => {
//     console.log("After All Test");
//     await page.close()
// })

// test.beforeEach("Before test", async ({ page }) => {
//     console.log("Before Test");
//     await page.goto('https://chercher.tech/practice/frames');

// })

// test.afterEach("After test", async ({ page }) => {
//     console.log("After Test");
//     await page.close()
// })

// test("Handle frames", async ({ page }) => {
//     await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
//     await page.waitForTimeout(2000);
//     console.log("Test")

// })

// test("Handle frames1", async ({ page }) => {

//     await page.frameLocator('//iframe[@id="frame2"]').locator('//select[@class="col-lg-3"]').selectOption('Baby Cat');
    
//     await page.waitForTimeout(2000);
//     console.log("Test2")
// })
// -----------------------------------------------------------------------------------

// also only method groups
// test.describe.skip('Group-1', () => {

//     test("Handle frames", async ({ page }) => {
//         await page.goto('https://chercher.tech/practice/frames');
//         await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
//         await page.waitForTimeout(2000);
//         console.log("Test")

//     })
// test("Handle frames1", async ({ page }) => {
//         await page.goto('https://chercher.tech/practice/frames');
//         await page.frameLocator('//iframe[@id="frame2"]').locator('//select[@class="col-lg-3"]').selectOption('Baby Cat');
//         await page.waitForTimeout(2000);
//         console.log("Test2")
//     })

// })
// test.describe('Group-2', () => {

//     test("Handle frames1", async ({ page }) => {
//         await page.goto('https://chercher.tech/practice/frames');
//         await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
//         await page.waitForTimeout(2000);
//         console.log("Test")
//     })

//     test("Handle frames12", async ({ page }) => {
//         await page.goto('https://chercher.tech/practice/frames');
//         await page.frameLocator('//iframe[@id="frame2"]').locator('//select[@class="col-lg-3"]').selectOption('Baby Cat');
//         await page.waitForTimeout(2000);
//         console.log("Test2")
//     })

// })
// --------------------------------------------------------------------
// screenshots

// test("Page screenshot", async ({ page }) => {
//     await page.goto('https://chercher.tech/practice/frames');

//     await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
//     await page.waitForTimeout(2000);
//     await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'Homepage.png' })

// })
// test("Full Page screenshot", async ({ page }) => {
//     await page.goto('https://chercher.tech/practice/frames');

//     await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
//     await page.waitForTimeout(2000);
//     await page.screenshot({ path: 'tests/screenshot/' + Date.now() + 'FullPage.png', fullPage: false })

// })
// test("Element screenshot", async ({ page }) => {
//     await page.goto('https://chercher.tech/practice/frames');

//     await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').screenshot({ path: 'tests/screenshot/' + Date.now() + 'element.png' });
//     await page.waitForTimeout(2000);
//     //await name.screenshot({ path: 'tests/screenshot/' + Date.now() + 'FullPage.png', fullPage: false })

// })
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
//   TAGS

// test("@sanity page screenshot", async ({page}) => {
//     await page.goto('https://chercher.tech/practice/frames');
//     await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
//     await page.waitForTimeout(2000);
//     await page.screenshot({ path: 'tests/screenshot' + Date.now() + 'Homepage.png'})
// })
// test('@reg Full page screenshot', async ({page}) => {
//     await page.goto('https://chercher.tech/practice/frames');
//     await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').type('Mamta');
//     await page.waitForTimeout(2000);
//     await page.screenshot({ path: 'tests/screenshot' + Date.now() + 'Fullpage.png', fullPage: true})

// })
// test('@sanity@reg element screenshot', async ({page}) => {
//     await page.goto('https://chercher.tech/practice/frames');
//     await page.frameLocator('//iframe[@id="frame1"]').locator('//input[@type="text"]').screenshot({ path: 'tests/screenshot/' + Date.now() + 'element.png' });
//     await page.waitForTimeout(2000);

// })
//----------------------------------------------------------------------------------------
// readdata

const { Workbook } = require('exceljs');

test("handle darg and drop action ", async ({page}) => {
    async function readExacelData() {
        const workbook = new Workbook();
        await workbook.xlsx.readFile('C:/Users/mamta/Downloads/Book1.xlsx');
        const ws = workbook.getWorksheet('worksheet')
        const data = ws.getRow(1).getCell(1).value;
        console.log(data); 
    }
    readExacelData();
})
