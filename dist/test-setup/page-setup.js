"use strict";
/**
 * Page-setup.ts: This module is responsible for setting up the initial state of a page before each test. It includes a
 * hook that runs before each test, setting the page context. By centralizing these setup operations, it ensures a
 * consistent starting point for each test, improving test reliability. It also exports a base test object with a
 * beforeEach hook already set up. This can be used to define tests with the page context set up.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = void 0;
const tslib_1 = require("tslib");
const test_1 = require("@playwright/test");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return test_1.expect; } });
const vasu_playwright_utils_1 = require("vasu-playwright-utils");
/**
 * A hook that runs before each test, setting the page context. The base test object with a beforeEach hook is already
 * set up. This can be used to define tests with the page context set up.
 *
 * @param {Page} page - The page context provided by Playwright.
 */
exports.test = test_1.test.extend({
    testHook: [
        ({ page }, use) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
            // console.log('BEFORE EACH HOOK FROM FIXTURE');
            (0, vasu_playwright_utils_1.setPage)(page);
            yield use();
            // console.log('AFTER EACH HOOK FROM FIXTURE');
        }),
        { auto: true },
    ],
});
//# sourceMappingURL=page-setup.js.map