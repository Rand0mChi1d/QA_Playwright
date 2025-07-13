import { test, expect} from '@playwright/test'


/*Hello students,
There is a small change in the latest Playwright version release. Function type() for filling the inputs 
was marked as deprecated and you should from now on use function fill(). Rest of the code is the same. 
The big change is under the hood of Playwright on how they handle the input fill. For you as a coder just 
change page.type() for page.fill() and you are good to go.
*/


test("Working with inputs", async({ page }) => {
    await page.goto("http://zero.webappsecurity.com/")
    await page.click("#signin_button")

    //we will pass some text value to test input, page.fill("selector","text")

    await page.fill("#user_login", "usre naim")
    await page.fill("#user_password", "usre pazwrt")


    await page.click("text=Sign in")        //trying to log in   
    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText("Login and/or password are wrong.")

})