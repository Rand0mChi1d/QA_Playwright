import { test, expect } from '@playwright/test'


test("Screenshot", async ({ page }) => {
    //step 1, load website
    await page.goto("https://example.com/")
    //step 2, screenshot the full page
    await page.screenshot({ path:"screenshot.png", fullPage: true })
})

test("Single element shot", async ({ page }) => {
    await page.goto("https://example.com/")
    const element = await page.$("h1")
    await element?.screenshot({path: "single_element_shot.png"}) 
})