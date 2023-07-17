import { test } from "@PageSetup";
import {navigateToHomepage, clickBikeArchiveFooterLunk, verifyHomePageMarquee, clickUserManualsFooterLink } from "../../pages/TrekPages/TrekHomePage";
import { verifyBikeArchiveYearDropDown } from "tests/pages/TrekPages/TrekBikeArchivepage";
import {verifyUserManualPageURL, verifyUserManualPageHeader} from "../../pages/TrekPages/TrekuserManualPage"
import { switchPage, switchToDefaultPage } from "@PageFactory";

test("New window or tab navigation test for bike archve link in footer", async()=>{
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
})


