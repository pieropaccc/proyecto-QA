import { Page } from "playwright"
import { expect } from "playwright/test"

export class ResultsPage{

    readonly page: Page

    constructor(page:Page){
        this.page = page
    }

    async ClickOnFirstProduct(index = 0){
        const items = this.page.locator('.js-item-product')
        const count = await items.count();
        expect(count).toBeGreaterThan(0);
         await items.nth(index).click();
    }
}