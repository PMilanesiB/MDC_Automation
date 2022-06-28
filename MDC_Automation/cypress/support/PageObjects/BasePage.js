import 'cypress-wait-until';
import { resolveCname } from 'dns';
import { resolve } from 'path';


class BasePage {
    
    searchStatus() {
        cy.xpath("//mat-table/mat-row/mat-cell[11]").then(estadotarea => {
            var estado = estadotarea.text()
            cy.wrap(estado).as('statustask')
           // cy.log('El estado de la tarea dentro de search status es: '+estado)
        })
    }

    waitSpinnerLoggin() {
        cy.xpath("//*[@calss='splash-spinner']").should('not.exist')
    }

    screen() {
        cy.compareSnapshot('Home Page', {
            capture: 'fullPage',
            errorThreshold: 0.0
        });
    }
        waitSpinnerSection(node) {
        cy.xpath("//*[@calss='ngx-overlay ngx-position-absolute loading foreground']").should('not.exist')
           
    }


    waitSpinnerTable(node) {
        cy.xpath("//mat-spinner").should('not.exist')
        
    }

   //Ir a un Nodo del menú
    getNode(node) {
        node = "//*[@id='kt_aside']//a[@class='menu-link menu-toggle ng-star-inserted']//span[contains(text(), '" + node + "')]"
        return cy.waitUntil(() => cy.xpath(node).first())
    }
   //Ir a un Subnodo del menú
    getSubNode(subNode) {
        subNode = "//*[@id='kt_aside']//ul[@class='menu-subnav ng-star-inserted']//span[contains(text(), '" + subNode + "')]"
        return cy.waitUntil(() => cy.xpath(subNode).first())
    }
    
    //Ir a un nodoChild del menú
    getSubNodeChild(subNodeChild) {
        subNodeChild = "//*[@id='kt_aside']//li[@class='menu-item ng-star-inserted']//span[contains(text(), '" + subNodeChild + "')]"
        return cy.waitUntil(() => cy.xpath(subNodeChild).first())
    }
  
    //Boton para agregar puerto
     getNewButton() {
        return cy.waitUntil(() => cy.xpath("//button//span[contains(text(), 'Nuevo')]").first())
    }

    getNextButtonModal() {
        return cy.waitUntil(() => cy.xpath("//form/div[2]/button/span[1]").first())
    }
    getNewModel() {
        return cy.waitUntil(() => cy.xpath("//div//span[contains(text(), 'Marca')]").first())
    }

    getCreateScript() {
        return cy.waitUntil(() => cy.xpath("//a[@mattooltip= 'Generar Script']").first())
    }
    
    getEdit() {
        return cy.waitUntil(() => cy.xpath("//a[@mattooltip='Editar'] ").first())
    }
    getDesactivate() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Desactivar'] ").first())
    }

    getAcceptButton() {
        return cy.waitUntil(() => cy.xpath("//button[contains(text(), 'Aceptar')]").first())
    }

    getCopyButton() {
       return cy.waitUntil(() => cy.xpath("//a[@mattooltip= 'Copiar']").first())
    }
    
    getField(nameField) {
        nameField = "//input[contains(@data-placeholder, '" + nameField + "')]"
        return cy.waitUntil(() => cy.xpath(nameField).first())
    }

    getSelectField(selectField) {
        selectField = "//mat-select//span[contains(text(), '" + selectField + "')]"
        return cy.waitUntil(() => cy.xpath(selectField).first())
    }
    
    getInputComands() {
        return cy.waitUntil(() => cy.xpath("//span[contains(text(),'LeerRegistros (read_registers)')]").first())
    }
    

    getInputOption() {
        return cy.waitUntil(() => cy.xpath("//span/ngx-mat-select-search/div/input").first())
    }
    
    getOptionList(value) {
        value = "//mat-option//span[contains(text(), '" + value + "')]"
        return cy.waitUntil(() => cy.xpath(value).first())
    }
    
    getSaveButton() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Guardar']").first())
    }

    getSearchButton() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Buscar']").first())
    }

    getSearchButtonDevices() {
        return cy.waitUntil(() => cy.xpath("//div[@class='row align-items-center height-title']//button[@mattooltip='Buscar']").first())
    }

    getAssignButton() {
        return cy.waitUntil(() => cy.xpath("//span[@mattooltip='Asignar todos']").first())

    }
    getSaveBrand() {
        return cy.waitUntil(() => cy.xpath("//div/a[@mattooltip='Guardar']").first())
    }
    getInputtask (value) {
        return cy.waitUntil(() => cy.xpath("//span[contains(text(),'" + value +"')]").first())
    }
    

    getSaveButtonModal() {
        return cy.waitUntil(() => cy.xpath("//*[@class='cdk-overlay-pane']//a[@maltooltip= 'Guardar')]").first())
    }

    getSaveButtonModalCommands() {
        return cy.waitUntil(() => cy.xpath("//*[@class='cdk-overlay-pane']//a[@mattooltip= 'Guardar']").first())
    }

    getSaveButtonModal0() {
        return cy.waitUntil(() => cy.xpath("//div[@style='transform: none;']//span[contains(text(), 'Guardar')]"))
    }

    getSaveButtonModal1() {
        return cy.waitUntil(() => cy.xpath("//div[@id='cdk-step-content-1-1']//span[contains(text(), 'Guardar')]").first())
    }

    getSaveButtonModal2() {
        return cy.waitUntil(() => cy.xpath("//div[@id='cdk-step-content-1-2']//span[contains(text(), 'Guardar')]").first())
    }

    getFinishButtonModal() {
        return cy.waitUntil(() => cy.xpath("//span[contains(text(), 'Finalizar')]").first())
    }

    getTooltipSave() {
        return cy.waitUntil(() => cy.xpath("//div[contains(text(), 'Guardado exitosamente')]").first())
    }
    
    getTaskExecuted() {
        return cy.waitUntil(() => cy.xpath("//div[contains(text(), 'La tarea se ejecutó correctamente')]").first())
    }

    getEllipseButton() {
        return cy.waitUntil(() => cy.xpath("//mat-icon").first())
    }

    getSaveContinue() {
        cy.wait(1000)
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Guardar y Continuar']").first())
    }

    getTab(value) {
        value = "//div[@class='mat-tab-label-content'][contains(text(), '" + value + "')]"
        return cy.waitUntil(() => cy.xpath(value).first())
    }

    getAdd() {
        return cy.waitUntil(() => cy.xpath("//i[@class='fa fa-plus']").first())
    }

    getAddDevice() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Agregar Dispositivo']"))
    }

     getModalNewField(field) {
        return cy.waitUntil(() => cy.xpath("//div[@class='cdk-overlay-pane']//input[contains(@data-placeholder,'" + field + "')]").first())
    }

    getModalSaveButton() {
        return cy.waitUntil(() => cy.xpath("//button[@maltooltip='Guardar']").first())
    }
    getSaveTask() {
        return cy.waitUntil(() => cy.xpath("//span[contains(text(),'Guardar')]").first())
    }
    getPlayButton() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Ejecutar']").first())
    }
    getSaveDevice() {
        return cy.waitUntil(() => cy.xpath("//a[@maltooltip='Guardar']").first())
    }

    getDeviceButton () {
        return cy.waitUntil(() => cy.xpath("//input[@id='mat-checkbox-2-input']").first())
    }

    getStatusAgent() {
        return cy.xpath("//mat-table/mat-row/mat-cell[4]")
    }
    getModalTask(value) {
        return cy.xpath("//mat-option/span[contains(text(),'" + value +"')]").first()
    }
    getModalSaveButtonAsociar(field) {
        return cy.waitUntil(() => cy.xpath("//model-associate//a[@mattooltip='Guardar']").first())
    }

    getSaveQueue(field) {
    return cy.waitUntil(() => cy.xpath("//a[@mattooltip='Guardar']").first())
}

    getActivateButton() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Activar']").first())
    }

    getConfigButton() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Configurar']").first())
    }
    
    getFiltros() {
        return cy.waitUntil(() => cy.xpath("//mat-expansion-panel-header[@role='button']").first())
    }

    getFindButton() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Buscar']").first())
    }

    getAceptPopUp() {
        return cy.waitUntil(() => cy.xpath("//button[contains(text(),'Aceptar')]").first())
    }

    getSelectFileButtonModal() {
        return cy.waitUntil(() => cy.xpath("//input[@formcontrolname='driverFile']").first())
    }
    
    getDevicesGroup1(field) {
        return cy.waitUntil(() => cy.xpath("//input[@placeholder='" + field + "']").first())
    }
    
    getInputGroupDevices (value) {
        return cy.waitUntil(() => cy.xpath("//mat-option//span[contains(text(),'" + value + "')]").first())
    }

    getOptionGroup() {
        return cy.waitUntil(() => cy.xpath("//input[@placeholder='Dispositivo']").first())

    }
    


    getModalSelectField(field) {
        if(field.includes("Driver")){
            return cy.waitUntil(() => cy.xpath("//driver-associate//div/span[contains(text(),'Driver')]").first())
        } else {
            return cy.waitUntil(() => cy.xpath("//driver-associate//div/span[contains(text(),'" + field + "')]").first())
        }
    }

    getModalDevicesColas() {
                                           
        return cy.waitUntil(() => cy.xpath("//queue-combo//mat-form-field").first())
    }
    
    getModalTaskDevices(field) {
        return cy.waitUntil(() => cy.xpath("//div[@id='cdk-step-content-0-0']//span[contains(text(),'" + field + "')]").first())
    
    }
    getModalTaskDescrption() {
        return cy.waitUntil(() => cy.xpath("//mat-dialog-container//input[@formcontrolname='Description']").first())
    }

    getModalCommandos() {
        return cy.waitUntil(() => cy.xpath("//mat-chip-list//div//input[@placeholder='Comandos']").first())
    }


    validateStatus() {
        var a
        cy.xpath("//mat-table/mat-row/mat-cell[4]").invoke('text').then((result) => {
            cy.log(result.toString())
            a=result.toString()
            cy.log("VARIABLE A : " + a)

        })

    }

    getScript() {
        cy.xpath("//label").invoke('text').then((script) => {
            cy.log("script del agente1: " + script.toString())
            cy.writeFile('cypress/scriptsPS/scriptInstall.ps1', script.toString())
            cy.readFile('cypress/scriptsPS/scriptInstall.ps1').then(text => { cy.log("texto: " + text) })
            cy.exec("cd").then((result) => {
                var jsonCmd = JSON.stringify(result["stdout"]).split("\"")[1]
                var nircmdPath = jsonCmd + "\\cypress\\nircmd.exe"
                var filePath = jsonCmd + "\\cypress\\scriptsPS\\scriptInstall.ps1"
                var commandLine = nircmdPath + " elevate powershell.exe -File  " + filePath
                cy.exec(commandLine)
            })
            cy.wait(10000)
        })
    }

    deleteManager() {
        cy.exec('net start').then((result) => {
            var allServices = JSON.stringify(result)
            var codService = allServices.split("Agent Service Manager ")[1]
            var codServiceFinal = codService.split("\\r\\n")[0]
            var nameService = "AgentServiceManager_" + codServiceFinal
            cy.exec("elevate sc STOP " + nameService)
            cy.exec("elevate sc DELETE " + nameService)
        })
    }

    getAsociarButton() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Asociar Modelo']").first())
    }

    getSearchButtonModal() {
        return cy.waitUntil(() => cy.xpath("//a[@mattooltip= 'Buscar']").first())
    }

    //Botón nuevo grupo de dispositivos

    getNewDeviceGroup() {
        return cy.waitUntil(() => cy.xpath("//span[contains(text(), 'Nuevo')]").first())
    }

    getSelectField(selectField) {
        selectField = "//mat-select//span[contains(text(), '" + selectField + "')]"
        return cy.waitUntil(() => cy.xpath(selectField).first())
    }
   
    getDriverModal(field) {
        return cy.waitUntil(() => cy.xpath("//model-associate//mat-select//span[contains(text(), 'Modelo')]").first())
    }

    getFilter() {
        return cy.waitUntil(() => cy.xpath("//mat-panel-title").first())
    }

    getResultSearch(selectResult) {
        selectResult = "//mat-cell[contains(text(), '" + selectResult + "')]"
        return cy.waitUntil(() => cy.xpath(selectResult).first())
    }

    getFieldFilter(fieldFilter) {
        fieldFilter = "//input[@data-placeholder = '" + fieldFilter + "']"
        return cy.waitUntil(() => cy.xpath(fieldFilter).first())
    }

    getFieldValue(fieldValue){
        fieldValue = "//mat-cell[contains(text(), '" + fieldValue + "')]/parent::mat-row/mat-cell[4]"
        return cy.waitUntil(() => cy.xpath(fieldValue).first())

    }
    
    getNextButton(){
        
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Siguiente']").first())
    }
    
    getModdaldevice(){
        return cy.waitUntil(() => cy.xpath("//mat-dialog-container//mat-select").first())
    }

    getStatusFilter(){
        return cy.waitUntil(() => cy.xpath("//mat-select//span[contains(text(), 'Pendiente')]").first())
    }
    
    getInputStatus(){
        return cy.waitUntil(() => cy.xpath("//input[contains(@placeholder, 'Estado')]").first())
    }
    
    getOptionAll(){
        return cy.waitUntil(() => cy.xpath("//mat-option//span[contains(text(), 'Todos')]").first())
    }
      
       
    getNextButton1(){
        return cy.waitUntil(() => cy.xpath("//div[@role='tabpanel'][2]//button[2]").first())
    }
    
    getNextButton2(){
        return cy.waitUntil(() => cy.xpath("//div[@role='tabpanel'][3]//button[2]").first())
    }
    
    getCodeTask(){
        return cy.waitUntil(() => cy.xpath("//mat-form-field//input[contains(@data-placeholder, 'Tarea')]").first())
    }
  

    getCodeColum() {
        return cy.waitUntil(() => cy.xpath("//div[@role='button']/div[contains(text(), 'Código')]").first())
    }

    execPoscondition(database, field, value){
        cy.sqlServer(`DELETE FROM ` + database + ` WHERE ` + field + `= '`+ value + `'`).then((result) => {
            expect(result).to.equal("1")
          });
    }
  
}
export default new BasePage