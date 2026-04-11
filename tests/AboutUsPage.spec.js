//@ts-check

import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { AboutUsPage } from '../pages/AboutUsPage';

//test if aboutus modal loads
test('user can open about us modal', async ({ page }) => {
  const homePage = new HomePage(page);
  const aboutUsPage = new AboutUsPage(page);

  await homePage.goto();
  await homePage.clickAbout();
 
});