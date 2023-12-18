"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addToCartByProductNumber = exports.verifyProductsPageNotDisplayed = exports.verifyProductsPageDisplayed = void 0;
const tslib_1 = require("tslib");
const vasu_playwright_utils_1 = require("vasu-playwright-utils");
const vasu_playwright_utils_2 = require("vasu-playwright-utils");
const vasu_playwright_utils_3 = require("vasu-playwright-utils");
const productsContainer = () => (0, vasu_playwright_utils_3.getLocator)(`#inventory_container`).nth(0);
const addToCartButton = `(//*[@class='inventory_item'])[%s]//*[contains(@id,'add-to-cart')]`;
function verifyProductsPageDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, vasu_playwright_utils_2.expectElementToBeVisible)(productsContainer(), { timeout: 1000 });
    });
}
exports.verifyProductsPageDisplayed = verifyProductsPageDisplayed;
function verifyProductsPageNotDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, vasu_playwright_utils_2.expectElementToBeHidden)(productsContainer());
    });
}
exports.verifyProductsPageNotDisplayed = verifyProductsPageNotDisplayed;
function addToCartByProductNumber(productNo) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, vasu_playwright_utils_1.click)(addToCartButton.replace('%s', productNo.toString()));
    });
}
exports.addToCartByProductNumber = addToCartByProductNumber;
//# sourceMappingURL=sauce-demo-products-page.js.map