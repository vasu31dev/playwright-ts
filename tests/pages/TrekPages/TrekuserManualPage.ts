import { expectElementToHaveText, expectPageToContainURL } from "@AssertUtils";
import { getLocatorByTestId } from "@TestUtils";

export async function verifyUserManualPageURL() {
  await expectPageToContainURL("/manuals/");
}

export async function verifyUserManualPageHeader() {
    await expectElementToHaveText(getLocatorByTestId(`editorial-component-header`).nth(0), 'Find manuals by category');
} 