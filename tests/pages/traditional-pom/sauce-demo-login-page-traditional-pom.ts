import { Locator, Page, expect } from '@playwright/test';
import { failureLoginCredentials, successLoginCredentials } from '../../testdata/sauce-demo-test-data';

export class SauceDemoLoginPage {
  readonly page: Page;
  readonly userName: Locator;
  readonly password: Locator;
  readonly login: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userName = page.locator(`#user-name`);
    this.password = page.locator(`#password`).or(page.getByPlaceholder('Password', { exact: true }));
    this.login = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator(`//*[contains(@class,'error-message')]`);
  }

  async navigateToSauceDemoLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async logInSuccessfully() {
    await this.userName.fill(successLoginCredentials.username);
    await this.password.fill(successLoginCredentials.password);
    await Promise.all([this.login.click(), this.page.waitForEvent('framenavigated', { timeout: 5000 })]);
    await this.page.waitForLoadState('load', { timeout: 5000 });
  }

  async failureLogin() {
    await this.userName.fill(failureLoginCredentials.username);
    await this.password.fill(failureLoginCredentials.password);
    await this.login.click();
  }

  async verifyErrorMessageForFailureLogin() {
    await expect(this.errorMessage).toBeVisible();
  }

  async verifyLoginPageisDisplayed() {
    await expect(this.userName).toBeVisible();
  }
}
