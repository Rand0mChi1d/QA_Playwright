import {test, expect} from "@playwright/test"

// we can assert URL and we can assert Page Title

test("Assertions", async({ page }) => {
    await page.goto("https://example.com/")
    await expect(page).toHaveURL("https://example.com/")
    await expect(page).toHaveTitle("Example Domain")

    //now we assert elements
    const element = await page.locator("h1")
    await expect(element).toBeVisible()
    await expect(element).toHaveText("Example Domain")     // toHaveText method checks if the text is identical, toContainText finds 
    // if the string is present within the given element
    await expect(element).toHaveCount(1)     // checking if there's only one element with locator "h1"


    //Let's create a constant with non-existant element
    const non_element = await page.locator('h5')
    await expect(non_element).not.toBeVisible()
})