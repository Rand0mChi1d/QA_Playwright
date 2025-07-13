import {test, expect} from '@playwright/test'


test.describe.parallel("Feedback form", () => {
    test.beforeEach(async({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.click("#feedback")

    })
// reset feedback form
    test("Reset feedback form", async ({page}) => {
        await page.fill("#name", "Random Child Junior")
        await page.fill("#email", "domainexpans ion@domain.main")
        await page.fill("#subject", "yo king has summoned yo, currrr")
        await page.fill("#comment", "Some txt.doc idonnou.")
        //await page.pause()
        await page.click("input[type=reset]")

       
        
        //check if the elements are cleared
        const YoName= await page.locator("#name")
        await expect(YoName).toBeEmpty() 

        const YoCommentYo= await page.locator("#comment")
        await expect(YoCommentYo).toBeEmpty() 
    }),

// submit feedback form
    test("Submit feedback form", async ({page}) => {
        await page.fill("#name", "Random Child Junior")
        await page.fill("#email", "domainexpansion@domain.main")
        await page.fill("#subject", "yo king has summoned yo, currrr")
        await page.fill("#comment", "Some txt.doc idonnou.")
        await page.pause()
        await page.click("input[type=submit]")

        //important trick, forego the creation of the varuable
        await page.waitForSelector("#feedback-title")

})
})