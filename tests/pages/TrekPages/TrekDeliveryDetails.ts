import { deliveryDetails } from "../../../testdata/trektestdata/userdetails";
import {
  clickAndNavigate,
  fill,
  getLocatorByTestId,
  selectByValue,
} from "@TestUtils";
import { expectElementToHaveValue, expectPageToHaveURL } from "@AssertUtils";

const firstName = `#firstName`;
const lastName = `#lastName`;
const phoneNumber = `#phone`;
const addressLine1 = `#line1`;
const addressLine2 = `#line2`;
const city = `#townCity`;
const state = `#regionIso`;
const postCode = `#postcode`;

export async function fillDeliveryDetails() {
  await fill(firstName, deliveryDetails.firstName);
  await fill(lastName, deliveryDetails.lastName);
  await fill(phoneNumber, deliveryDetails.phoneNumber);
  await fill(addressLine1, deliveryDetails.addressLine1);
  await fill(addressLine2, deliveryDetails.addressLine2);
  await fill(city, deliveryDetails.city);
  await selectByValue(state, deliveryDetails.state);
  await fill(postCode, deliveryDetails.postCode);
  await verifyDeliveryDetails();
}

//  expect (await getInputValue(firstName)).toEqual(deliveryDetails.firstName);
//  expect (await getInputValue(lastName)).toEqual(deliveryDetails.lastName);
//  expect (await getInputValue(phoneNumber)).toEqual(deliveryDetails.phoneNumber);
//  expect (await getInputValue(addressLine1)).toEqual(deliveryDetails.addressLine1);
//  expect (await getInputValue(addressLine2)).toEqual(deliveryDetails.addressLine2);
//  expect (await getInputValue(city)).toEqual(deliveryDetails.city);
//  expect (await getInputValue(postCode)).toEqual(deliveryDetails.postCode);
export async function verifyDeliveryDetails() {
  await expectElementToHaveValue(firstName, deliveryDetails.firstName);
  await expectElementToHaveValue(lastName, deliveryDetails.lastName);
  await expectElementToHaveValue(phoneNumber, deliveryDetails.phoneNumber);
  await expectElementToHaveValue(addressLine1, deliveryDetails.addressLine1);
  await expectElementToHaveValue(addressLine2, deliveryDetails.addressLine2);
  await expectElementToHaveValue(city, deliveryDetails.city);
  //  await expectElementToHaveValue(state, await getText(`//*[@id='regionIso']//*[@value='${deliveryDetails.state}']`));
  await expectElementToHaveValue(state, deliveryDetails.state);
  await expectElementToHaveValue(postCode, deliveryDetails.postCode);
}

export async function navigateToDeliveryMethodPage() {
  await clickAndNavigate(getLocatorByTestId(`choose-delivery-method-button`));
  await expectPageToHaveURL(new RegExp("delivery-method/choose"));
}
