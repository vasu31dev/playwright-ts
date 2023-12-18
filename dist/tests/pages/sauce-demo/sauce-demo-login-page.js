"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLoginPageisDisplayed = exports.verifyErrorMessageForFailureLogin = exports.failureLogin = exports.logInSuccessfully = exports.navigateToSauceDemoLoginPage = void 0;
const tslib_1 = require("tslib");
const vasu_playwright_utils_1 = require("vasu-playwright-utils");
const sauce_demo_test_data_1 = require("../../testdata/sauce-demo-test-data");
const vasu_playwright_utils_2 = require("vasu-playwright-utils");
const vasu_playwright_utils_3 = require("vasu-playwright-utils");
const userName = `#user-name`;
const password = () => (0, vasu_playwright_utils_3.getLocator)(`#password`).or((0, vasu_playwright_utils_3.getLocatorByPlaceholder)('Password', { exact: true }));
const login = () => (0, vasu_playwright_utils_3.getLocatorByRole)('button', { name: 'Login' });
const errorMessage = `//*[contains(@class,'error-message')]`;
function navigateToSauceDemoLoginPage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, vasu_playwright_utils_1.gotoURL)('https://www.saucedemo.com/');
    });
}
exports.navigateToSauceDemoLoginPage = navigateToSauceDemoLoginPage;
function logInSuccessfully() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, vasu_playwright_utils_1.fill)(userName, sauce_demo_test_data_1.sauceDemoCredentials.username);
        yield (0, vasu_playwright_utils_1.fill)(password(), sauce_demo_test_data_1.sauceDemoCredentials.password);
        yield (0, vasu_playwright_utils_1.clickAndNavigate)(login());
    });
}
exports.logInSuccessfully = logInSuccessfully;
function failureLogin() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, vasu_playwright_utils_1.fill)(userName, sauce_demo_test_data_1.failureLoginCredentials.username);
        yield (0, vasu_playwright_utils_1.fill)(password(), sauce_demo_test_data_1.failureLoginCredentials.password);
        yield (0, vasu_playwright_utils_1.click)(login());
    });
}
exports.failureLogin = failureLogin;
function verifyErrorMessageForFailureLogin() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, vasu_playwright_utils_2.expectElementToBeVisible)(errorMessage);
    });
}
exports.verifyErrorMessageForFailureLogin = verifyErrorMessageForFailureLogin;
function verifyLoginPageisDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, vasu_playwright_utils_2.expectElementToBeVisible)(userName);
    });
}
exports.verifyLoginPageisDisplayed = verifyLoginPageisDisplayed;
//# sourceMappingURL=sauce-demo-login-page.js.map