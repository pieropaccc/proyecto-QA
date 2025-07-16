import { test, expect } from '@playwright/test';
import { only } from 'node:test';

test.beforeEach('ir a demoqa', async({page}) => {
    await page.goto('https://demoqa.com/text-box')
})

test('locators automation', async({page}) =>{

    //automation a locator by tag
    //selecciono el primer input
    await page.locator('input').first().fill('Piero')
    //selecciono el segundo input
    await page.locator('input[id="userEmail"]').fill('Pacella@gmail.com')
    //seleccione el primer text area
    await page.locator('textarea[placeholder="Current Address"]').fill('jujuy 550')

    //selecciono 2da text area
     await page.locator('textarea.form-control#permanentAddress').fill('corrientes')

     await page.locator('textarea.form-control#permanentAddress').clear()
     await page.locator('#permanentAddress[class="form-control"]').pressSequentially('Sample Text',{delay: 150})

     await page.locator('button[class="btn btn-primary"]').click()
    
     
})

test('User face role',async({page}) =>{
    await page.locator(':text-is("Buttons")').click()

    await page.getByRole('button', {name:'Double Click Me'}).dblclick()
    await page.getByText('You have done a double click').isVisible()
    

    const DbClickMessage = await page.locator('#doubleClickMessage')

    expect(DbClickMessage).toBeVisible();

    await page.getByText('Elements').first().click()
    await page.getByText('Forms').first().click()
    await page.getByText('Practice Form').click()
    await page.getByPlaceholder('First Name').pressSequentially('piero',{delay: 100})

    const RadioButton1 = await page.getByText('Other')
    await RadioButton1.scrollIntoViewIfNeeded()
    await RadioButton1.check()

    const Radiobutton2 = await page.getByText('Male', {exact: true})

    await Radiobutton2.scrollIntoViewIfNeeded()
    await Radiobutton2.first().check()
    
    expect(RadioButton1).not.toBeChecked()
    expect(Radiobutton2).toBeChecked();

    await page.getByPlaceholder('Mobile Number').fill('3794')

    const Hobbies = await page.locator('#hobbiesWrapper')
    const SportsHobbies = await Hobbies.getByLabel('Sports')
    const MusicHobbies = await Hobbies.getByLabel('Music')

    await SportsHobbies.check({force:true})
    await expect(SportsHobbies).toBeChecked()

})

test('extracting values', async({page}) =>{

    await page.goto('https://demoqa.com/radio-button')

   const radiobuttons =  await page.locator('.custom-control').allTextContents()

    expect(radiobuttons).toContain("Yes")

    await page.goto('https://demoqa.com/text-box')

    const FullName = await page.getByRole('textbox', {name:'Full Name', exact: true})

    await FullName.fill("Piero")

    const FullNameValue = await FullName.inputValue()

    expect(FullNameValue).toEqual("Piero")

    const SubmitButton = await page.getByRole('button',{name:'Submit'}).textContent()

    expect(SubmitButton).toEqual('Submit')
})