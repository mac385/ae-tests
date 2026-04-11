//@ts-check
import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { SignUpPage } from '../pages/SignUpPage.js';

//test if sign up modal launches
test ('check if sign up pop up loads', async({page}) => {
  const homePage = new HomePage(page);
  const signUpPage = new SignUpPage(page);



})
