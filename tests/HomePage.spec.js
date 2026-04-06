// @ts-check

import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

test('open homepage and verify title', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.verifyTitle();
});




// Test to go to homepage
/* import { test, expect } from '@playwright/test';


test('open page', async ({page})=>{

  //const context = await browser.newContext();
  //const page = await context.newPage();
  await page.goto('https://demoblaze.com/');
  await expect(page).toHaveTitle('STORE')

}); */