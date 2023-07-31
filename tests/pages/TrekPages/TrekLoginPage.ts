import {
  expectElementNotToBeChecked,
  expectElementToBeChecked,
  expectElementToBeVisible,
  expectElementValueNotToBeEmpty,
  expectElementValueToBeEmpty,
  expectPageToHaveURL,
} from "@AssertUtils";
import { check, clickAndNavigate, fill, getLocator } from "@TestUtils";

const loginEmail = () => getLocator(`#j_username`);
const loginPassword = () => getLocator(`#j_password`);
const loginRememberMe = `//*[@qaid='login-remember-me']//input`;
const loginRememberMeLabel = `//*[@qaid='login-remember-me']`;

export async function verifyLogInFieldsAreEmptyAndUnchecked() {
  await expectElementValueToBeEmpty(loginEmail());
  await expectElementValueToBeEmpty(loginPassword());
  await expectElementNotToBeChecked(loginRememberMe);
}

export async function verifyLogInFieldsAreNotEmptyAndChecked() {
  await expectElementValueNotToBeEmpty(loginEmail());
  await expectElementValueNotToBeEmpty(loginPassword());
  await expectElementToBeChecked(loginRememberMe);
}

export async function fillAndCheckLogInDetails() {
  await fill(loginEmail(), "abc@gmail.com");
  await fill(loginPassword(), "abcd");
  await check(loginRememberMeLabel);
}

export async function logInSuccessfullyAsB2BUser() {
  //entering log in credentials
  await fill(loginEmail(), "vidya_vemulapalli@trekbikes.com");
  await fill(loginPassword(), "Test@123");
  await clickAndNavigate(`//button[@type='submit']//span[contains(text(),'Log in')]`);
  //naviating to b2b as logged user
  await expectElementToBeVisible(`(//*[@id='logout-link'])[last()]`);
  await expectPageToHaveURL(new RegExp("/b2b"));
}
