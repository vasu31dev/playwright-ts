import { click, clickAndNavigate } from '@ActionUtils';
import { expectElementToHaveText } from '@AssertUtils';
import { getText } from '@ElementUtils';

// const qtyText = () => getLocatorByTestId(`cart-product-quantity`)

export async function navigateToCheckout() {
  await clickAndNavigate(`#cartCheckout`);
}

export async function incrementItemQtyInCart() {
  // const qtyBeforeIncrement = parseInt(await getText(qtyText()));
  const qtyBeforeIncrement = parseInt(
    await getText(`//*[@qaid='cart-product-quantity']`),
  );
  await click(`//*[contains(@class,'increase-button')]`);
  await expectElementToHaveText(
    `//*[@qaid='cart-product-quantity']`,
    (qtyBeforeIncrement + 1).toString(),
  );
}
