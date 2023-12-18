"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _pagesetup_1 = require("@pagesetup");
const LoginPage = tslib_1.__importStar(require("../pages/sauce-demo/sauce-demo-login-page"));
const MiniCart = tslib_1.__importStar(require("../pages/sauce-demo/sauce-demo-mini-cart"));
const ProductsPage = tslib_1.__importStar(require("../pages/sauce-demo/sauce-demo-products-page"));
/*
 To run the tests in parallel, you can utilize the test.describe.configure() method to set the mode to 'parallel'.
 By default, the tests will run sequentially when fullyParallel: false is set in playwright.config.
 The tests will not be skipped upon encountering a failure expect when the mode is set to 'serial'.
*/
_pagesetup_1.test.describe.configure({ mode: 'parallel' });
_pagesetup_1.test.describe('Saucedemo tests for successful, unsuccessful logins and add product to cart', () => {
    (0, _pagesetup_1.test)('Saucedemo tests - Successful login will display Products Page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.logInSuccessfully();
        //verifying products page is displayed on successful login
        yield ProductsPage.verifyProductsPageDisplayed();
    }));
    (0, _pagesetup_1.test)('Saucedemo test - Add product to cart', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.logInSuccessfully();
        yield ProductsPage.verifyProductsPageDisplayed();
        yield ProductsPage.addToCartByProductNumber(1);
        //verifying mini cart count is updated to 1
        yield MiniCart.verifyMiniCartCount('1');
    }));
    (0, _pagesetup_1.test)('Saucedemo test - Error message is displayed and Products page is not displayed on failed login', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield LoginPage.navigateToSauceDemoLoginPage();
        yield LoginPage.failureLogin();
        yield LoginPage.verifyErrorMessageForFailureLogin();
        //verifying Login is still displayed
        yield LoginPage.verifyLoginPageisDisplayed();
        //verifying Products Page is not displayed
        yield ProductsPage.verifyProductsPageNotDisplayed();
    }));
});
//# sourceMappingURL=sauce-demo-all-pass.spec.js.map