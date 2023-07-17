import { expectElementToBeVisible } from "@AssertUtils";
import { switchToDefaultPage } from "@PageFactory";
import {
  getLocatorByRole,
  gotoURL,
  waitForPageLoadState,
  click,
  getLocatorByTestId,
  clickAndNavigate,
} from "@TestUtils";

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
  await clickAndNavigate(getLocatorByTestId(`nav-categories-link-viewRetailerLocator-large`));
  await waitForPageLoadState();
}
