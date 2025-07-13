Feature: Login Functionality
  #testMK
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid "<email>" and "<password>"
    And I click the login button
    Then I should see the logged in "<username>"

    Examples:
      | email                          | password | username       |
      | qa.manojkumar.haveri@gmail.com | testMK   | Manojkumar M H |


# Scenario: Login fails with invalid credentials
#   Given I am on the login page
#   When I enter invalid "<email>" and "<password>"
#   And I click the login button
#   Then I should see an error message

#   Examples:
#       | email                          | password | username       |
#       | qa.manojkumar.haveri@gmil.com | testMK   | Manojkumar M H |


