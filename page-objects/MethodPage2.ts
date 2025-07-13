import {expect, Page, Locator} from "@playwright/test"

export class MethodPage2{
    readonly page: Page
    readonly searchPlace: Locator
    readonly numberOfLinks: Locator

    constructor(page: Page){
        this.page = page
        this.numberOfLinks = page.locator("li > a")
        this.searchPlace = page.locator("#searchTerm")
    }

    async visit(){
        await this.page.goto("http://zero.webappsecurity.com/index.html")
    }

    async search(searchMessage: string){
        await this.searchPlace.fill(searchMessage)
        await this.page.keyboard.press("Enter")
    }

    async validateSearch(count: number){
        const resNumber = this.numberOfLinks
        await expect(resNumber).toHaveCount(count)
    }

}