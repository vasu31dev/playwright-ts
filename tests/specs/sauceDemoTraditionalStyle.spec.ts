import { test } from '@playwright/test';
import { SauceDemoLoginPage } from 'tests/pages/SauceDemoLogInPage_TraditionalStyle';
import { SauceDemoMinicart } from 'tests/pages/SauceDemoMiniCart_TraditionalStyle';
import { SauceDemoProductsPage } from 'tests/pages/SauceDemoProductsPage_TraditionalStyle';

test.describe('Sauce demotests for success ful login and add product to cart', () => {
  let loginPage;
  let productsPage;
  let miniCart;

  test('Saucedemo tests - successful login', async ({ page }) => {
    loginPage = new SauceDemoLoginPage(page);
    await loginPage.navigateToSauceDemoLoginPage();
    await loginPage.logInSuccessfully();

    productsPage = new SauceDemoProductsPage(page);
    //verifying products page is displayed on successful login
    await productsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo tests - Add product to cart', async ({ page }) => {
    loginPage = new SauceDemoLoginPage(page);
    await loginPage.navigateToSauceDemoLoginPage();
    await loginPage.logInSuccessfully();

    productsPage = new SauceDemoProductsPage(page);
    await productsPage.addGivenProductToCart(1);

    miniCart = new SauceDemoMinicart(page);
    await miniCart.verifyMiniCartCount('1');
  });
});
