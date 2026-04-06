// @ts-check

import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';

test('user can login successfully', async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.goto();
  await homePage.clickLogin();
  await loginPage.login('manatsa', 'manatsa1');
  await homePage.verifyUserLoggedIn();
});



/* import { test, expect } from '@playwright/test';

test('open page', async ({page})=>{

  //const context = await browser.newContext();
  //const page = await context.newPage();
  await page.goto('https://demoblaze.com/')

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('manatsa');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('manatsa1');
  await page.getByRole('button', { name: 'Log in' }).click();

  await expect(page).toHaveTitle('STORE');


}); */