import { expectElementToBeVisible } from "@AssertUtils";
import {
  click,
  clickAndNavigate,
  getLocator,
  isElementVisible,
} from "@TestUtils";

//navigating to PLP
export async function navigateToPLP(category: string) {
  const category1 = category.toLowerCase();
  await click(`id=bikesNavLinkB2B-large`);
  await clickAndNavigate(
    `id='nav-link-'${category1}PlusFamilyNavLinkB2B-large`
  );
  // await expectElementToBeVisible(
  //   getLocatorByTestId(`plpListViewItemContainer`).or(
  //     getLocatorByTestId(`plpProductCardItem`)
  //   ).nth(0)
  // );
  await expectElementToBeVisible(
    getLocator(
      `//*[@id='search-results__products']//*[@id='b2b-off-canvas-facet']`
    )
  );
}

//clicking grid view icon
export async function clickGridViewIcon() {
  await click(
    getLocator(
      `//*[@id='search-results__products']//*[@qaid='toggleButton-listview']`
    ).nth(0)
  );

  await expectElementToBeVisible(
    getLocator(
      `//*[@id='search-results__products']//*[@qaid='plpListViewItemContainer']`
    ).nth(0)
  );
}

//Expanding the sku grid
export async function expandSkuGrid(gridNo: number): Promise<void> {
  const collapsedLocator = () =>
    getLocator(
      `//*[@id='search-results__products']//*[@qaid='listViewExpandGroup${
        gridNo - 1
      }ChevronCollapsed']`
    );
  if (await isElementVisible(collapsedLocator())) {
    await click(collapsedLocator());
    await expectElementToBeVisible(
      `//*[@id='search-results__products']//*[@qaid='listViewExpandGroup${
        gridNo - 1
      }Expanded']`
    );
  }
}
