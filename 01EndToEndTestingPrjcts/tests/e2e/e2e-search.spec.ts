import {test, expect} from '@playwright/test'


test.describe("Search result", () => {
    test("Should find search result", async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.fill("#searchTerm", "bank")
        await page.keyboard.press("Enter")

        //we can count a number of certain elements on the page
        const numberOfLinks= await page.locator("li > a")
        //it will locate elements within "li" marked "a"
        await expect(numberOfLinks).toHaveCount(2)
    })

})