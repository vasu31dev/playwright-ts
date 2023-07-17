import {expectElementToBeVisible, expectPageToContainURL} from "@AssertUtils";
import {click, clickAndNavigate, getLocatorByText, gotoURL, waitForPageLoadState} from "@TestUtils";

const viewCartLink = () => getLocatorByText(`View cart`);

export async function navigateToproductPage(url: string): Promise<void> {
  await gotoURL(url);
  await waitForPageLoadState();
}

export async function addProductToCart(): Promise<void> {
  await click(`[id='add-button']`);
  await expectElementToBeVisible(viewCartLink());
}

export async function navigateToCart(): Promise<void> {
  await clickAndNavigate(viewCartLink());
  await expectPageToContainURL("/cart");
}