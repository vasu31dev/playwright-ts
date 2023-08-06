import { test } from '@PageSetup';
import * as LoginPage from 'tests/pages/SauceDemoLoginPage';
import * as MiniCart from 'tests/pages/SauceDemoMiniCart';
import * as ProductsPage from 'tests/pages/SauceDemoProductsPage';

test.describe('Sauce demotests for success ful login and add product to cart', () => {
  test('Saucedemo tests - successful login', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    //verifying products page is displayed on successful login
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo tests - Add product to cart', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.addGivenProductToCart(1);
    await MiniCart.verifyMiniCartCount('1');
  });
});
