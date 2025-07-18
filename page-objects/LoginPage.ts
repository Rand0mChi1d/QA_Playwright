import {expect, Locator, Page} from "@playwright/test"
import { AbstractPage } from "../AbstractPage"

export class LoginPage extends AbstractPage {
    //define selectors
    //readonly page: Page

    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly errorMessage: Locator

    //Init selectors using constructor
    constructor(page: Page) {
        super(page)
        //this.page = page
        this.usernameInput = page.locator("#user_login")
        this.passwordInput = page.locator("#user_password")
        this.submitButton = page.locator("input[type=submit]")
        this.errorMessage = page.locator(".alert-error")
    }
/*     //define login page methods
    async visit() {
        await this.page.goto("http://zero.webappsecurity.com/index.html")
    } */

    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.submitButton.click()
        //application of AbstractPage, wait to see the result screen
        await this.wait(2000)
    }

    async assertErrorMessage() {
        await expect(this.errorMessage).toContainText(
            "Login and/or password are wrong."
        )
    }
}