import { Given, Then, When } from "@wdio/cucumber-framework";
import { PlaceOrderPage } from "../../pages/PlaceOrderPage";
import { Helpers } from "../../utils/helpes";
import { PaymentPage } from "../../pages/PaymentPage";

const placeOrderPage = new PlaceOrderPage();
const paymentPage = new PaymentPage();

Given("I am on the cart page with added products", async function () {
  await expect(browser.getUrl()).toContain("/view_cart");
  const addedItemsLength = await placeOrderPage.addedCartItems.length;
  expect(addedItemsLength).toBeGreaterThan(0);
});

When("I proceed to checkout", async function () {
  await Helpers.waitAndClick(placeOrderPage.checkoutBtn);
    await Helpers.waitforElementToBePresentInDOM(placeOrderPage.placeOrderBtn);
    await expect(await browser.getUrl()).toContain("/checkout");
});   

When("I place the order", async function () {
  await Helpers.waitforElementToBePresentInDOM(placeOrderPage.placeOrderBtn);
  await Helpers.scrollToElement(placeOrderPage.placeOrderBtn);
    await Helpers.waitAndClick(placeOrderPage.placeOrderBtn);
    console.log("Order placed successfully");
});

Then("I should be redirected to payment page", async function () {
    await expect(await browser.getUrl()).toContain("/payment");
});