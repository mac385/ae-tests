// @ts-check
import {test,expect} from '@playwright/test';

import { HomePage } from '../pages/HomePage.js';
import { ContactPage } from '../pages/ContactPage.js';

//test if contact modal loads
test('launch contact form', async ({page}) => {

    const homePage = new HomePage(page);
    const contactPage = new ContactPage(page); 


    await homePage.goto();
    await homePage.clickContact();
    await expect(contactPage.sendMessageButton).toBeVisible();


})