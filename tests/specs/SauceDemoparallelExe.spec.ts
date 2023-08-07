import { test } from '@PageSetup';
import * as LoginPage from 'tests/pages/SauceDemoLoginPage';
import * as ProductsPage from 'tests/pages/SauceDemoProductsPage';

test.describe.configure({ mode: 'parallel' });

test.describe('Sauce demotests for success ful login and add product to cart', () => {
  test('Saucedemo tests - successful login', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.logInSuccessfully();
    //verifying products page is displayed on successful login
    await ProductsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo tests - failure login', async () => {
    await LoginPage.navigateToSauceDemoLoginPage();
    await LoginPage.failureLogin();
    await LoginPage.verifyErrorMessageForFailureLogin();
    await ProductsPage.verifyProductsPageNotDisplayed();
  });
});
