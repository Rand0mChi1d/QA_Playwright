import { test } from "@playwright/test"

import { LoginPage } from "../../../page-objects/LoginPage"

import {MethodPage} from "../../../page-objects/MethodPage"


test.describe.parallel("Login / Logout flow.", () => {
    let loginPage: LoginPage
    let methodPage: MethodPage
    //Before hook
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page) 
        methodPage = new MethodPage(page)
        await methodPage.visit()
        //await page.goto("http://zero.webappsecurity.com/")
    })
    //negative scenario
    test("Negative scenario for login.", async({page}) => {
        //await page.click("#signin_button")
        await methodPage.signClick()

/*         await page.fill("#user_login", "invalid usrenaim")
        await page.fill("#user_password", "invalid passwrod")
        await page.click("text=Sign in") */
        await loginPage.login("Invalid usrenaim", "Invalid passerworth")

        //locate and extract value from error message, by class here
/*         const errorMessage = await page.locator(".alert-error")
        await expect(errorMessage).toContainText("Login and/or password are wrong.") */
        await loginPage.assertErrorMessage()

    })
    //positive scenario + Logout
    test("Positive scenario for login + logout.", async({ page }) => {
        await methodPage.signClick()

/*         await page.fill("#user_login", "username")      //valid credentials
        await page.fill("#user_password", "password")
        await page.click("text=Sign in")     */
        await loginPage.login("username", "password")

       /* need to return to webpage from the 'error' screen
       run this one in webkit, chrome gives out security messages that interrupt the process */
       //await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html")
         await methodPage.relocate("http://zero.webappsecurity.com/bank/transfer-funds.html")
        

        /* const accoutSummaryTab = await page.locator("#account_summary_tab")
        await expect(accoutSummaryTab).toBeVisible()
        await expect(accoutSummaryTab).toHaveText("Account Summary") */
        await methodPage.summary()

        //logout secret trick
/*         await page.goto("http://zero.webappsecurity.com/logout.html")
        await expect(page).toHaveURL("http://zero.webappsecurity.com/index.html") */
        await methodPage.logout()
    })
})