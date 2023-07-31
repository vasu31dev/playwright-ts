import { test } from "@PageSetup";
import { click } from "@TestUtils";
import { clickMyAccountIcon, clicklogInText, navigateToHomepage } from "tests/pages/TrekPages/TrekHomePage";
import { logInSuccessfullyAsB2BUser, verifyLogInFieldsAreEmptyAndUnchecked } from "tests/pages/TrekPages/TrekLoginPage";
import { clickAppleLabelsTab, clickingOnAppleLabelToggleToMakeActive, updateAppleLabelDescription, acceptAppleLabelAlert, dismissAppleLabelAlert, verifyAppleLabelsSaveButtonEnabled } from "tests/pages/TrekPages/TrekAppleLabels";
import { navigateToPLP, expandSkuGrid,clickGridViewIcon } from "tests/pages/TrekPages/TrekProductListingPage"

test("Apple labels assertion", async () => {
  //navigating to site
  await navigateToHomepage();

  //logging into b2b
  await clickMyAccountIcon();
  await clicklogInText();
  await verifyLogInFieldsAreEmptyAndUnchecked();
  await logInSuccessfullyAsB2BUser();
  //navigating to PLP
  await navigateToPLP('Allant');
  await clickGridViewIcon()
  await expandSkuGrid(1);
  //Apple labels tab
  await clickAppleLabelsTab();
  await clickingOnAppleLabelToggleToMakeActive();
  await updateAppleLabelDescription();
  //navigating to PLP page to trigger the apple label alert and accepting the alert
  await click(`id=bikesNavLinkB2B-large`);
  // console.log('Alert text is' + await getAlertText());
  await acceptAppleLabelAlert();
  //expanding the sku grid again
  await expandSkuGrid(1);
  //Apple labels tab
  await clickAppleLabelsTab();
  await updateAppleLabelDescription();
  await click(`id=bikesNavLinkB2B-large`);
  await dismissAppleLabelAlert();
  //dismissing the alert stays on the same page
  await verifyAppleLabelsSaveButtonEnabled();

  
  



  

  

  

 

  // await appleLabelDescriptionInputLocator.nth(0).fill("apple");
  // //Cancel or dismissing the alert to stay on the apple labels
  // page.on("dialog", async (dialog) => {
  //   console.log("Alert message " + dialog.message());
  //   dialog.dismiss();
  // });
  // const appleLabelSaveButton = page
  //   .getByTestId(`apple-label-button.save`)
  //   .nth(0);
  // expect(appleLabelSaveButton).toBeEnabled;
  // await appleLabelSaveButton.click();
  // //success toast message verification
  // await expect(page.getByTestId(`pdl-toast`).nth(0)).toBeVisible();
  // expect(await appleLabelDescriptionInputLocator.nth(0).inputValue()).toEqual(
  //   "apple"
  // );
});


