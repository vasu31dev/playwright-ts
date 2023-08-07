import { click, clickAndNavigate, fill, gotoURL } from '@ActionUtils';
import {
  failureLoginCredentials,
  successLoginCredentials,
} from '../testdata/SauceDemoTestData';
import { expectElementToBeVisible } from '@AssertUtils';
import {
  getLocator,
  getLocatorByPlaceholder,
  getLocatorByRole,
} from '@LocatorUtils';

const userName = () => getLocator(`#user-name`);
const password = () =>
  getLocatorByPlaceholder('Password', { exact: true }).nth(0);
const login = () => getLocatorByRole('button', { name: 'Login' });
const errorMessage = () => getLocator(`//*[contains(@class,'error-message')]`);

export async function navigateToSauceDemoLoginPage() {
  await gotoURL('https://www.saucedemo.com/');
}

export async function logInSuccessfully() {
  await fill(userName(), successLoginCredentials.username);
  await fill(password(), successLoginCredentials.password);
  await clickAndNavigate(login());
}

export async function failureLogin() {
  await fill(userName(), failureLoginCredentials.username);
  await fill(password(), failureLoginCredentials.password);
  await click(login());
}

export async function verifyErrorMessageForFailureLogin() {
  await expectElementToBeVisible(errorMessage());
}
