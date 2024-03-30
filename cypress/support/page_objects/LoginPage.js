export class LoginPage {
    constructor() {
        // Define the CSS classes for the elements
        this.emailTextField = 'input[name="email"]';
        this.passwordTextField = 'input[name="password"]';
        this.loginButton = 'button[data-cy="login-login-btn"]';
        this.errorHeading = 'h2.sc-Jsfmu.hpUphO';
        this.retryButton = 'button[data-btn-type="default"]';
    }

    // Method to login with provided email and password
    login(email, password) {
        cy.get(this.emailTextField).clear().type(email);
        cy.get(this.passwordTextField).clear().type(password);
        cy.get(this.loginButton).click();
    }

    checkErrorMessageAndRetry() {
        cy.get('body').then(($body) => {
            if ($body.find(':contains("Hmm.. Something went wrong.")', { timeout: 10000 }).length > 0) {
                cy.get(this.retryButton).click();
            }
        })
    }

}
export default new LoginPage();