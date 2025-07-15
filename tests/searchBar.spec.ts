import { test, expect } from '@playwright/test';


test.beforeEach("User is on MercadoLibre Argentina Page", async ({page}) => {
  await page.goto("https://www.mercadolibre.com.ar/");
});

test("User searches for Notebook and sees results", async ({page}) => {

    await page.locator('#cb1-edit').fill('Notebook')
    await page.locator('button.nav-search-btn[type="submit"]').click();

    await page.waitForURL(/notebook/i);
    
    //validar que cambio la URL

    await expect(page).toHaveURL(/notebook/i);

  
    // Validar que los resultados tenga la palabra notebook

    const Resultados = await page.locator('ui-search-layout__item').allTextContents()

    Resultados.forEach(titulo => {
      expect(titulo.toLowerCase()).toContain("Notebook")
    })
  });

  test('When User left empty search bar and click in search icon, then nothing should happen', async({page}) =>{

    const primerURL = page.url()

    await page.locator('.nav-search-btn[type="submit"]').click();

    await page.waitForTimeout(1000)

    const segundaURL = page.url()

    expect(primerURL).toBe(segundaURL);
  })


  test('When user input blank spaces in search bar, then it should not redirec to any page', async({page}) =>{

    const URLantes = page.url()

    await page.locator('#cb1-edit').fill('             ')

    await page.waitForTimeout(1000)

    const URLdespues = page.url()

    expect(URLantes).toBe(URLdespues)
  })
  
