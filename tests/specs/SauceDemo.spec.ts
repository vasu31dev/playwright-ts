import { test } from '@PageSetup';
import * as LoginPage from 'tests/pages/SauceDemoLoginPage';
import * as MiniCart from 'tests/pages/SauceDemoMiniCart';
import * as ProductsPage from 'tests/pages/SauceDemoProductsPage';

//If you want to run the tests in parallel, you can use the test.describe.configure() method to set the mode to parallel. By default, tests are run sequentially.
test.describe.configure({ mode: 'parallel' });

test.describe('Saucedemo tests for successful login and add product to cart', () => {
  test('Saucedemo tests - Successful login will display Products Page', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    //verifying products page is displayed on successful login
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo test - Add product to cart', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    await ProductsPage.verifyProductsPageDisplayed();
    await ProductsPage.addToCartByProductNumber(1);
    //verifying mini cart count is updated to 1
    await MiniCart.verifyMiniCartCount('1');
  });

  test('Saucedemo test - When login is unsuccessful will not display Products Page', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.failureLogin();
    await LoginPage.verifyErrorMessageForFailureLogin();
    //verifying Login is still displayed
    await LoginPage.verifyLoginPageisDisplayed();
    //verifying Products Page is not displayed
    await ProductsPage.verifyProductsPageNotDisplayed();
  });
});

// This is the preferred way of writing a test. It is more readable and easier to maintain. It is also easier to write tests in this style.
