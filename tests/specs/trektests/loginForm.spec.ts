import { test } from '@PageSetup';
import {
  clickMyAccountIcon,
  clickTrekLogoIfDisplayed,
  clicklogInText,
  navigateToHomepage,
} from '../../pages/TrekPages/TrekHomePage';
import {
  fillAndCheckLogInDetails,
  verifyLogInFieldsAreEmptyAndUnchecked,
  verifyLogInFieldsAreNotEmptyAndChecked,
} from '../../pages/TrekPages/TrekLoginPage';
import { navigateToproductPage } from 'tests/pages/TrekPages/TrekProductPage';

test.describe('Verify login page', () => {
  test('to verify login forms are empty and unchecked on default', async () => {
    await navigateToHomepage();
    await clickMyAccountIcon();
    await clicklogInText();
    await verifyLogInFieldsAreEmptyAndUnchecked();
    await fillAndCheckLogInDetails();
    await verifyLogInFieldsAreNotEmptyAndChecked();
  });

  test('Elememts visibility testing in login page', async () => {
    await navigateToproductPage('https://test.trekbikes.com/us/en_US/p/31929/');
    await clickTrekLogoIfDisplayed();
  });
});
