import { expectElementToBeDisabled, expectElementToHaveValue, expectPageToHaveURL } from "@AssertUtils";
import * as DeliveryDetails from "./TrekDeliveryDetails";
import { visaCardDetails, amexCardDetails } from "../../../testdata/trektestdata/userdetails";
import { clickAndNavigate, fill, getInputValue, selectByValue } from "@TestUtils";
import { expect } from "@playwright/test";

const firstName = `#firstName`;
const lastName = `#lastName`;
const phoneNumber = `#phone`;
const addressLine1 = `#line1`;
const addressLine2 = `#line2`;
const city = `#townCity`;
const state = `#regionIso`;
const postCode = `#postcode`;

const cardType = `#cardType`;
const cardNumber = `#cardNumber`;
const nameOnCard = `#nameOnCard`;
const cardCVV = `#card_cvn`;
const monthExpiry = `#ExpiryMonth`;
const yearExpiry = `#ExpiryYear`;

let cardDetails: { [key: string]: string }= {};

export async function verifyUserAddressDetails() {
  await expectElementToBeDisabled(firstName);
  await expectElementToBeDisabled(lastName);
  await expectElementToBeDisabled(phoneNumber);
  await expectElementToBeDisabled(addressLine1);
  await expectElementToBeDisabled(addressLine2);
  await expectElementToBeDisabled(city);
  await expectElementToBeDisabled(state);
  await expectElementToBeDisabled(postCode);
  await DeliveryDetails.verifyDeliveryDetails();
}

export async function enterCardDetails(cardTypeString: string) {
  if (cardTypeString == "visa") {
    cardDetails = visaCardDetails;
  } else if (cardTypeString == "amex") {
    cardDetails = amexCardDetails;
  }

  await selectByValue(cardType, cardDetails.cardtype);
  await fill(cardNumber, cardDetails.cardnumber);
  await fill(nameOnCard, cardDetails.name);
  await fill(cardCVV, cardDetails.cvv);
  await selectByValue(monthExpiry, cardDetails.expirationDateMonth);
  await selectByValue(yearExpiry, cardDetails.expirationDateYear);
  await verifyEnteredCardDetails();
}


async function verifyEnteredCardDetails() {
  await expectElementToHaveValue(cardType, cardDetails.cardtype, {soft: true});
  //commented as we need to use replace function after getting input value
  //added web first assertion for this below
  // await expectElementToHaveValue(cardNumber, cardDetails.cardnumber, {soft: true});
  await expectElementToHaveValue(nameOnCard, cardDetails.name, {soft: true});
  await expectElementToHaveValue(cardCVV, cardDetails.cvv, {soft: true});
  await expectElementToHaveValue(monthExpiry, cardDetails.expirationDateMonth, {soft: true});
  await expectElementToHaveValue(yearExpiry, cardDetails.expirationDateYear, {soft: true});
  expect((await getInputValue(cardNumber)).replace(/\s/g, '')).toEqual(cardDetails.cardnumber)
}

export async function navigateToReviewOrderPage() {
  await clickAndNavigate(`#checkoutReviewAndOrder`)
  await expectPageToHaveURL(new RegExp('checkout/multi/summary/v2/'));
}



