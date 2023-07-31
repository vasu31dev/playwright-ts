import { expectElementToBeChecked, expectPageToContainURL } from "@AssertUtils";
import { check, clickAndNavigate, getLocator } from "@TestUtils";

const privacyPolicyLabel = () => getLocator(`//*[@qaid='formGroupundefined']/..`);
const privacyPolicyLink = () => getLocator(`//*[@name='termsCheck']`);

export async function checkPrivacyPolicyLink() {
    await check(privacyPolicyLabel());
    await expectElementToBeChecked(privacyPolicyLink());
}

export async function placeOrder() {
    await clickAndNavigate(`#orderSubmitButtonV2`);
    await expectPageToContainURL('checkout/orderConfirmation');
}