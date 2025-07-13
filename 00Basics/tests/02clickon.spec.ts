import { test, expect } from '@playwright/test'

test("Clicking on objects", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/")
    await page.click("#signin_button")      //# indicates id
    await page.click("text=Sign in")        //to find element by it's text

    //TO FIGURE OUT ELEMENTS SELECTORS, INSPECT IT
    
    //add error scenarios
    const errorMessage = await page.locator('.alert-error')          //while working with Classes, use . sign
    await expect(errorMessage).toContainText("Login and/or password are wrong.")
})
