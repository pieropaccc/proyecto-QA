import { expect, test } from "playwright/test"
import { Vuelos } from "./Vuelos"

test.beforeEach(async({page}) =>{
    await page.goto('https://www.kiwi.com/es/')
})

test("Happy Path > Buscar vuelo ", async({page}) =>{

    const vuelos = new Vuelos(page)

    await vuelos.HappyPathBuscarVuelo()
})