Feature: Place Order

  Scenario: User places an order after adding products to cart
    Given I am on the cart page with added products
    When I proceed to checkout
    And I place the order
    Then I should be redirected to payment page
