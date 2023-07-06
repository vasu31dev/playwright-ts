import { test as baseTest } from '@playwright/test';
import { setPage } from './PageFactory';

baseTest.beforeEach(({ page }) => {
    setPage(page);
});

export const test = baseTest;