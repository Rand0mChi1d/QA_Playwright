import { test, expect } from "@playwright/test"


test.describe("Hooks", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://example.com/")
    })
    //await page.goto("https://example.com/")
    test("Screenshot", async ({ page }) => {
    await page.screenshot({ path:"screenshot.png", fullPage: true })
    })

    test("Single element shot", async ({ page }) => {
    //await page.goto("https://example.com/")   
    const element = await page.$("h1")
    await element?.screenshot({path: "single_element_shot.png"}) 
    })

})