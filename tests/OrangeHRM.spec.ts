import { test, expect } from '@playwright/test';
import { before } from 'node:test';
import { loginPage } from "../tests/loginPage"



test.beforeEach(async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

 test("Successfull login", async({page}) =>{
   
    const loginclass = new loginPage(page)
    await loginclass.LoginWithCredentials('Admin','admin123')

    await expect(page).toHaveURL(/.*\/dashboard\/index/);
    })

//   Negative Cases   //


test("Negative Login Test Cases", async({page}) =>{

    const loginclass = new loginPage(page)

    await loginclass.LoginWithCredentials("fakeusername","fakePassword")

    const ErrorMsg = await loginclass.getLoginError()

    await expect(ErrorMsg).toBeVisible()
    await expect(ErrorMsg).toContainText('Invalid credentials')

})