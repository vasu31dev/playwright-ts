import { test } from '@PageSetup';
import {
  clickBikeArchiveFooterLunk,
  clickRacingFooterLink,
  clickUserManualsFooterLink,
  navigateToHomepage,
  verifyHomePageMarquee,
} from '../../pages/TrekPages/TrekHomePage';
import { verifyBikeArchiveYearDropDown } from 'tests/pages/TrekPages/TrekBikeArchivepage';
import { verifyUserManualPageHeader, verifyUserManualPageURL } from '../../pages/TrekPages/TrekuserManualPage';
import { verifyPostInRacingPage } from 'tests/pages/TrekPages/TrekRacingPage';
import { closePage, getPage, switchPage, switchToDefaultPage } from '@PageUtils';

test('New window or tab navigation test for bike archve link in footer', async () => {
  await navigateToHomepage();
  await clickBikeArchiveFooterLunk();
  //switching to bike archive tab
  await switchPage(2);
  await verifyBikeArchiveYearDropDown();
  //switching back to home page
  await switchToDefaultPage();
  await verifyHomePageMarquee();
  await clickUserManualsFooterLink();
  await verifyUserManualPageURL();
  await verifyUserManualPageHeader();
  //switching to bike archive paga again
  await switchPage(2);
  await verifyBikeArchiveYearDropDown();
  //clicking on Racing footer link
  await clickRacingFooterLink();
  await switchPage(3);
  await verifyPostInRacingPage();

  //closing bike archive tab
  await switchPage(2);
  console.log('Page title ' + (await getPage().title()));
  await closePage(2);
  // await getPage().pause();
  //closing Raccing page tab
  //page 3 doesn't work because now there are only 2 pages/tabs
  // await switchPage(3);
  await switchPage(2);
  console.log('Page title ' + (await getPage().title()));
  await closePage(2);
  // await getPage().pause();
  //closing user manuals page tab
  await switchPage(1);
  console.log('Page title ' + (await getPage().title()));
  await closePage(1);
  // await getPage().pause();
});
