import { expectElementToHaveText } from '@AssertUtils';
import { getLocator } from '@LocatorUtils';

const miniCartCount = () =>
  getLocator(`//*[@id='shopping_cart_container']//span`);

export async function verifyMiniCartCount(expMiniCartCount: string) {
  await expectElementToHaveText(miniCartCount(), expMiniCartCount);
}
