import 'cypress-wait-until';

class CreateComponentsPage {

    navigate() {
        return cy.visit('/')
    }

    getUsernameInput() {
        return cy.get('input[name="email"]')
    }

    getPasswordInput() {
        return cy.get('input[name="password"]')
    }

    getIntoButton() {
        return cy.get('#kt_login_signin_submit')
    }

    getLogoImage() {
        return cy.waitUntil(() => cy.get('#kt_brand'))
    }
}

export default new CreateComponentsPage