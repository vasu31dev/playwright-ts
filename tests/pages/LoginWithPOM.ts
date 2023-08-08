import { Locator, Page, expect } from '@playwright/test';

export default class Login {
  readonly page: Page;
  readonly signInLink: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly continue: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInLink = page.locator('#nav-link-accountList-nav-line-1');
    this.email = page.getByLabel('Email or mobile phone number');
    this.password = page.getByLabel('Password');
    this.continue = page.getByRole('button', { name: 'Continue' });
  }

  async gotoHomePage() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
  }

  async loginSuccessFully() {
    await this.signInLink.click();
    await this.email.fill('test@mailinator.com');
    await Promise.all([this.continue.click(), this.page.waitForEvent('framenavigated')]);
    await expect(this.email, 'Email field should be hidden').toBeHidden();
    await expect(this.password, 'Password field should be Editable').toBeEditable();
  }
}
