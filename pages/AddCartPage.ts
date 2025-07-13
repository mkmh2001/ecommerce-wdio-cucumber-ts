export class CartPage {

    get cartMessage():ChainablePromiseElement {
        return $('div.modal-content div.modal-body');
    }

    get continueShoppingButton(): ChainablePromiseElement {
        return $(`//button[contains(text(), 'Continue Shopping')]`);
    }

    get  cartBtn(): ChainablePromiseElement {
        return $(`//a[@href='/view_cart']`);
    }

}