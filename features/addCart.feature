Feature: Add to Cart

  Scenario: User adds multiple products to the cart
    Given I am on the home page
    When I add the following products to the cart:
      | Product Name |
      | Blue Top     |
      | Men Tshirt   |
    And I view the cart
    Then I should see the following products in the cart:
      | Product Name |
      | Blue Top     |
      | Men Tshirt   |
