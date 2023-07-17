import { test } from "@PageSetup";
import * as HomePage from "../../pages/TrekPages/TrekHomePage";
import * as StoreFinderPage from "../../pages/TrekPages/TrekStoreFinderPage";


test("verify store finder functionality", async() => {
    await HomePage.navigateToHomepage();
    await HomePage.clickShopsNavheader();
    await StoreFinderPage.verifyStoreFinderSearchLocationIsAutofilled();
})