"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMiniCartCount = void 0;
const tslib_1 = require("tslib");
const vasu_playwright_utils_1 = require("vasu-playwright-utils");
const vasu_playwright_utils_2 = require("vasu-playwright-utils");
const miniCartCount = () => (0, vasu_playwright_utils_2.getLocator)(`//*[@id='shopping_cart_container']//span`);
function verifyMiniCartCount(expMiniCartCount) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, vasu_playwright_utils_1.expectElementToHaveText)(miniCartCount(), expMiniCartCount);
    });
}
exports.verifyMiniCartCount = verifyMiniCartCount;
//# sourceMappingURL=sauce-demo-mini-cart.js.map