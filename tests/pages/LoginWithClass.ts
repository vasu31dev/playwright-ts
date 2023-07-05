import { getLocatorByLabel, gotoURL, click, fill, clickAndNavigate, getLocatorByRole, } from "../utils/TestUtils";
import { expectElementToBeEditable, expectElementToBeHidden } from "../utils/AssertUtils";

export default class LoginWithClass {
  private signInLink =  `#nav-link-accountList-nav-line-1`;
  private email =  getLocatorByLabel('Email or mobile phone number');
  private password = getLocatorByLabel('Password');
  private continueButton = getLocatorByRole('button', { name: 'Continue' });

  async gotoHomePage() {
    await gotoURL("/");
  }

  async loginSuccessfully() {
    await click(this.signInLink);
    await fill(this.email, 'test@mailinator.com');
    await clickAndNavigate(this.continueButton);
    await expectElementToBeHidden(this.email,  "Email field should be hidden");
    await expectElementToBeEditable(this.password, {timeout: 2000, message: "Password field should be Editable"} );
  }
}