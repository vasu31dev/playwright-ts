import { expectElementToBeChecked, expectPageToHaveURL } from "@AssertUtils";
import { click, clickAndNavigate, getLocatorByLabel, getLocatorByTestId } from "@TestUtils";

const retailerOption = () => getLocatorByTestId(`retailer-option-1__name`);
const shipToStore = () => getLocatorByLabel('Ship to store');
const homeDelivery = () => getLocatorByLabel('Home delivery');
const continueToPayment = `#chooseDeliveryMethod_continue_button`;


export async function selectFirstDeliveryRetailerOption() {
  await click(retailerOption());
  await expectElementToBeChecked(retailerOption());
}

export async function selectShipToStoreDelievryOption() {
  await click(shipToStore());
  await expectElementToBeChecked(shipToStore());
}

export async function selectHomeDeliveryOption() {
    await click(homeDelivery());
    await expectElementToBeChecked(homeDelivery());
}

export async function navigateToPaymentDetailsPage() {
    await clickAndNavigate(continueToPayment, {timeout: 15000});
    await expectPageToHaveURL(new RegExp('/billingDetails/'))
}
