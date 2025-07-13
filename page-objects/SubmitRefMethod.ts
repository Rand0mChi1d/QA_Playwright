import {expect, Locator, Page} from "@playwright/test"

export class SubmitRefMethod{
    readonly page: Page
    readonly submitForm: Locator
    readonly feedback: Locator
    readonly name: Locator
    readonly mail: Locator
    readonly subject: Locator
    readonly comment: Locator
    readonly reset: Locator
    readonly checkSub: Locator


    constructor(page: Page) {
        this.page = page
        this.submitForm = page.locator("input[type=submit]")
        this.feedback = page.locator("#feedback")
        this.name = page.locator("#name")
        this.mail = page.locator("#email")
        this.subject = page.locator("#subject")
        this.comment = page.locator("#comment")
        this.reset = page.locator("input[type=reset]")
        this.checkSub = page.locator("#feedback-title")
    }

    async visitFeedback() {
        await this.page.goto("http://zero.webappsecurity.com/index.html")
        await this.feedback.click()
    }
    
    async fillFeedbackForm(name: string, mail: string, subject: string, comment: string) {
        await this.name.fill(name)
        await this.mail.fill(mail)
        await this.subject.fill(subject)
        await this.comment.fill(comment)
    }

    async resetFeedbackForm(){
        await this.reset.click()
    }

    async submitFeedbackForm() {
        await this.submitForm.click()
    }

    async checkClear() {
        const name = await this.page.locator("#name")
        const comment = await this.page.locator("#comment")
        await expect(name).toBeEmpty()
        await expect(comment).toBeEmpty()
    }

    async checkSubmission() {
        await this.checkSub.waitFor()
    }
}
