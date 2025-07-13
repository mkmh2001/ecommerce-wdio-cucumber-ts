Feature: Place Order

  Scenario: User fills payment details and confirms the order
    Given I am on the payment page
    When I enter the following payment details:
      | Name on Card | Card Number    | CVC | Expiry Month | Expiry Year |
      | Manoj Kumar  | 4111111111111111 | 123 | 12           | 2025        |
    And I click the Pay and Confirm Order button
    Then I should see a confirmation message
