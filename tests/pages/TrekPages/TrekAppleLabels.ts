import { click, fill, acceptAlert, dismissAlert } from "@ActionUtils";
import {
  expectElementToContainAttribute,
  expectElementToBeEditable,
  expectElementToBeEnabled,
} from "@AssertUtils";
import { getAttribute } from "@ElementUtils";
import { getLocatorByTestId, getLocator } from "@LocatorUtils";

export async function clickAppleLabelsTab() {
  const AppleLabelsTab = () =>
    getLocatorByTestId(`sku-grid.sku-apple-labels-button`).nth(0);
  await click(AppleLabelsTab());
  await expectElementToContainAttribute(
    getLocator(`#tab-1`).nth(0),
    "class",
    "active"
  );
}

//making apple label toggle active for first sku
export async function clickingOnAppleLabelToggleToMakeActive(): Promise<void> {
  const toggleLabelLocator = getLocator(
    `//*[@qaid='apple-label-item.row-0']//input[@type='checkbox']/..`
  );
  if (!(await getAttribute(toggleLabelLocator, "class"))?.includes("toggled")) {
    await click(toggleLabelLocator);
  } else {
    console.log("Apple label toggle is already active");
  }
}

//updating description for apple labels and navigating away
export async function updateAppleLabelDescription() {
  const appleLabelDescriptionInputLocator = () =>
    getLocator(
      `//*[@qaid='apple-label-item.input-retailLabelDescription']//input`
    );
  await expectElementToBeEditable(appleLabelDescriptionInputLocator().nth(0));
  await fill(appleLabelDescriptionInputLocator().nth(0), "apple");
}

export async function acceptAppleLabelAlert() {
  await acceptAlert(`id='nav-link-'allantPlusFamilyNavLinkB2B-large`);
}

export async function dismissAppleLabelAlert() {
  await dismissAlert(`id='nav-link-'allantPlusFamilyNavLinkB2B-large`);
}

export async function verifyAppleLabelsSaveButtonEnabled() {
  await expectElementToBeEnabled(
    getLocatorByTestId(`apple-label-button.save`).nth(0)
  );
}
