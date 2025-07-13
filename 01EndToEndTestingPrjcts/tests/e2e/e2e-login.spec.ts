import { test, expect} from "@playwright/test"

test.describe.parallel("Login / Logout flow.", () => {
    //Before hook
    test.beforeEach(async ({ page }) => {
        await page.goto("http://zero.webappsecurity.com/")
    })
    //negative scenario
    test("Negative scenario for login.", async({page}) => {
        await page.click("#signin_button")
        await page.fill("#user_login", "invalid usrenaim")
        await page.fill("#user_password", "invalid passwrod")
        await page.click("text=Sign in")

        //locate and extract value from error message, by class here
        const errorMessage = await page.locator(".alert-error")
        await expect(errorMessage).toContainText("Login and/or password are wrong.")
    })
    //positive scenario + Logout
    test("Positive scenario for login + logout.", async({ page }) => {
        await page.click("#signin_button")
        await page.fill("#user_login", "username")      //valid credentials
        await page.fill("#user_password", "password")
        await page.click("text=Sign in")    

       //need to return to webpage from the 'error' screen
        await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html")

        //run this one in webkit, chrome gives out security messages that interrupt the process

        const accoutSummaryTab = await page.locator("#account_summary_tab")
        await expect(accoutSummaryTab).toBeVisible()
        await expect(accoutSummaryTab).toHaveText("Account Summary")

        //logout secret trick
        await page.goto("http://zero.webappsecurity.com/logout.html")
        await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html")
    })
})