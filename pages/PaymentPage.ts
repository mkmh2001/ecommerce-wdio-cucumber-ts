export class PaymentPage {
    get confirmOrder() {
        return $(`button#submit`);
    }

    get nameOnCard(): ChainablePromiseElement {
        return $(`input[name = 'name_on_card']`);
    }

    get cardNumber(): ChainablePromiseElement {
        return $(`input[name = 'card_number']`);
    }

    get cvc(): ChainablePromiseElement {
        return $(`input[name = 'cvc']`);
    }

    get expiryMonth(): ChainablePromiseElement {
        return $(`input[name = 'expiry_month']`);
    }

    get expiryYear(): ChainablePromiseElement {
        return $(`input[name = 'expiry_year']`);
    }

    get confirmationMessage(): ChainablePromiseElement {
        return $(`//h2[@data-qa = "order-placed"]/following::p`);
    }

}