import { goBack } from 'utils/action-utils';
import { closePage, switchPage, switchToDefaultPage } from 'utils/page-utils';
import { test } from 'setup/page-setup';
import {
  clickFacebookInstagramFooterLink,
  clickFacebookMetaQuestFooterLink,
  clickFacebookPrivacyPolicyFooterLink,
  navigatetoFacebookHomePage,
  verifyFacebookPageURL,
  verifyInstagaramPageURL,
  verifyMetaQuestpageURL,
  verifyPrivacyPolicyPageURL,
} from '../pages/preferred-pom/facebook-page';

test.describe('test to switch and navigate to different pages from facebook footer links', () => {
  test('Switch pages demo from facebook footer links', async () => {
    await navigatetoFacebookHomePage();
    await verifyFacebookPageURL();
    //clicking on instagram link in footer which opens a new tab
    await clickFacebookInstagramFooterLink();
    //navigating to Instagram page
    await switchPage(2);
    //verifying the instagram page
    await verifyInstagaramPageURL();

    //navigating back to Facebook page
    await switchToDefaultPage();
    //clicking on Privacy policy link which opens in the same tab
    await clickFacebookPrivacyPolicyFooterLink();
    await verifyPrivacyPolicyPageURL();

    //going back to facebook page from Privacy policy page
    await goBack();
    await verifyFacebookPageURL();

    //clicking on Meta Quest footer link which opens in new tab
    await clickFacebookMetaQuestFooterLink();
    await switchPage(3);
    await verifyMetaQuestpageURL();

    //closing Instagram page
    await closePage(2);

    //closing Meta quest page
    //since there are only 2 pages now, we use page '2' instead of '3'
    await closePage(2);

    //closing the final facebook page
    await closePage(1);
  });
});
