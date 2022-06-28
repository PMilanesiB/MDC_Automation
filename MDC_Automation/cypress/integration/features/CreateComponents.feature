Feature: MDC Create Components

  I want create the elements for run tasks
  
  @focus  
  
  Scenario Outline: Create Driver
    Given I take token whit my "<username>" and my "<password>"
    And I open MDC page on Chrome Browser
    #When I complete my "<username>" and my "<password>"
    And I go to the Node "Sistema" of the menu
    And I go to the subNode "Drivers" of the menu
    And I go to the subNodeChild "Drivers" of the menu
    And I press on New button
    And I validate that not exist in the "Drivers" database the value "<code>" for the "code" field
    And I type "<code>" in the field "Código"
    And I type "vehiculo-" in the field "Nombre"
    And I type "1" in the field "Versión"
    And I type "componente-" in the field "Componente"
    And I press on the Save&Continue
    And I go to "Modelos" tab
    And I press on Asociar button
    And In the modal I select "modelo-22-18-04-01" in the field "Modelo"
    And I press on Save button modal Asociar
    And I press on the Save button
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Drivers" database there is a record with the value "<code>" for the "code" field
    And I filter by "<code>" for "Código"
    And I activate the driver


    Examples:
      | username | password | code |
      | admin    | admin    | otrb |




  Scenario Outline: Create Queue
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    #When I complete my "<username>" and my "<password>"
    And I go to the Node "Sistema" of the menu
    And I go to the subNode "Comunicación - Motor MDC" of the menu
    And I go to the subNode "Colas" of the menu
    And I press on New button
    And I type "cola1z" in the field "Nombre"
    And I type "descript" in the field "Descripción"
    And I select "TCP/IP" in the field "Tipo de Puerto"
    And I press on Save button Queque
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Queues" database there is a record with the value "cola1z" for the "name" field

  Examples:
      | username | password |
      | admin    | admin    |



 Scenario Outline: Create Categories
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    #When I complete my "<username>" and my "<password>"
    #And I go to the Node "Sistema" of the menu
    And I go to the subNode "Drivers" of the menu
    And I go to the subNode "Categorías" of the menu
    And I press on New button
    And I type "vehiculo3" in the field "Nombre"
    And I select "Parameters" in the field "Base de datos Mongo"
    And I press on the Save button
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Categories" database there is a record with the value "vehiculo3" for the "name" field

 
  Examples:
      | username | password |
      | admin    | admin    |
  

 
  @focus
   Scenario Outline: Create Devices
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    And I go to the Node "Sistema" of the menu
    And I go to the subNode "Drivers" of the menu
    And I go to the subNodeChild "Dispositivos" of the menu
    And I press on New button
    And I type "codmar3" in the field "Código"
    And I type "dispositivoconcat3" in the field "Nombre"
    And I select "Medidor" in the field "Tipo de dispositivo"
    And I select "vehiculo" in the field "Modelo"
    And I type "1" in the field "Observaciones"
    And I select "ab6" in the field "Dispositivo maestro"
    And I press on the Save&Continue
    And I press on add 
    And In the modal I select "lun4" in the field "Driver"
    And In the devices modal I select the queue "colaconcat2"
    And I press on Save button modal Commands
    And I go to Configuración
    And I enter the default value "172.25.1.28" in the field "remote_ip"
    And I enter the default value "0.0.0.0" in the field "local_ip"
    And I press on Next button
    And I press on Next button
    And I press on Next button
    And I press on the Save button
    Then I verify that in the "Devices" database there is a record with the value "codmar3" for the "code" field
    And I activate the device driver
    And I press on Aceptar button of modal
    And I press on Aceptar button of modal
    And I go to the subNode "Dispositivos" of the menu
    And I press on the Filtros button
    And I type "codmar3" in the field "Código"
    And I press on Search button
    And I activate the device driver

    #And I go to "Errores específicos" tab
    # And In the modal I select "-5 - Sin Datos" in the field "Error general"
    #And In the modal I type "-5 - Sin Datos" in the field "Error general"
    # And I press on the Save button devices

    Examples:
      | username | password |
      | admin    | admin    |

 


   Scenario Outline: Create Brands
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    And I go to the Node "Sistema" of the menu
    And I go to the subNode "Drivers" of the menu
    And I go to the subNodeChild "Marcas" of the menu
    And I press on New button
    And I type "marcabrand3" in the field "Nombre"
    And I type "descript" in the field "Observación"
    And I press on Save Brand
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Brands" database there is a record with the value "marcabrand3" for the "name" field

  Examples:
      | username | password |
      | admin    | admin    |



  Scenario Outline: Create Models
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    And I go to the Node "Sistema" of the menu
    And I go to the subNode "Drivers" of the menu
    And I go to the subNodeChild "Modelos" of the menu
    And I press on New button
    And I select "marcabrand2" in the field "Marca"
    And I type "modelomodels1" in the field "Nombre"
    And I type "descript" in the field "Observación"
    And I press on Save Brand
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Models" database there is a record with the value "modelomodels1" for the "name" field

    Examples:
      | username | password |
      | admin    | admin    |

  Scenario Outline: Create Comandos
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    And I go to the Node "Sistema" of the menu
    And I go to the subNode "Comandos" of the menu
    And I press on New button
    And I type "autoQA29" in the field "Nombre"
    And I type "AUTO1;AUTO2" in the field "Comandos Conocidos"
    And I press on the Save&Continue
    And I go to "Parámetros" tab
    And I press on add
    And In the existing modal I type "AUTO1" in the field "Nombre"
    And In the existing modal I type "AUTO1;AUTO2" in the field "Parámetros Conocidos"
    And I press on Save button modal Commands
    And I press on the Save button
    Then I see the menssage that indicate the correctly save
    Then I verify that in the "Commands" database there is a record with the value "autoQA29" for the "name" field
    
    Examples:
      | username | password |
      | admin    | admin    |
 
  Scenario Outline: Create Device groups
    Given I take token whit my "<username>" and my "<password>"
    And I open MDC page on Chrome Browser
    #When I complete my "<username>" and my "<password>"
    And I go to the Node "Sistema" of the menu
    And I go to the subNode "Drivers" of the menu
    And I go to the subNodeChild "Grupos de dispositivos" of the menu
    And I press on New button
    And I type "vehiculo-" in the field "Nombre"
    And I select "Medidor" in the field "Tipo de dispositivo"
    And I press on the Save&Continue
    And I press on Add Device
    And In the modal I select "dispo-22-18-04-01" in the field "Dispositivo"
    And I press on Save Device
    And I press on the Save button drive

    Examples:
      | username | password |
      | admin    | admin    |

      
 
  Scenario Outline: Create Agents
    Given I take token whit my "<username>" and my "<password>"
    When I open MDC page on Chrome Browser
    And I go to the Node "Sistema" of the menu
    And I go to the subNode "Comunicación - Motor MDC" of the menu
    And I go to the subNodeChild "Agentes" of the menu
    And I press on New button
    And I type "Agente1-c" in the field "Nombre"
    And I type "algo" in the field "Descripción"
    And I select "32 bits" in the field "64 bits"
    And I press on the Save&Continue
    And I go to "Puertos" tab
    And I press on add
    And I select "TCP/IP" in the field "Tipo de Puerto"
    And I select "colaconcat3" in the field "Ninguno"
    And I press on the Save button devices
    Then I see the menssage that indicate the correctly save
    And I go to "Windows" tab
    And I press on Generar script instalación
    And I press on Aceptar button of modal
    And I press on the Save&Continue
    And I press on Copiar
    And I press on Save Brand
    Then I filter by "Agente1-c" for "Nombre"
    And I check that the agent "Agente1-c" be active
   
    Examples:
      | username | password |
      | admin    | admin    |

  Scenario Outline: Error Configuration
    Given I take token whit my "<username>" and my "<password>"
    And I open MDC page on Chrome Browser
    And I go to the Node "Sistema" of the menu
    And I go to the subNode "Drivers" of the menu
    And I go to the subNodeChild "Configuración de errores" of the menu
    And I press on New button
    And I type "vehiculo" in the field "Nombre"
    And I type "<code>" in the field "Código"
    And I type "1" in the field "Cantidad de reintentos"
    And I press on the Save button
    Then I see the menssage that indicate the correctly save

    Examples:
      | username | password | code   |
      | admin    | admin    | cod1-4 |
      | admin    | admin    | cod1-5 |
      | admin    | admin    | cod1-6 |

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
    And I search the device task
    And I press on Search button
    And I check the device task is Proceced ok

    Examples:
      | username | password | desc      |
      | admin    | admin    | finaldesc | 