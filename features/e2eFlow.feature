Feature: End-to-End User Checkout Flow

    Scenario: User completes an entire purchase journey

        Given I am on the login page
        When I enter valid "qa.manojkumar.haveri@gmail.com" and "testMK"
        And I click the login button
        Then I should see the logged in "Manojkumar M H"

        When I add the following products to the cart:
            | Product Name |
            | Blue Top     |
            | Men Tshirt   |
        # Then I should see the following products in the cart:

        When I proceed to checkout
        And I place the order
        Then I should be redirected to payment page

        When I enter my payment details
            | Name on Card | Card Number      | CVC | Expiry Month | Expiry Year |
            | Manoj Kumar  | 4111111111111111 | 123 | 12           | 2025        |
        And I click the Pay and Confirm Order button
        Then I should see a confirmation message

        When I click the logout button
        Then I should be redirected to the login page
