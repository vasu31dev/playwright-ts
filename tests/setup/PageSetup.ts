import { Page, test as baseTest } from '@playwright/test';
import { setPage } from './PageFactory';

/**
 * A hook that runs before each test, setting the page context.
 * @param {Page} page - The page context provided by Playwright.
 */
baseTest.beforeEach(({ page }: { page: Page }) => {
  setPage(page);
});

/**
 * The base test object with a beforeEach hook already set up.
 * This can be used to define tests with the page context set up.
 * @type {import('@playwright/test').TestType}
 */
export const test = baseTest;
