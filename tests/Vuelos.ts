import { Page } from "playwright"

export class Vuelos { 

    readonly page: Page

    constructor(page:Page){
        this.page = page
    }


    async HappyPathBuscarVuelo(){
        const CancelPopUp = await this.page.locator('[data-test="ModalCloseButton"]').click()

    const DestinoButton = this.page.locator('#destination')
    await DestinoButton.click({force:true,})
    await DestinoButton.pressSequentially('Buenos Aires', {delay:200})
    await this.page.locator('[data-test="PlacePickerRow-wrapper"]').getByText('Buenos Aires, Argentina').first().click({force:true})

    const OrigenButton = this.page.locator('[data-test="PlacePickerInputPlace-close"]').first()
    await OrigenButton.click()
    await OrigenButton.pressSequentially('Corrientes',{delay:200})
    await this.page.getByText('Corrientes, Argentina').first().click()

    const FechaDeSalida = this.page.getByRole('textbox', { name: 'Salida' })
    await FechaDeSalida.click({force:true})
    const FechasDisponiblesSalida = this.page.locator('[data-test="CalendarDay"]').first()
    await FechasDisponiblesSalida.click()

    const FechaDisponibleRegreso = this.page.locator('[data-test="CalendarDay"][data-value="2025-08-08"]')
    await FechaDisponibleRegreso.click({force:true})

    const EstablecerFechas = this.page.locator('[data-test="SearchFormDoneButton"]')
    await EstablecerFechas.click()

    const BookingCheckbox = this.page.getByRole('checkbox',{name:'Buscar alojamiento con'})
    await BookingCheckbox.first().uncheck({force:true})
    

    const BotonBuscarVuelo = this.page.locator('[data-test="LandingSearchButton"]')
    await BotonBuscarVuelo.click({force:true})
    }
}