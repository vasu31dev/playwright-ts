import { gotoURL } from '@ActionUtils';
import { test } from '@PageSetup';
import {
  clickLoginButton,
  fillLoginDetails,
  verifySuccessfulLogin,
} from 'tests/pages/Demo';
test.describe('Automation demo - success and failure tests', () => {
  test('Login test - Success test', async () => {
    await gotoURL('https://www.saucedemo.com/');
    await fillLoginDetails('standard_user', 'secret_sauce');
    await clickLoginButton();
    await verifySuccessfulLogin();
  });

  test('Login test - Failure test', async () => {
    await gotoURL('https://www.saucedemo.com/');
    await fillLoginDetails('standard_user', '1234');
    await clickLoginButton();
    await verifySuccessfulLogin();
  });
});
