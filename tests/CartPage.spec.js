// @ts-check

import { test,expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { CartPage } from '../pages/CartPage.js';

//test if cartpage loads
test('user can access cart page and see place order button', async ({ page }) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  await homePage.goto();
  await homePage.clickCart();
  await expect(cartPage.placeOrderButton).toBeVisible();
});


