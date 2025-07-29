import { test, expect } from '@playwright/test';
import { before, beforeEach } from 'node:test';
import { text } from 'stream/consumers';
import { NavigationPage } from '../tests/navigation'


test.beforeEach(async({page}) => {
    await page.goto('https://www.reef.com.ar/')
        
})

test('Flujo menu > calzados > hombre > todos los calzados', async({page}) =>{

    const navigateTo = new NavigationPage(page)

    await navigateTo.CalzadoHombre()
    
    await navigateTo.CalzadoMujer()

    

})




