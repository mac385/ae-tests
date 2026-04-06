import { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.cartLink = page.getByRole('link', { name: 'Cart' });
    this.welcomeUser = page.locator('#nameofuser');
    this.aboutLink=page.getByRole('link', {name:'About us'});
    this.contactLink=page.getByRole('link', {name: 'Contact'});
  }

  async goto() {
    await this.page.goto('https://demoblaze.com/');
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle('STORE');
  }

  async clickLogin() {
    await this.loginLink.click();
  }

  async clickCart() {
    await this.cartLink.click();
  }

  async verifyUserLoggedIn() {
    await expect(this.welcomeUser).toBeVisible();

  }

  async clickAbout(){
    await this.aboutLink.click();
  }

  async clickContact(){
    await this.contactLink.click();
  }


}
