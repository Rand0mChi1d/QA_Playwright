import { test, expect } from '@playwright/test'

//create test:

test("Description", async ({ page }) => {
    //Here goes test code
    //in parenthesis goes a link to the web page
    await page.goto("https://example.com/")  //here we loaded the site using page.goto func 

    //in playwright we store elements from the page into var using locator function
    const pageTitle = await page.locator('h1')
    // verify that var pageTitle contained the text we want to find there
    await expect(pageTitle).toContainText('Example Domain')

}) 

/*Everything in playwright is asynchronous, so we need to use async.
Also we need to pass a page object with directives to control the browser. */