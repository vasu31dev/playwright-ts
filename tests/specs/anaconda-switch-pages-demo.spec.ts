import { goBack } from '@ActionUtils';
import { closePage, switchPage, switchToDefaultPage } from '@PageFactory';
import { test } from '@PageSetup';
import {
  clickAboutNavLink,
  clickAnacondaNavLink,
  clickSignInNavLink,
  navigateToAnacondaHomepage,
  verifyAboutPageURL,
  verifyAnacondaHomePageURL,
  verifyAnacondaPageURL,
  verifySignInPageURL,
} from 'tests/pages/preferredPOM/anaconda-home-page';

test.describe('Test to switch and navigate to different pages from Anaconda home page nav links', () => {
  test('Switch pages demo from Anaconda nav links', async () => {
    await navigateToAnacondaHomepage();
    await verifyAnacondaHomePageURL();
    //clicking on About link in footer which opens a new tab
    await clickAboutNavLink();
    //navigating to About us page
    await switchPage(2);
    //verifying the About us page
    await verifyAboutPageURL();

    //navigating back to Anaconda home page
    await switchToDefaultPage();
    //clicking on Sign in link which opens in the same tab
    await clickSignInNavLink();
    await verifySignInPageURL();

    //going back to Anaconda home page from Sign in page
    await goBack();
    await verifyAnacondaHomePageURL();

    //clicking on Anaconda nav link which opens in new tab
    await clickAnacondaNavLink();
    await switchPage(3);
    await verifyAnacondaPageURL();

    //closing About us page
    await closePage(2);

    //closing Anaconda page
    //since there are only 2 pages now, we use page '2' instead of '3'
    await closePage(2);

    //closing the final Anaconda home page
    await closePage(1);
  });
});
