import {test, expect} from '@playwright/test'
import { MethodPage2 } from '../../../page-objects/MethodPage2'



test.describe("Search result", () => {
    let methodPage2: MethodPage2

    test.beforeEach(async({page}) => {
        methodPage2 = new MethodPage2(page)
    })

    test("Should find search result", async ({page}) => {
/*         await page.goto("http://zero.webappsecurity.com/index.html")
        await page.fill("#searchTerm", "bank")
        await page.keyboard.press("Enter") */
        await methodPage2.visit()
        await methodPage2.search("bank")


        //we can count a number of certain elements on the page
        /* const numberOfLinks= await page.locator("li > a") */
        //it will locate elements within "li" marked "a"
        /* await expect(numberOfLinks).toHaveCount(2) */
        await methodPage2.validateSearch(2)
    })

})  