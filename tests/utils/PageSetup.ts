import { test } from '@playwright/test';
import { setPage } from './PageFactory';

test.beforeEach(({ page }) => {
    setPage(page);
});
