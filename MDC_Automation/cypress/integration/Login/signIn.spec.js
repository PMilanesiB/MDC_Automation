import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/PageObjects/LoginPage";

describe('Login', () => {

        Then('I see MDC logo', () => {
            cy.sqlServer(`SELECT * FROM dbo.Queues WHERE id ='1'`).then((result) => {
                cy.log(result)
              });
            LoginPage.getLogoImage().should('exist', 'Logged in')
        })
                //SELECT * FROM Queues WHERE ID = '1'
})