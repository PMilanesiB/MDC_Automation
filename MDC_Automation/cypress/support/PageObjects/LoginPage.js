import 'cypress-wait-until';

class LoginPage {

    token() {
        const body = cy.request({
            method: 'POST',
            url: 'http://172.16.17.244:2010/Auth/login',
            headers: {
              'Content-Type': 'application/json'
            },
            body: {       
              "Username": "admin",
              "Password": "admin",
            }
          })
          .then((response) => {
        cy.log(response.body.token)
        window.localStorage.setItem('authce9d77b308c149d5992a80073637e4d5', response.body.token)
    })
    }

    navigate() {
        return cy.visit('/')
    }

    forceNavigate(){
        return cy.forceVisit()
    }

    getUsernameInput() {
        return cy.waitUntil(() => cy.get('input[name="Username"]').first())
    }

    getPasswordInput() {
        return cy.waitUntil(() => cy.get('input[name="password"]').first())
    }

    getIntoButton() {
        return cy.waitUntil(() => cy.get('#kt_login_signin_submit').first())
    }

    getLogoImage() {
        return cy.waitUntil(() => cy.get('#kt_brand').first())
    }
}

export default new LoginPage