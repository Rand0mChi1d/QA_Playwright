import { test, expect } from "@playwright/test"

import { assertTitle, loadHomepage } from '../helper'


test("Custom Wrappers", async({page}) => {
    await loadHomepage(page)
    await page.pause()  //add an inspector for demonstration
    await assertTitle(page)
})