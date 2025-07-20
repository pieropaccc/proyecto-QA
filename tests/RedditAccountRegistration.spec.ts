import { test, expect } from '@playwright/test';
import { spawnSync } from 'child_process';

test.beforeEach(async({page})=>{
    await page.goto('https://www.reddit.com/')
})

test.describe('Account Registration Tab', () =>{
    test.beforeEach(async({page}) => {
      await page.getByText("Log In", {exact: true}).click()
        await page.getByText('Sign Up').click()
    })

    //Scenario Outline: User can sign up a new account successfully
    //Given a User input a valid email
    //When Pressing "Continue"
    //Then Registration is successfull (confirmation is sent to email)

    test('Write a valid email', async({page}) =>{

        const Username = page.locator('input[name="email"]')

        await Username.fill('Piero@testing.com')

        const UsernameValue = await Username.inputValue()
        //generic assertion

        expect(UsernameValue).toEqual('Piero@testing.com')

        //Locator assertion

        await expect(Username).toHaveValue('Piero@testing.com')

        //Validate button "Continue" is enabled

        const ContinueButton = await page.getByRole('button', { name: 'Continue' })
        expect(ContinueButton).toBeEnabled();
    })

    test('User input letters & numbers, button continue should NOT be enabled', async({page}) =>{

        const Email = page.locator('input[name="email"]')

        await Email.fill('PIeRo222$^$^!.com')

        const EmailValue = await Email.inputValue()

        expect(EmailValue).toEqual('PIeRo222$^$^!.com')

        await expect(Email).toHaveValue('PIeRo222$^$^!.com')

        const ContinueButton = await page.getByRole('button',{ name: 'Continue' } )
        await expect(ContinueButton).not.toBeEnabled()
    })  

    

})

