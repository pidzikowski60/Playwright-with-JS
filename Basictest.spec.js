const {test, expect} = require('@playwright/test');



test.only('Browser Context Playwright test', async ({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page. title());
    //css
    await userName.type("rahulshetty")
    await page.locator("[type='password']").type("learning")
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent())
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await userName.fill("");
    await userName.fill("rahulshettyacademy")
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());
    const allTitles = await cardTitles.allTextContents();
    // all text contents zadziała tylko wtedy kiedy wpiszemy .first i znajdziemy pierwszy element, gdyż playwright wtedy wie, że ma poczekać na załadowanie strony.
    console.log(allTitles);

});

test('Page Playwright test', async ({page})=>
{
    await page.goto("https://google.pl");
    //zobacz tytuł
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
});