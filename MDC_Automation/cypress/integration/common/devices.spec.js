import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/PageObjects/LoginPage";
import BasePage from "../../support/PageObjects/BasePage";


describe('Devices', () => {
    var cod
   
    When('I press on Save button Queque', () => {
         try{
            //Click asociar
            cy.wait(2000)
            BasePage.waitSpinnerSection()
            BasePage.getSaveQueue().click()
        }catch{
            BasePage.execPoscondition(queues,nameFieldDB,valuePKDB)
        }
    })

    When('I press on add', () => {
        //Click asociar
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getAdd().click()
    })
    When('I press on edit', () => {
        //Click editar agente
        BasePage.getEdit().click()
    })
    
    When('I desactivate the agent', () => {
        //Click desactivar agente
        BasePage.getDesactivate().click()
    })

    When('I press on Add Device', () => {
        //Click asociar
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getAddDevice().click()
    })
           
    When('I press on Asociar button', () => {
        //Click asociar
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getAsociarButton().click()
    })

         
    When('I press on Generar script instalación', () => {
        //Click Generar Script
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getCreateScript().click()
        cy.wait(2000)
        BasePage.waitSpinnerSection()
    
    })

    When('I press on Aceptar button of modal', () => {
        //Click Aceptar
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        cy.wait(2000)
        BasePage.getAcceptButton().click()
        cy.wait(3000)
    })

    When('I press on Copiar', () => {
        //Click para Copiar Script-Sección Agentes
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getCopyButton().click()
        BasePage.getScript()
    })

    When('I press on Copiar and run Script and Delete Manager Service', () => {
        //Click para Copiar Script-Sección Agentes
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getCopyButton().click()
        BasePage.getScript()
        BasePage.deleteManager()
    })

    When('In the Devices modal I select {string} in the field dispositivo', (value) => {
        BasePage.getModdaldevice().click()
        cy.wait(2000)
        BasePage.getOptionGroup().type(value)
        cy.wait(2000)
        BasePage.getInputGroupDevices(value).click()
        cy.wait(2000)

    })

    When('In the modal I select {string} in the field {string}', (value,field) => {
        //seleccion de driver
        BasePage.getModalSelectField(field).click()
        BasePage.getInputOption().click().type(value)
        BasePage.getOptionList(value).click()
    })
     //seleccionar cola dentro de dispositivo
     When('In the devices modal I select the queue {string}', (value) => {
        //seleccion de cola 
        cy.wait(2000)
        BasePage.getModalDevicesColas().click()
        cy.wait(2000)
        BasePage.getInputOption().click().type(value)
        cy.wait(2000)
        BasePage.getOptionList(value).click()
    })

    When('In the devices task modal I select {string} in the field {string}', (value,field) => {
        //seleccion de driver
        BasePage.getModalTaskDevices(field).click()
        BasePage.getModalTask(value).click()
    })
       //modal de creación de tareas
    When('In the devices task modal I type {string} in the field {string}', (value,field) => {
        BasePage.getModalTaskDescrption(field).type(value)
      })

      When('In the devices commands modal I select {string} in the field {string}', (value,field) => {
        cy.wait(2000)
        BasePage.getModalCommandos().click().type(value)
        cy.wait(2000)
        BasePage.getInputComands().click()
        cy.wait(2000)
    })

    When('In the filter modal I type {string} in the field {string}', (value,field) => {
        BasePage.getDevicesGroup1(field).click().type(value)
        BasePage.getInputtask(value).click()

    })
    //

    When('I press on the assign button', () => {
        BasePage.getAssignButton().click()

    })
    When('In the existing modal I type {string} in the field {string}', (value, field) => {
        //seleccion de driver
        BasePage.getModalNewField(field).click()
        BasePage.getModalNewField(field).type(value)
    })

    When('In the drivers modal I select {string} in the field {string}', (value,field) => {
        //seleccion de driver
        BasePage.getDriverModal(field).click()
        BasePage.getInputOption().click().type(value)
        BasePage.getOptionList(value).click()
    })
    
    When('I press on the devices checkbox of the modal', () => {
        BasePage.getDeviceButton().click({force: true})
    })

    When('I press on Save button modal', () => {
        //Guardar
        BasePage.waitSpinnerSection()
        BasePage.getModalSaveButton().click()

        //validacion de asociacion correcta
        BasePage.getTooltipSave().should('exist', 'The component was created correctly')
    })
    
    When('I press on Save Brand', () => {
        //Guardar
        BasePage.waitSpinnerSection()
        BasePage.getSaveBrand().click()

        //validacion de asociacion correcta
        BasePage.getTooltipSave().should('exist', 'The component was created correctly')
    })
    
    When('I press on Save button modal Asociar', () => {
        //Guardar
        BasePage.waitSpinnerSection()
        BasePage.getModalSaveButtonAsociar().click()

    })
       //SaveButtonModalCommands
    
    When('I press on Save button modal Commands', () => {
        //Guardar
        BasePage.waitSpinnerSection()

        BasePage.getSaveButtonModalCommands().click()
    })
      
    When('I press on the save task button', () => {
        //Guardar Tarea
         BasePage.getSaveTask().click()
         cy.wait(3000)
    })

    When('I press on the Save button devices', () => {
        //Guardar
        BasePage.waitSpinnerSection()
        BasePage.getSaveDevice().click({force:true})
        cy.wait(2000)
    })

    When('I press on Next button', () => {
        //Guardar
        BasePage.waitSpinnerSection()
        BasePage.getNextButton().click()
        cy.wait(5000)
    })

    When('I press on Next button of the modal', () => {
        BasePage.waitSpinnerSection()
        BasePage.getNextButtonModal().click()
        cy.wait(3000)
    })

    When('I press on Next button1 of the modal', () => {
        BasePage.getNextButton1().click()
    })

    When('I press on Next button2 of the modal', () => {
        BasePage.getNextButton2().click()
    })

    When('I press on Search button', () => {

        BasePage.waitSpinnerSection()
        BasePage.getSearchButton().click()
    })

    When('I press on Search button devices', () => {
       BasePage.getSearchButtonDevices().click()
        cy.wait(2000)
    })

    When('I press on play button', () => {
        cy.wait(9000)       
        BasePage.getPlayButton().click()
    })

    When('I go to Configuración', ()=> {
        BasePage.waitSpinnerSection()
        BasePage.getConfigButton().click()
        cy.wait(2000)
    })

    When('I press on the Filtros button', ()=> {
        BasePage.waitSpinnerSection()
        BasePage.getFiltros().click()
    })

    When('I enter the default value {string} in the field {string}', (value, fieldValue) => {
        BasePage.waitSpinnerSection()
        BasePage.getFieldValue(fieldValue).clear().type(value)
    })

    When('I activate the driver', () => {
        //Click asociar Driver
        BasePage.waitSpinnerSection()
        BasePage.getActivateButton().click()
        BasePage.getSelectFileButtonModal().attachFile("virtual_a_vm_tcp.1.0.3_fix3CopiaOriginal.zip")
        BasePage.waitSpinnerSection()
        cy.wait(2000)
        BasePage.getSaveButtonModal0().click()
        BasePage.waitSpinnerSection()
        cy.wait(2000)
        BasePage.getSaveButtonModal0().click()
        BasePage.waitSpinnerSection()
        cy.wait(2000)
        BasePage.getSaveButtonModal0().click()
        BasePage.waitSpinnerSection()
        cy.wait(2000)
        BasePage.getFinishButtonModal().click()
        BasePage.waitSpinnerSection()
        cy.wait(3000)
    })

    When('I activate the device driver', () => {
        //Click asociar Driver
        cy.wait(3000)
        BasePage.getActivateButton().click({ force: true })
        cy.wait(3000)
    })

    When('I search the code of the task', () => {
        cy.wait(500)
        BasePage.getCodeColum().dblclick({ force: true })
        cy.wait(500)
        cy.xpath("//mat-table/mat-row/mat-cell[2]").invoke('text').then((codetask) => {
        cy.log(codetask)
        cod=codetask
        })
    })

    When('I search the device task', () => {
        BasePage.getStatusFilter().click()
        BasePage.getInputStatus().type('Todos')
        BasePage.getOptionAll().click()
        cy.log(cod)
        BasePage.getCodeTask().click({ force: true }).type(cod, { force: true })
    })
    
    When('I check the device task is Proceced ok', () => {
        cy.wait(2000)
        BasePage.searchStatus()
        cy.get('@statustask').then((statustask) => {
            cy.log("1- El estado de la solicitud es: " + statustask)
            if (!statustask.includes('Procesado')) {
                cy.log("Esperamos a que se procese la tarea...")
                cy.wait(60000)
                BasePage.searchStatus()
                cy.wait(2000)
                cy.get('@statustask').then((statustask) => {
                    cy.log("2- El estado de la solicitud es: " + statustask)                   
                    if (!statustask.includes('Procesado')) {
                        cy.log('El tiempo de espera es largo debido a que se aguarda el procesamiento de la tarea')
                        cy.wait(180000)
                        BasePage.getFindButton().click()
                        cy.wait(2000)
                        BasePage.searchStatus()
                        cy.wait(2000)
                        cy.get('@statustask').then((statustask) => {
                            if (!statustask.includes('Procesado')) {
                                cy.log('La tarea demoró más de lo esperado y quedó con el estado ' + statustask)
                            }else {
                                cy.log("EL proceso se ha realizado: " + statustask)
                            }
                        }) 
                    }else {
                        cy.log("EL proceso se ha realizado: " + statustask)
                    }
                })
            }else {
                cy.log("EL proceso se ha realizado: " + statustask)
            }
        })
                  
    })                
})



