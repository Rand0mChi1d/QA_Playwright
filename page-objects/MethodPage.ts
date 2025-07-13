import {expect, Page,  Locator} from "@playwright/test";

//define selectors
export class MethodPage{
    readonly page: Page
    readonly logbutton: Locator

//class init
constructor(page: Page) {
    this.page = page
    this.logbutton = page.locator("#signin_button")
}

//methods
async visit() {
    this.page.goto("http://zero.webappsecurity.com/")
}

async logout() {
    this.page.goto("http://zero.webappsecurity.com/logout.html")
    await expect(this.page).toHaveURL("http://zero.webappsecurity.com/index.html")
}

async signClick() {
    await this.logbutton.click()
    await this.page.goto("http://zero.webappsecurity.com/bank/transfer-funds.html")
}

async summary() {
    const accSummaryTab = this.page.locator("#account_summary_tab")
    await expect(accSummaryTab).toBeVisible()
    await expect(accSummaryTab).toHaveText("Account Summary")
}

async relocate(link: string) {
    await this.page.goto(link)
}
}