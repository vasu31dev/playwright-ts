import { test } from '@PageSetup';
import { clickMyAccountIcon, clicklogInText, navigateToHomepage } from 'tests/pages/TrekPages/TrekHomePage';
import { logInSuccessfullyAsB2BUser } from 'tests/pages/TrekPages/TrekLoginPage';
import {
  hoverOnPriceInfo,
  navigateToproductPage,
  verifyPriceInfoMessageDisplayed,
} from 'tests/pages/TrekPages/TrekProductPage';

test('To test price info information icon in PDP', async () => {
  await navigateToHomepage();
  await clickMyAccountIcon();
  await clicklogInText();
  await logInSuccessfullyAsB2BUser();
  await navigateToproductPage('https://test.trekbikes.com/b2b/us/en_US/p/36956');
  await hoverOnPriceInfo();
  await verifyPriceInfoMessageDisplayed();
});
