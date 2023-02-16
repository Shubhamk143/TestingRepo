Feature: Functional test case

Scenario: As an User I want to verify PDP - Breadcrumbs
          Given I am on the "homepage" of the application
            Then I login to the application
           When I click on any Product and on PDP Page
           Then I verify the breadcrumbs and clicks on any page with in navigation hierarch

           
 	  Scenario: Functional test case
    Given I have launched the "Home Page"
    Then I verify the "Personal Button" is displayed
    #And I compare screenshot for "Home Page"
    When I click on the "Personal Button"
    Then I verify the "UserID textbox" is displayed
    #And I enter "amit" in "UserID textbox" text box
    Then I fill the "UserID textbox" with test data "user1.name"