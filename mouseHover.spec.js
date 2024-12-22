import { test, expect } from '@playwright/test';

test("Handle mouse hover", async ({ page }) => {
    await page.goto('https://www.amazon.in/s?k=amazon+prime+membership&adgrpid=1320515078795879&hvadid=82532458763367&hvbmt=bb&hvdev=c&hvlocphy=157506&hvnetw=o&hvqmt=b&hvtargid=kwd-82533075230534%3Aloc-90&hydadcr=5653_2377271&msclkid=5d0095f3803c17a0e967f3aa5a03f89a&tag=msndeskstdin-21&ref=pd_sl_6iluw3gs69_b');

    await page.locator("//span[text()='Fresh']").hover()
    await page.waitForTimeout(2000);
})