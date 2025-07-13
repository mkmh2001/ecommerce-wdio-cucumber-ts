import { Given, Then, When } from "@wdio/cucumber-framework";
import { Helpers } from "../../utils/helpes";
import { CartPage } from "../../pages/AddCartPage";
import { PlaceOrderPage } from "../../pages/PlaceOrderPage";

const cartPage = new CartPage();
const placeOrderPage = new PlaceOrderPage();

Given("I am on the home page", async () => {
  await browser.url("/");
});

When("I add the following products to the cart:", async (dataTable) => {
  const products = dataTable.rawTable.slice(1).map((row) => row[0]);
  for (const product of products) {
    const productBase = await $(
      `//p[contains(text(), "${product}")]/ancestor::div[contains(@class , "product")]`
    );
    await productBase.waitForDisplayed();
    await productBase.moveTo(); // Move to the product element to trigger hover effects.
    await browser.pause(1500); // Wait for the UI to load properly.
    
    // Click "Add to cart" inside the overlay-content of this product
    const addToCartBtn = await productBase.$(
      `.//div[contains(@class, "overlay-content")]//a[contains(@class, "add-to-cart")]`
    );
    await addToCartBtn.waitForClickable({timeout: 5000});
    await addToCartBtn.click();

    await Helpers.waitForElementToBeDisplayed(cartPage.cartMessage);
    const cartMessageText = await cartPage.cartMessage.getText();
    console.log(`Cart message: ${cartMessageText}`);
    await expect(cartMessageText).toContain(
      `Your product has been added to cart.`
    );
    await Helpers.waitAndClick(cartPage.continueShoppingButton);
  }
  await Helpers.waitAndClick(cartPage.cartBtn);
});


Then("I should see the following products in the cart:", async function (dataTable) {
  await Helpers.waitAndClick(cartPage.cartBtn);
  await expect(browser.getUrl()).toContain("/view_cart");
  await Helpers.waitForElementToBeDisplayed(placeOrderPage.checkoutBtn);

  const products = dataTable.rawTable.slice(1).map((row) => row[0]);

  for (const product of products) {
    const productElement = await $(`//p[contains(text(), '${product}')]`);
    await expect(productElement).toBeDisplayed();
  }
});




