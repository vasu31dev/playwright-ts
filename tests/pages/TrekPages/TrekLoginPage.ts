import {
  expectElementNotToBeChecked,
  expectElementToBeChecked,
  expectElementValueNotToBeEmpty,
  expectElementValueToBeEmpty,
} from "@AssertUtils";
import { check, click, fill, getLocator } from "@TestUtils";

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
  // await click(loginRememberMeLabel);
}
