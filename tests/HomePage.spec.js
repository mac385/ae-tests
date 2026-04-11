// @ts-check

import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';

//test if homepage loads
test('open homepage and verify title', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.verifyTitle();
});
//checking if pipeline is working