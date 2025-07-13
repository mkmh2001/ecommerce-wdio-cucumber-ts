import { Given, Then, When } from "@wdio/cucumber-framework";
import { LoginPage } from "../../pages/LoginPage";
import { Helpers } from "../../utils/helpes";

const loginPage = new LoginPage();

Given("I am on the login page", async function () {
  await browser.url("https://automationexercise.com/login");
  console.log(">> Navigated to the login page");
});

When(
  "I enter valid {string} and {string}",
  async function (email: string, password: string) {
    await loginPage.addLoginCredentials(email, password);
    console.log(`>> Logged in with email: ${email}`);
  }
);

When("I click the login button", async function () {
  await Helpers.waitAndClick(loginPage.loginButton);
  console.log(">> Clicked the login button");
});

Then("I should see the logged in {string}", async function (username: string) {
  await Helpers.waitForElementToBeDisplayed(loginPage.loginSuccessText);
  const loggedInUserDetails = await loginPage.loginSuccessText.getText();
  console.log(`Logged in username: ${loggedInUserDetails}`);
  expect(loggedInUserDetails).toContain(username);
});


