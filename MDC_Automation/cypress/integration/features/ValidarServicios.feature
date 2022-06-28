Feature: MDC Test Services

  I want create the elements for run tasks

  Scenario Outline: Validation of Services
    Given I check services "<services>"

    Examples:
      | services |
      | setToken |
      | Category |
      | Device   |
      | Driver   |
      | Queue    |
      | Brand    |
      | Model    |
      | Command  |
