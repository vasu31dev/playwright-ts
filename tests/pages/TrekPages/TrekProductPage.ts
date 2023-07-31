import {expectElementToBeVisible, expectPageToContainURL} from "@AssertUtils";
import {click, clickAndNavigate, getLocator, getLocatorByTestId, getLocatorByText, gotoURL, hover } from "@TestUtils";

const viewCartLink = () => getLocatorByText(`View cart`);

export async function navigateToproductPage(url: string): Promise<void> {
  await gotoURL(url);
}

export async function addProductToCart(): Promise<void> {
  await click(`[id='add-button']`);
  await expectElementToBeVisible(viewCartLink());
}

export async function navigateToCart(): Promise<void> {
  await clickAndNavigate(viewCartLink());
  await expectPageToContainURL("/cart");
}

export async function hoverOnPriceInfo() {
 await hover(getLocatorByTestId(`buying-zone.price-info`));
}

export async function verifyPriceInfoMessageDisplayed() {
  await expectElementToBeVisible(getLocator(`//*[@qaid='buying-zone.price-info'][@aria-describedby]`));
}