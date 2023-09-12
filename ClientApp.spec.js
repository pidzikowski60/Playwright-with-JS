const {test, expect} = require('@playwright/test');



test('Browser Context Playwright test', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("pidzikowski60@gmail.com");
    await page.locator("#userPassword").type("Dowk135790");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    const titles= await page.locator(".card-body b").allTextContents();

    console.log(titles);
   
});
