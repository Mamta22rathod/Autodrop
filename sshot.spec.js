import {test, expect} from '@playwright/test';
test('page screenshot', async ({page}) => {
    await page.goto('https://www.opencart.com/index.php?route=cms/demo')
    await page.screenshot({path:'tests/screenshot/' + Date.now() + 'Homepage.png'})
});

test(' Fullpage screenshot', async ({page}) => {
    await page.goto('https://www.opencart.com/index.php?route=cms/demo')
    await page.screenshot({path:'tests/screenshot/' + Date.now() + 'Fullpage.png', fullpage:true})
});

test.only(' Element page screenshot', async ({page}) => {
    await page.goto('https://www.opencart.com/index.php?route=cms/demo')
    await page.locator('(//a[@target="_blank"])[2]').screenshot({path:'tests/screenshot/' + Date.now() + 'Element.png'})
});
