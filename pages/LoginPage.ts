import { $ } from '@wdio/globals';
import { Helpers } from '../utils/helpes';

export class LoginPage {


    get loginEmail(): ChainablePromiseElement {
        return $('//input[@data-qa = "login-email"]');
    }
    
    get loginPassword(): ChainablePromiseElement {
        return $('//input[@data-qa = "login-password"]');
    }

    get loginButton(): ChainablePromiseElement {
        return $('//button[@data-qa = "login-button"]');
    }

    get loginSuccessText(): ChainablePromiseElement {
        return $('(//ul[@class = "nav navbar-nav"]//li)[last()]//a');
    }

    get logoutButton(): ChainablePromiseElement {
        return $('//a[@href = "/logout"]');
    }

    public async addLoginCredentials(email: string, password: string) {
        await Helpers.setValueToElement(this.loginEmail, email);
        await Helpers.setValueToElement(this.loginPassword, password);
    }
    
}