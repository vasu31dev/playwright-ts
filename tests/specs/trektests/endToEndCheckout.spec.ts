import { test } from '@PageSetup';
import * as ProductPage from '../../pages/TrekPages/TrekProductPage';
import * as CartPage from '../../pages/TrekPages/TrekCartPage';
import * as GuestLoginPage from '../../pages/TrekPages/TrekGuestLogin';
import * as DeliveryDetailsPage from '../../pages/TrekPages/TrekDeliveryDetails';
import * as DeliveryMethodPage from '../../pages/TrekPages/TrekDeliveryMethodPage';
import * as BillingDetailsPage from '../../pages/TrekPages/TrekBillingDetailsPage';
import * as ReviewOrderPage from '../../pages/TrekPages/TrekReviewOrderPage';
import { assertAllSoftAssertions } from '@AssertUtils';

test.describe('End to End checkout testing as guest', () => {
  test('TREK End to end testing as Guest using Functions', async () => {
    await ProductPage.navigateToproductPage(
      'https://test.trekbikes.com/us/en_US/p/31929/',
      // "https://vvemulapalli:1180%40Bikkina@test.trekbikes.com/us/en_US/p/31929/"
    );
    await ProductPage.addProductToCart();
    await ProductPage.navigateToCart();

    await CartPage.incrementItemQtyInCart();
    await CartPage.navigateToCheckout();

    await GuestLoginPage.enterGuestEmail('abc@gmail.com');
    await GuestLoginPage.navigateToCheckoutAsGuest();

    await DeliveryDetailsPage.fillDeliveryDetails();
    await DeliveryDetailsPage.navigateToDeliveryMethodPage();

    await DeliveryMethodPage.selectFirstDeliveryRetailerOption();
    await DeliveryMethodPage.selectShipToStoreDelievryOption();
    await DeliveryMethodPage.navigateToPaymentDetailsPage();

    await BillingDetailsPage.verifyUserAddressDetails();
    await BillingDetailsPage.enterCardDetails('visa');
    assertAllSoftAssertions(test.info());
    await BillingDetailsPage.navigateToReviewOrderPage();

    await ReviewOrderPage.checkPrivacyPolicyLink();
    await ReviewOrderPage.placeOrder();
  });
});
