import { Given, Then, When } from "@wdio/cucumber-framework";
import { PaymentPage } from "../../pages/PaymentPage";
import { Helpers } from "../../utils/helpes";

const paymentPage = new PaymentPage

Given('I am on the payment page', async function () {
    await expect(browser.getUrl()).toContain('/payment');
});

When('I enter my payment details', async function (dataTable) {
    const paymentDetails = dataTable.hashes();
    await Helpers.setValueToElement(paymentPage.nameOnCard, paymentDetails[0]['Name on Card']);
    await Helpers.setValueToElement(paymentPage.cardNumber, paymentDetails[0]['Card Number']);
    await Helpers.setValueToElement(paymentPage.cvc, paymentDetails[0]['CVC']);
    await Helpers.setValueToElement(paymentPage.expiryMonth, paymentDetails[0]['Expiry Month']);
    await Helpers.setValueToElement(paymentPage.expiryYear, paymentDetails[0]['Expiry Year']);  
});

When('I click the Pay and Confirm Order button', async function () {
    await paymentPage.confirmOrder.waitForClickable();
    await paymentPage.confirmOrder.click();
});

Then('I should see a confirmation message', async function () {
    await Helpers.waitForElementToBeDisplayed(paymentPage.confirmationMessage);
    await expect(await browser.getUrl()).toContain('/payment_done');
    const message = await paymentPage.confirmationMessage.getText();
    expect(message).toContain('Congratulations! Your order has been confirmed!');
    console.log(`Confirmation message displayed: ${message}`);
});