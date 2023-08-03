import { click, fill } from '@ActionUtils';
import { expectElementToBeVisible } from '@AssertUtils';
import { getLocator } from '@LocatorUtils';

export async function fillLoginDetails(username: string, password: string) {
  await fill(`#user-name`, username);
  await fill(`#password`, password);
}

export async function clickLoginButton() {
  await click(`#login-button`);
}

export async function verifySuccessfulLogin() {
  await expectElementToBeVisible(getLocator(`#inventory_container`).nth(0));
}
