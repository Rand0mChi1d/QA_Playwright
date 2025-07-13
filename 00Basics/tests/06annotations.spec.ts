import { test, expect } from '@playwright/test'
// 0 (3) describe
    // create a discription for the group, not async

test.describe("Testing annotation methods." , () => {

// 1 skip
test.skip("Clicking on objects", async ({ page }) => {
    await page.goto("http://zero.webappsecurity.com/")
    await page.click("#signin_button")     
    await page.click("text=Sign in")        
    const errorMessage = await page.locator('.alert-error') 
    await expect(errorMessage).toContainText("Login and/or password are wrong.")
})


test("Working with inputs", async({ page }) => {
    await page.goto("http://zero.webappsecurity.com/")
    await page.click("#signin_button")
    await page.fill("#user_login", "usre naim")
    await page.fill("#user_password", "usre pazwrt")
    await page.click("text=Sign in")   
    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText("Login and/or password are wrong.")
})
})


// 2 only
/*
test.only("Assertions", async({ page }) => {
    await page.goto("https://example.com/")
    await expect(page).toHaveURL("https://example.com/")
    await expect(page).toHaveTitle("Example Domain")
    const element = await page.locator("h1")
    await expect(element).toBeVisible()
    await expect(element).toHaveText("Example Domain")
    await expect(element).toHaveCount(1) 
    const non_element = await page.locator('h5')
    await expect(non_element).not.toBeVisible()
})
*/