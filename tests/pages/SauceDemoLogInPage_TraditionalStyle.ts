import { Locator, Page, expect } from '@playwright/test';
import {
  failureLoginCredentials,
  successLoginCredentials,
} from 'tests/testdata/SauceDemoTestData';

export class SauceDemoLoginPage {
  readonly page: Page;
  readonly userName: string;
  readonly password: string;
  readonly login: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = `#user-name`;
    this.password = `#password`;
    this.login = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator(`//*[contains(@class,'error-message')]`);
  }

  async navigateToSauceDemoLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async logInSuccessfully() {
    await this.page.fill(this.userName, successLoginCredentials.username);
    await this.page.fill(this.password, successLoginCredentials.password);
    await this.login.click();
  }

  async failureLogin() {
    await this.page.fill(this.userName, failureLoginCredentials.username);
    await this.page.fill(this.password, failureLoginCredentials.password);
    await this.login.click();
  }

  async verifyErrorMessageForFailureLogin() {
    await expect(this.errorMessage).toBeVisible();
  }
}
