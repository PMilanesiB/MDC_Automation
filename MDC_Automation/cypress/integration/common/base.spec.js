import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/PageObjects/LoginPage";
import BasePage from "../../support/PageObjects/BasePage";
import MainPage from '../../support/PageObjects/components/MainPage';
import ServicesPage from "../../support/Services/ServicesPage";
//import { url } from "wd/lib/commands";


describe('Base', () => {

    //const aleatory = Math.floor(Math.random() *100)+1
    //var valueRandom = aleatory

    Given('I take token whit my {string} and my {string}', () => {
        LoginPage.token()
    })

    Given('I open MDC page on Chrome Browser', () => {
        LoginPage.navigate()
        BasePage.waitSpinnerLoggin()
        //BasePage.screen()
        cy.wait(1000)
        //cy.document().toMatchImageSnapshot()  

        //MainPage.footer()
        //Second Element Screenshot
        //MainPage.menu()
        //eliminar las fotos almacenadas
        //cy.exec("cd cypress/integration/features/ && rmdir __image_snapshots__ /s /q")

    })


    Given('I check services {string}', (service) => {
        if(service.includes("setToken")){
            try{    
                cy.login()
                const token = Cypress.env('token')
            }catch(Exception) {
                cy.log("Primera generación de Token")
            }
        }else{
            ServicesPage.validationService(service)
        }
    })

    When('I complete my {string} and my {string}', (username, password) => {
        LoginPage.getUsernameInput().type(username)
        LoginPage.getPasswordInput().type(password)
        LoginPage.getIntoButton().click()
        //cy.wait(1000)
    })

    When('I go to the Node {string} of the menu', (node) => {
        //cy.wait(1000)
        BasePage.getNode(node).click()
    })

    When('I go to the subNode {string} of the menu', (subNode) => {
        //cy.wait(1000)
        BasePage.getSubNode(subNode).click()
    })

    When('I go to the subNodeChild {string} of the menu', (subNodeChild) => {
        BasePage.getSubNodeChild(subNodeChild).click()
        BasePage.waitSpinnerSection()
    })

    When('I press on New button', () => {
        BasePage.getNewButton().click()
    })

    When('I press on New button Modal', () => {
        BasePage.getNewButton().click()
    })

    When('I type {string} in the field {string}', (value, field) => {
        BasePage.getField(field).type(value)
    })

    When('I type {string} in the elemental field {string}', (value, field) => {
        BasePage.getField(field).type(value)
    })

    When('I select {string} in the field {string}', (value, selectField) => {
        cy.wait(1000)
        BasePage.getSelectField(selectField).click()
        cy.wait(2000)
        BasePage.getInputOption().type(value)
        BasePage.getOptionList(value).click()
        BasePage.waitSpinnerSection()
    })

    When('I press on the Save button', () => {
        BasePage.getSaveButton().click()
        BasePage.waitSpinnerSection()
    })

    When('I press on the Save button of modal', () => {
        BasePage.getSaveButtonModal().click()
        BasePage.waitSpinnerSection()
    })

    When('I press on the Save&Continue', () => {
        BasePage.getEllipseButton().click()
        BasePage.getSaveContinue().click()
        BasePage.waitSpinnerSection()
        //BasePage.getTooltipSave().should('exist', 'The component was created correctly')
    })

    When('I go to {string} tab', (tabName) => {
        cy.wait(3000)
        BasePage.waitSpinnerSection()
        BasePage.getTab(tabName).click({ force: true })
        BasePage.waitSpinnerSection()
    })

    When('I validate that not exist in the {string} database the value {string} for the {string} field', (database, value, field) => {
        cy.sqlServer(`DELETE FROM dbo.` + database + ` WHERE ` + field + `= '` + value + `'`).then((result) => {
            cy.log("Result query delete: " + result)
        });
    })

    Then('I see the menssage that indicate the correctly save', () => {
        BasePage.getTooltipSave().should('exist', 'The component was created correctly')
    })

    Then('I see the menssage that indicate the task was executed correctly', () => {
        BasePage.getTaskExecuted().should('exist', 'La tarea se ejecutó correctamente')
        cy.wait(3000)
    })

    When('I press on New button', () => {
        BasePage.getNewButton().click()
        cy.wait(500)
    })

    Then('I verify that in the {string} database there is a record with the value {string} for the {string} field', (database, value, field) => {
        cy.wait(3000)
        cy.sqlServer(`SELECT ` + field + ` FROM dbo.` + database + ` WHERE ` + field + `= '` + value + `'`).then((result) => {
            expect(result).to.equal(value)
            cy.wait(2000)
        });
    })
    //Inserción de marca en la base de datos
    When('I create db relation in the Brands database the value {string} for the Name field', (value) => {
        cy.sqlServer(`DELETE  FROM dbo.Brands WHERE name='` + value + `'`).then((result) => {
            cy.log("Result query delete precondition: " + result)
        });

        cy.sqlServer(`INSERT INTO dbo.Brands (CreatedDate, CreatedUserId, LastUpdatedDate, LastUpdatedUserId, IsDeleted, 
                    DeletedUserId, DeletedDate, Name, Observation, IsActive)
                    VALUES (GETDATE(),-1,NULL,NULL,0,NULL,NULL,'` + value + `','MarcaAutomation',1);`).then((result) => {
            cy.log("Result query add: " + result)
        });
    });
     //Inserción de modelos asociado a la marca en la base de datos
    When('I create db relation in the Models database the value {string} for the Name field', (value) => {
        cy.sqlServer(`DELETE  FROM dbo.Models WHERE name='` + value + `'`).then((result) => {
            cy.log("Result query delete precondition: " + result)
        });

        cy.sqlServer(`INSERT INTO dbo.Models (CreatedDate, CreatedUserId, LastUpdatedDate, LastUpdatedUserId, IsDeleted, 
                DeletedUserId, DeletedDate, Name, Observation, IsActive, BrandId) 
                VALUES (GETDATE(),-1, NULL, NULL, 0, NULL, NULL,'` + value + `', 'descript',1, (SELECT Id FROM dbo.Brands WHERE name='brandsExample1'));`).then((result) => {
            cy.log("Result query add: " + result)
        });
    });
       //Inserción de cola en la base de datos
       When('I create db relation in the Queue database the value {string} for the Name field', (value) => {
        cy.sqlServer(`DELETE  FROM dbo.Brands WHERE name='` + value + `'`).then((result) => {
            cy.log("Result query delete precondition: " + result)
        });

        cy.sqlServer(`INSERT INTO dbo.Queues (CreatedDate, CreatedUserId, LastUpdatedDate, LastUpdatedUserId, IsDeleted, 
                    DeletedUserId, DeletedDate, Name, Description, PortTypeId)
                    VALUES (GETDATE(),-1,NULL,NULL,0,NULL,NULL,'colaExample1','ColaAutomation',-1);`).then((result) => {
            cy.log("Result query add: " + result)
        });
    });
   
    Then('I filter by {string} for {string}', (value, field) => {
        BasePage.waitSpinnerSection()
        cy.wait(2000)
        BasePage.getFilter().click()
        BasePage.waitSpinnerSection()
        BasePage.getFieldFilter(field).click()
        BasePage.getFieldFilter(field).type(value)
        BasePage.getFindButton().click()
        BasePage.getResultSearch(value)
        cy.wait(2000)
    })

    Then('I check that the agent {string} be active', () => {

            BasePage.waitSpinnerSection()
            cy.xpath("//mat-table/mat-row/mat-cell[4]").invoke('text').then((result) => {
                var a = result.toString()
                if ((a.toString().includes("Script generado"))) {
                    cy.log("El estado del agente es Script generado")
                    cy.wait(90000)
                    BasePage.getFindButton().click()
                    BasePage.waitSpinnerSection()
                    cy.wait(20000)
                    BasePage.getFindButton().click()
                    BasePage.waitSpinnerSection()
                    cy.xpath("//mat-table/mat-row/mat-cell[4]").invoke('text').then((result) => {
                        var e = result.toString()
                        if ((e.toString().includes("Script generado"))) {
                            cy.log("El estado del agente es Script generado")
                            cy.wait(90000)
                            BasePage.getFindButton().click()
                            BasePage.waitSpinnerSection()
                            cy.wait(10000)
                            BasePage.getFindButton().click()
                            BasePage.waitSpinnerSection()
                            cy.xpath("//mat-table/mat-row/mat-cell[4]").invoke('text').then((result) => {
                                var i = result.toString()
                                cy.log("VARIABLE I : " + i)
                                BasePage.getStatusAgent().should('contain', 'Agente activo')
                            })

                        } else {
                            cy.log("El agente se encuentra activado")
                            BasePage.getStatusAgent().should('contain', 'Agente activo')
                        }
                    })
                }
            })
        })

        Given('prueba', () => {
            BasePage.getFullPath()
        })
    })
   
   