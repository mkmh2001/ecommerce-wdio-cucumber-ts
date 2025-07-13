export class PlaceOrderPage {
  get checkoutBtn(): ChainablePromiseElement {
    return $(`a.check_out`);
  }

  get addedCartItems(): ChainablePromiseArray {
    return $$("table#cart_info_table tbody tr");
  }

  get placeOrderBtn(): ChainablePromiseElement {
    return $(`//a[@href = "/payment"]`);
  }
}
