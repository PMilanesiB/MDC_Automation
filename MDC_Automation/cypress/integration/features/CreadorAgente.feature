  Feature: MDC Create Components

  I want create the elements for run tasks

  @focus
  
  Scenario Outline: Create Agents
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    And I go to the Node "Sistema" of the menu
    And I go to the subNode "Comunicación - Motor MDC" of the menu
    And I go to the subNodeChild "Agentes" of the menu
    And I validate that not exist in the "Agents" database the value "<Name>" for the "Name" field
    And I press on New button
    And I type "<Name>" in the field "Nombre"
    And I type "descripción" in the field "Descripción"
    And I select "32 bits" in the field "64 bits"
    And I press on the Save&Continue
    And I go to "Puertos" tab
    And I press on add
    And I select "TCP/IP" in the field "Tipo de Puerto"
    And I select "colaNoTocar" in the field "Ninguno"
    And I press on the Save button devices
    Then I see the menssage that indicate the correctly save
    And I go to "Windows" tab
    And I press on Generar script instalación
    And I press on Aceptar button of modal
    And I press on the Save&Continue
    And I press on Copiar
    And I press on Save Brand
    Then I filter by "<Name>" for "Nombre"
    And I check that the agent "<Name>" be active

    Examples:
      | username | password | Name         |
      | admin    | admin    | finalAgente1 |