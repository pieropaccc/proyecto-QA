import { Page } from "playwright";



export class NavigationPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async CalzadoHombre(){
        await this.page.getByText('Menú').click({force: true})
        await this.page.getByText('CALZADO').first().click()
        await this.page.getByText('Hombre').first().click()
        await this.page.locator('span.modal-back.pr-2.mr-1').first().click({force:true})
        this.page.waitForTimeout(500)
    }

    async CalzadoMujer(){
    
        await this.page.getByText('Mujer').first().click({force:true})
        await this.page.getByText('- Waikiki').first().click({force: true})
    }






}