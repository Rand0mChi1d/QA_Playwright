import {test} from '@playwright/test'
import { SubmitRefMethod } from '../../../page-objects/SubmitRefMethod'

test.describe.parallel.only("Feedback form", () => {
    let submitRefMethod: SubmitRefMethod
    
    
    test.beforeEach(async({page}) => {
        submitRefMethod = new SubmitRefMethod(page)
        await submitRefMethod.visitFeedback()

    })
// reset feedback form
    test("Reset feedback form", async ({page}) => {
        await submitRefMethod.fillFeedbackForm(
            "Random Child", "domainexpansion@domain.main", "civilized negotiation", "by methodical murder"
        )
        //await page.pause()
        await submitRefMethod.resetFeedbackForm()

        //check if the elements are cleared
        await submitRefMethod.checkClear()
    }),

// submit feedback form
    test("Submit feedback form", async ({page}) => {
        await submitRefMethod.fillFeedbackForm(
            "Random Child", "domainexpansion@domain.main", "civilized negotiation", "by methodical murder"
        )
        await submitRefMethod.submitFeedbackForm()

        //important trick, forego the creation of the varuable
        await submitRefMethod.checkSubmission()

})
})