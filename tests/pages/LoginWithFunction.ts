import { getLocatorByLabel, gotoURL, click, fill, clickAndNavigate, getLocatorByRole} from "@TestUtils";
import {  expectElementToBeEditable, expectElementToBeHidden } from "@AssertUtils";

const signInLink = `#nav-link-accountList-nav-line-1`;
const email = () => getLocatorByLabel('Email or mobile phone number');
const password = () => getLocatorByLabel('Password');
const continueButton = () => getLocatorByRole('button', { name: 'Continue' });

export async function gotoHomePage() {
  await gotoURL("/");
}

export async function loginSuccessfully() {
  await click(signInLink);
  await fill(email(), 'test@mailinator.com');
  await clickAndNavigate(continueButton());
  await expectElementToBeHidden(email(),  "Email field should be hidden");
  await expectElementToBeEditable(password(), {timeout: 2000, message: "Password field should be Editable"} );
}

//This is my Preferred way of coding