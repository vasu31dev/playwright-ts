import { expectElementToBeVisible } from "@AssertUtils";
import {
  getLocatorByRole,
  gotoURL,
  waitForPageLoadState,
  click,
  getLocatorByTestId,
  clickAndNavigate,
  getLocator,
  isElementVisible,
} from "@TestUtils";

import { expect } from "@playwright/test";
import { navigateToproductPage } from "./TrekProductPage";

export async function navigateToHomepage(): Promise<void> {
  await gotoURL("https://test.trekbikes.com/us/en_US");
  await waitForPageLoadState();
}

export async function clickBikeArchiveFooterLunk() {
  await click(getLocatorByRole("link", { name: "Bike archive" }));
}

export async function verifyHomePageMarquee() {
  await expectElementToBeVisible(`#comp_HomepageMarqueesCollectionUS`);
}

export async function clickUserManualsFooterLink() {
  await click(`#link_OwnersManualPage`);
  await waitForPageLoadState();
}

export async function clickShopsNavheader() {
  await clickAndNavigate(
    getLocatorByTestId(`nav-categories-link-viewRetailerLocator-large`)
  );
  await waitForPageLoadState();
}

export async function clickRacingFooterLink() {
  await click(`#insideTrekRacingFooterLink`);
  await waitForPageLoadState();
}

export async function clickMyAccountIcon() {
  await click(`#my-profile-login`);
}

export async function clicklogInText() {
  await clickAndNavigate(getLocator(`//a[contains(@href,'/login')]`).nth(0));
  await waitForPageLoadState();
}

export async function clickTrekLogoIfDisplayed() {
  const trekLogo = `#logo-go-to-home-large`;
  if(await isElementVisible(trekLogo)) {
    await clickAndNavigate(trekLogo, {loadState: "load"});
  }
}
