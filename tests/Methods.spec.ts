import {expect , test} from "playwright/test"
import { HomePage } from "./Libreria"

test.beforeEach(async({page}) =>{
    await page.goto('https://books.toscrape.com/')
})

test('Obtener todos los titulos de los libros', async({page}) =>{

    const homepage = new HomePage(page)

    await homepage.BuscarLibro("Red")

    await homepage.BuscarLibro("12313")
    /*const titulos = await page.locator('.product_pod h3 a').allTextContents()

    titulos.forEach((titulo, index) =>{
        console.log(`${index + 1},${titulo}`)
    })
    
    const FiltrarTitulos = titulos.filter(titulo => titulo.includes('The'))
    console.log(FiltrarTitulos)

    const EncontrarTituloConA = titulos.find(titulo => titulo.startsWith('A'))
    console.log('Titulo con A: ', EncontrarTituloConA)

    */


})

test('pasar todos los precios a numeros/strings ', async({page}) =>{

    const PreciosSinParsear = await page.locator('.price_color').allTextContents()
    
    const PrecioString = PreciosSinParsear.map(precio => parseFloat(precio.replace("£","")))
    
    const preciosMayoresA10 = PrecioString.find(precio => precio > 10 )
    console.log("precios mayores a 10", preciosMayoresA10)
})

test('transformar titulos a mayusculas', async({page}) =>{

    const titulos = await page.locator('.product_pod h3 a').allTextContents()

    const titulosMayusculas = titulos.map(titulo => titulo.trim().toUpperCase())
    
    titulosMayusculas.forEach((titulo, index) =>{
        console.log(`${index}, ${titulo}`)
        expect(titulo).toMatch(/[A-Z]/)
    })

})


test('recorrer todos los generos del indice ', async({page}) =>{

    const indiceLateral =  page.locator('.side_categories ul li ul li a')

     const generos = await indiceLateral.all()

     for( const genero of generos) {
        const texto = await genero.allTextContents()
        console.log(String(texto).trim())
        const FiltrarGeneros = texto.find(genero => genero.match('Travel'))
        console.log(FiltrarGeneros)
     }


})