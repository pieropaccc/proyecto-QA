import { Page } from "playwright";

export class loginPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async LoginWithCredentials(Username: string, Password: string){
        
    const UsernameField =  this.page.getByPlaceholder('Username')
    const PasswordField =  this.page.getByPlaceholder('Password')
    const LoginButton = this.page.getByRole("button",{name:'Login'})

        await UsernameField.fill(Username)
        await PasswordField.fill(Password)
        await LoginButton.click()
    }

    async getLoginError(){
        return this.page.locator('.oxd-alert.oxd-alert--error')
    }
}
