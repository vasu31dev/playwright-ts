test("Apple labels assertion", async ({ page }) => {
  //navigating to site
  await page.goto("https://test.trekbikes.com/us/en_US/");

  //logging into b2b
  await page.click(`//*[@id='my-profile-login']`);
  await page.click(`//*[@id='my-profile-login']/parent::li//a`);
  await expect(page.locator(`id=j_username`)).toBeVisible();
  //entering log in credentials
  await page.fill(`id=j_username`, "qatest_b2b_admin_9@trekbikes.com");
  await page.fill(`id=j_password`, "Test@123");
  await page.click(`//button[@type='submit']//span[contains(text(),'Log in')]`);
  //naviating to b2b as logged user
  await expect(page.locator(`(//*[@id='logout-link'])[last()]`)).toBeVisible();
  await expect(page).toHaveURL(new RegExp("/b2b"));

  //Expanding the sku grid
  async function expandSkuGrid(): Promise<void> {
    const collapsedLocator = page.locator(
      `//*[@id='search-results__products']//*[@qaid='listViewExpandGroup0ChevronCollapsed']`
    );
    // if(await collapsedLocator.isVisible()) {
    await collapsedLocator.click();
    await expect(
      page.locator(
        `//*[@id='search-results__products']//*[@qaid='listViewExpandGroup0Expanded']`
      )
    ).toBeVisible();
    // }
  }

  async function clickingOnAppleLabelToggleToMakeActive(): Promise<void> {
    await page.getByTestId(`sku-grid.sku-apple-labels-button`).nth(0).click();
    const toggleLabelLocator = page.locator(
      `//*[@qaid='apple-label-item.row-0']//input[@type='checkbox']/..`
    );
    if (
      !(await toggleLabelLocator.getAttribute("class"))?.includes("toggled")
    ) {
      await toggleLabelLocator.click();
    } else {
      console.log("Apple label toggle is already active");
    }
  }

  //navigating to PLP
  await page.click(`id=bikesNavLinkB2B-large`);
  await page.click(`id='nav-link-'allantPlusFamilyNavLinkB2B-large`);
  await expect(
    page
      .getByTestId(`plpListViewItemContainer`)
      .or(page.getByTestId(`plpProductCardItem`))
      .nth(0)
  ).toBeVisible();
  await expect(
    page.locator(
      `//*[@id='search-results__products']//*[@id='b2b-off-canvas-facet']`
    )
  ).toBeVisible();

  //clicking grid view icon
  await page
    .locator(
      `//*[@id='search-results__products']//*[@qaid='toggleButton-listview']`
    )
    .nth(0)
    .click();
  await expect(
    page
      .locator(
        `//*[@id='search-results__products']//*[@qaid='plpListViewItemContainer']`
      )
      .nth(0)
  ).toBeVisible();

  //clicking apple labels tab and selecting toggle active for first sku
  expandSkuGrid();
  clickingOnAppleLabelToggleToMakeActive();

  //updating description for apple labels and navigating away
  const appleLabelDescriptionInputLocator = page.locator(
    `//*[@qaid='apple-label-item.input-retailLabelDescription']//input`
  );
  expect(appleLabelDescriptionInputLocator).toBeEditable;
  await appleLabelDescriptionInputLocator.nth(0).fill("apple");
  //accepting alert to leave the apple labels
  //Playwright accepts the alert in default so we wouldn't need the below line of code
  page.on("dialog", async (dialog) => dialog.accept());
  await page.click(`id=bikesNavLinkB2B-large`);
  await page.click(`id='nav-link-'allantPlusFamilyNavLinkB2B-large`);

  //updating the description and statying on the apple lables
  //Expanding the sku grid again
  expandSkuGrid();

  //clicking apple labels tab and selecting toggle active for first sku
  clickingOnAppleLabelToggleToMakeActive();

  await appleLabelDescriptionInputLocator.nth(0).fill("apple");
  //Cancel or dismissing the alert to stay on the apple labels
  page.on("dialog", async (dialog) => {
    console.log("Alert message " + dialog.message());
    dialog.dismiss();
  });
  const appleLabelSaveButton = page
    .getByTestId(`apple-label-button.save`)
    .nth(0);
  expect(appleLabelSaveButton).toBeEnabled;
  await appleLabelSaveButton.click();
  //success toast message verification
  await expect(page.getByTestId(`pdl-toast`).nth(0)).toBeVisible();
  expect(await appleLabelDescriptionInputLocator.nth(0).inputValue()).toEqual(
    "apple"
  );
});
