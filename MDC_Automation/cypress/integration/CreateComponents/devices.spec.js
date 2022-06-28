import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/PageObjects/LoginPage";
import BasePage from "../../support/PageObjects/BasePage";


describe('Devices', () => {

    When('I press on add', () => {
        //Click asociar
        BasePage.getAdd().click()
    })
    
    When('In the modal I select {string} in the field {string}', (value,field) => {
        //seleccion de driver
        BasePage.getModalSelectField(field).click()
        BasePage.getInputOption().type(value)
        BasePage.getOptionList(value).click()
    })

    When('In the modal I type {string} in the field {string}', (value,field) => {
        //seleccion de driver
        BasePage.getModalSelectField(field).click()
        BasePage.getModalSelectField(field).type(value)
    })

    When('I press on the Save button of modal', () => {
        //Guardar
        BasePage.getModalSaveButton().click()

        //validacion de asociacion correcta
        BasePage.getTooltipSave().should('exist', 'The component was created correctly')
    })

    When('I activate the driver', () => {
        //Click asociar
        BasePage.getActivateButton().click()
        BasePage.getAceptPopUp().click()
    })

    Then('I verify that in the {string} database there is a record with the value {string} for the {string} field', (database,value,field) => {
        cy.sqlServer(`SELECT * FROM dbo.` + database + ` WHERE ` + field + `= '`+ value + `'`).then((result) => {
            cy.log(result)
            cy.should.equal(result, value, "Don't save in DB")
          });
    })
   
    When('I press on Select file button of modal', () => {
        //Click buscar
        BasePage.getModalSelectField().click()
    })
   
    When('I press on the Search button', () => {
        //Click buscar
        BasePage.getSearchButton().click()
    })
})