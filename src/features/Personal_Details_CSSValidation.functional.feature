Feature: Validate CSS properties

  Scenario: Validate CSS properties
    Given I have launched the "Home Page"
    Then I verify the "Personal Button" is displayed
    And I validate css properties for "Personal Button"
    And I validate "color: rgb(255,255,255)|height: 66px" css properties for "Personal Button"