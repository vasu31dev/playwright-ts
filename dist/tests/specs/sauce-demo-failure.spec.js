"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _pagesetup_1 = require("@pagesetup");
const LoginPage = tslib_1.__importStar(require("../pages/sauce-demo/sauce-demo-login-page"));
const ProductsPage = tslib_1.__importStar(require("../pages/sauce-demo/sauce-demo-products-page"));
/*
 To run the tests sequentially and skip the remaining tests in the spec file upon encountering the first failure,
 you can use the test.describe.configure() method to set the mode to 'serial'.
 By default, the tests will run sequentially if fullyParallel: false is set in `playwright.config`, and the tests will not be skipped upon failure.
 */
_pagesetup_1.test.describe.configure({ mode: 'serial' });
_pagesetup_1.test.describe('Saucedemo tests failure and skip cases', () => {
    // This test is expected to fail due to incorrect login credentials. Review the report to analyze the failure details.
    (0, _pagesetup_1.test)('Saucedemo tests - Failure test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.failureLogin();
        //verifying products page is displayed only on successful login
        yield ProductsPage.verifyProductsPageDisplayed();
    }));
    // This test will be skipped because the mode is set to 'serial' and the preceding test is expected to fail.
    (0, _pagesetup_1.test)('Saucedemo tests - Successful test that will be skipped due to previous test failure', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.logInSuccessfully();
        //verifying products page is displayed only on successful login
        yield ProductsPage.verifyProductsPageDisplayed();
    }));
});
//# sourceMappingURL=sauce-demo-failure.spec.js.map