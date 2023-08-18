import { click } from 'utils/action-utils';
import { expectElementToBeHidden, expectElementToBeVisible } from 'utils/assert-utils';
import { getLocator } from 'utils/locator-utils';

const productsContainer = () => getLocator(`#inventory_container`).nth(0);

export async function verifyProductsPageDisplayed() {
  await expectElementToBeVisible(productsContainer());
}

export async function verifyProductsPageNotDisplayed() {
  await expectElementToBeHidden(productsContainer());
}

export async function addToCartByProductNumber(productNo: number) {
  await click(getLocator(`(//*[@class='inventory_item'])[${productNo}]//*[contains(@id,'add-to-cart')]`));
}
