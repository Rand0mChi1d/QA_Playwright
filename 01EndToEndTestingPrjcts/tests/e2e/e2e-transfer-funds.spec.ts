import {test, expect} from "@playwright/test"

test.describe("Transfer funds/ make payments", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("http://zero.webappsecurity.com/index.html")
        await page.click("#signin_button")
        await page.fill("#user_login", "username")
        await page.fill("#user_password", "password")
        await page.click("text=Sign in") 
        
    })

    test("Transfer Funds", async({page}) => {
        await page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html")
        await page.selectOption("#tf_fromAccountId", "2")
        await page.selectOption("#tf_toAccountId", "4")
        await page.fill("#tf_amount", "200")
        await page.click("#btn_submit")
        await page.click("#btn_submit")
        
        const resultOfTransfer = await page.locator(".alert-success")
        await expect(resultOfTransfer).toContainText("You successfully submitted your transaction.")
    })
})