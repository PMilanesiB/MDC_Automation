Feature: MDC Create Components

  I want create the elements for run tasks

  @focus

   Scenario Outline: Create Task

    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    And I go to the Node "Herramientas y servicios" of the menu
    And I go to the subNode "Monitoreo" of the menu
    And I go to the subNodeChild "Tareas dispositivos" of the menu
    And I press on New button
    And In the devices task modal I select "Medidor" in the field "Tipo de dispositivo"
    And In the devices task modal I select "Instantánea" in the field "Tipo de tarea"
    And In the devices task modal I type "<desc>" in the field "Descripción"
    And I press on Next button of the modal
    And In the devices commands modal I select "LeerRegistros (read_registers)" in the field "Comandos"
    And I press on Next button1 of the modal
    And I press on Next button2 of the modal
    And I press on the devices checkbox of the modal
    And In the filter modal I type "modeloNoTocarFinal" in the field "Modelos"
    And I press on Search button devices
    And I press on the assign button
    And I press on the save task button
    And I press on the Filtros button
    And I type "<desc>" in the field "Descripción"
    And I press on Search button
    And I search the code of the task
    And I activate the device driver
    And I press on Aceptar button of modal
    And I press on play button
    And I press on Aceptar button of modal
    Then I see the menssage that indicate the task was executed correctly
    And I go to the subNodeChild "Solicitudes dispositivos" of the menu
    And I press on the Filtros button
    And I search the code of the task
    And I search the device task
    And I press on Search button
    And I check the device task is Proceced ok


        Examples:
            | username | password | desc              |
            | admin    | admin    | descriptionFinal1 |