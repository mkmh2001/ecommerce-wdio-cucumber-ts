import { Given, When, Then } from "@wdio/cucumber-framework";
import { Helpers } from "../../utils/helpes";
import { LoginPage } from "../../pages/LoginPage";

const loginPage = new LoginPage();

Given("I am logged in with valid credentials", async function () {
  // Assuming there's a function to log in with valid credentials
  // await this.loginWithValidCredentials();
  await Helpers.waitForElementToBeDisplayed(loginPage.logoutButton);
  console.log(">> User is logged in");
});

When("I click the logout button", async function () {
  // Assuming there's a function to click the logout button
  await Helpers.waitAndClick(loginPage.logoutButton);
});

Then("I should be redirected to the login page", async function () {
  // Verify that the user is logged out by checking the URL or a specific element
  const currentUrl = await browser.getUrl();
  expect(currentUrl).toContain("/login");
  console.log(">> Successfully logged out");
});