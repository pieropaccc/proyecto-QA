import { Page } from "playwright"

export class HomePage{

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async BuscarLibro(name: string) {

        const titulos = await this.page.locator('.product_pod h3 a').allTextContents()

        const LibroconTitulo = titulos.some(titulo => titulo.includes(name))
        
        if(LibroconTitulo){
            console.log(`Libro/s existe, "${name}"`)
        } else{
            console.log("Ese libro no existe")
        }
    }
}