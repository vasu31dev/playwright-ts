import { expect, test } from '@playwright/test';
import LoginWithPOM from '../pages/LoginWithPOM';

test.describe.configure({ mode: 'parallel' });

test.describe('Playwright Documentation Sample code', () => {
  test('Entire code for Amazon', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });
    await page.locator('#nav-link-accountList-nav-line-1').click();
    await page
      .getByLabel('Email or mobile phone number')
      .fill('test@mailinator.com');
    await Promise.all([
      page.getByRole('button', { name: 'Continue' }).click(),
      page.waitForEvent('framenavigated'),
    ]);
    await expect(
      page.getByLabel('Email or mobile phone number'),
      'Email field should be hidden',
    ).toBeHidden();
    await expect(
      page.getByLabel('Password'),
      'Password field should be Editable',
    ).toBeEditable();
  });

  //https://playwright.dev/docs/pom
  test('regular POM for Amazon', async ({ page }) => {
    const login = new LoginWithPOM(page);
    await login.gotoHomePage();
    await login.loginSuccessFully();
  });
});
