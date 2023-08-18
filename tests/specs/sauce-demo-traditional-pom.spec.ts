import { test } from '@playwright/test';
import { SauceDemoLoginPage } from '../pages/traditional-pom/sauce-demo-login-page-traditional-pom';
import { SauceDemoMinicart } from '../pages/traditional-pom/sauce-demo-mini-cart-traditional-pom';
import { SauceDemoProductsPage } from '../pages/traditional-pom/sauce-demo-products-page-traditional-pom';

test.describe('Saucedemo tests for successful, unsuccessful logins and add product to cart', () => {
  let loginPage;
  let productsPage;
  let miniCart;

  test('Saucedemo test - successful login', async ({ page }) => {
    loginPage = new SauceDemoLoginPage(page);
    await loginPage.navigateToSauceDemoLoginPage();
    await loginPage.logInSuccessfully();

    productsPage = new SauceDemoProductsPage(page);
    //verifying products page is displayed on successful login
    await productsPage.verifyProductsPageDisplayed();
  });

  test('Saucedemo test - Add product to cart', async ({ page }) => {
    loginPage = new SauceDemoLoginPage(page);
    await loginPage.navigateToSauceDemoLoginPage();
    await loginPage.logInSuccessfully();

    productsPage = new SauceDemoProductsPage(page);
    await productsPage.verifyProductsPageDisplayed();
    await productsPage.addGivenProductToCart(1);

    miniCart = new SauceDemoMinicart(page);
    //verifying mini cart count is updated to 1
    await miniCart.verifyMiniCartCount('1');
  });

  test('Saucedemo test - When login is unsuccessful will not display Products Page', async ({ page }) => {
    loginPage = new SauceDemoLoginPage(page);
    await loginPage.navigateToSauceDemoLoginPage();
    await loginPage.failureLogin();
    await loginPage.verifyErrorMessageForFailureLogin();
    //verifying Login is still displayed
    await loginPage.verifyLoginPageisDisplayed();

    productsPage = new SauceDemoProductsPage(page);
    await productsPage.verifyProductsPageNotDisplayed();
  });
});

// This is traditional style of writing tests. It is not recommended to write tests in this style. It is not readable and difficult to maintain.
