import { test } from '@PageSetup';
import * as HomePage from '../../pages/TrekPages/TrekHomePage';
import * as StoreFinderPage from '../../pages/TrekPages/TrekStoreFinderPage';

test.describe('verify store finder functionality', () => {
  test('verify store finder functionality', async () => {
    await HomePage.navigateToHomepage();
    await HomePage.clickShopsNavheader();
    await StoreFinderPage.verifyStoreLocatorPageHeader();
    await StoreFinderPage.verifyStoreFinderSearchLocationIsAutofilled();
    // await StoreFinderPage.typeZipCodeintosearchLocation('A1A 1A1');
    // await StoreFinderPage.verifyAutoSearchResultsDisplayed();
    // await StoreFinderPage.clickAutoSearchResult(1)
    // await StoreFinderPage.verifyStoreResultsDisplayed();
  });
});
