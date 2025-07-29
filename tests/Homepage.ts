import { Page } from "playwright"


export class HomePage {

    readonly page : Page

    constructor(page: Page){

        this.page = page

    }

    async OnSearchBar(item: string){

        const SearchBarButton = this.page.locator('.utilities-text',{hasText:"Buscar"})
       await SearchBarButton.click({force:true})

        const SearchBarField = this.page.getByPlaceholder('¿Qué estás buscando?').first()
        await SearchBarField.fill(item,{force:true})
        await SearchBarField.press('Enter')
        
    }
}