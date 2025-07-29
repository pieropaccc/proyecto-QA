import { test, expect } from '@playwright/test';
import { before, beforeEach } from 'node:test';
import { text } from 'stream/consumers';
import { NavigationPage } from '../tests/navigation'
import { HomePage } from './Homepage';
import { ResultsPage } from './ResultsPage';
import productos from "./productos.json"


test.beforeEach(async({page}) => {
    await page.goto('https://www.reef.com.ar/')
        
})


productos.forEach(productos =>{
test(`Usar barra de busqueda para buscar ${productos}`, async({page}) =>{

    const Search = new HomePage(page)
    const Results = new ResultsPage(page)
    
    await Search.OnSearchBar(productos)
    await Results.ClickOnFirstProduct()
    })
})



