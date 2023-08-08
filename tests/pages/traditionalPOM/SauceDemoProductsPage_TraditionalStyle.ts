import { Locator, Page, expect } from '@playwright/test';

export class SauceDemoProductsPage {
  readonly page: Page;
  readonly productsContainer: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsContainer = this.page.locator(`#inventory_container`).nth(0);
  }

  async verifyProductsPageDisplayed() {
    await expect(this.productsContainer).toBeVisible();
  }

  async verifyProductsPageNotDisplayed() {
    await expect(this.productsContainer).toBeHidden();
  }

  async addGivenProductToCart(productNo: number) {
    await this.page.locator(`(//*[@class='inventory_item'])[${productNo}]//*[contains(@id,'add-to-cart')]`).click();
  }
}
