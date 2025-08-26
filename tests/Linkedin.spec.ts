import { test, expect } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config();

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.linkedin.com/')
   
    await page.getByRole('button', { name: 'Dismiss' }).click({ timeout: 5000 }).catch(() => {});
})


//Scenario Outline: User can login with valid credentials
//Given I am on the linkedin homepage
//When I click on the sign in button
//And I fill in the email field with valid credentials
//And I fill in the password field with valid credentials
//And I click on the sign in button
//Then I should be logged in


test('Login successfully and search for a user', async ({ page }) => {
   await page.getByRole('link', { name: 'Sign in', exact: true }).click();
   await page.getByRole('textbox', { name: 'Email or phone' }).fill(process.env.LINKEDIN_EMAIL!);
   await page.getByRole('textbox', { name: 'Password' }).fill(process.env.LINKEDIN_PASSWORD!);
   await page.getByRole('button', { name: 'Sign in',exact:true }).click();
   await page.getByRole('link', { name: 'My Network' }).waitFor({state: 'visible'});

   const searchBar = page.getByPlaceholder('Search')
   await searchBar.waitFor({state: 'visible'});
   await searchBar.fill('John Doe');
   await page.keyboard.press('Enter');
    
})


