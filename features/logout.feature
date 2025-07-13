  Scenario: User should be able to logout successfully
    Given I am logged in with valid credentials
    When I click the logout button
    Then I should be redirected to the login page