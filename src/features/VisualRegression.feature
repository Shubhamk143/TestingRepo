Feature: Home Page
   
 	 Scenario: As an User I want to see the Benefits Banner  
          Given I am on the "homepage" of the application
          Then I see the Benefits Banner
          Then I verify the information on the static Banner
  
    Scenario: As an User I want to see the Shop By Patient Condition in the Header
          Given I am on the "homepage" of the application
            When I hover over "Patient Condition" in the header
            Then I verify the all the details of "Shop By Patient Condition"

Scenario: As an User I want to verify Toothbrushes in the header navigation
    Given I am on the "homepage" of the application
    When I hover over "Toothbrushes" in the header
    Then I verify the category present in the "Toothbrush" section
    Then I verify subCategory in the "Toothbrush" section

Scenario: As an User I want to verify Fluoride & Oral Rinses in the header navigation
  Given I am on the "homepage" of the application
     When I hover over "Fluoride & Oral Rinses" in the header
    Then I verify the category present in the "Fluoride" section
    Then I verify subCategory in the "Fluoride" section  

Scenario: As an User I want to verify Whitening in the header navigation
  Given I am on the "homepage" of the application
    When I hover over "Whitening" in the header
    Then I verify the category present in the "Whitening" section
    Then I verify subCategory in the "Whitening" section

    Scenario: As an User I want to verify More - Toothpaste in the header
  Given I am on the "homepage" of the application
     When I hover over "More" in the header
    Then I click on the "Toothpaste" icon
    Then I will be redirected to the PLP and Category filter must be set to "Toothpaste"
			
Scenario: As an User I want to verify More - Floss in the header
  Given I am on the "homepage" of the application
     When I hover over "More" in the header
     Then I click on the "Floss" icon
    Then I will be redirected to the PLP and Category filter must be set to "Floss"

Scenario: As an User I want to verify Customer Testimonial in the homePage
          Given I am on the "homepage" of the application
            Then I Verify the Customer testimonial carousel on the Homepage
            Then I verify the testimonial has rating, citation, author's name & location

   Scenario: As an User I want to verify Useful Links in the homePage -Footer
          Given I am on the "homepage" of the application
            Then I Verify the Useful Link in the Footer of Homepage
            Then I verify the all the links in the Useful Links

    Scenario: As an User I want to verify Footer - Shop Products Header
          Given I am on the "homepage" of the application
          When I navigate to the right of the footer section
          Then I Verify the Shop Products Links in the Footer of Homepage
			
	Scenario: As an User I want to see the Social Media Links and Icons
            Given I am on the "homepage" of the application
            Then I validate the icon "Facebook" in the footer section
            Then I validate the icon "Instagram" in the footer section
            Then I validate the icon "LinkedIn" in the footer section

   Scenario: As an User I want to see the Marketing Banner in the homePage 
          Given I am on the "homepage" of the application
            Then I Verify the Marketing Banner in the Homepage
            Then I verify the all the details of Marketing Banner

      Scenario: As an User I want to validate - Product Promotion Banner
           Given I am on the "homepage" of the application
           Then I navigate to Product Promotion Banner
           Then I Validate - Product Name , Image and Description

        Scenario: As an User I want to validate - Social Media Banner
           Given I am on the "homepage" of the application
           When I navigate to Social Media Banner
           Then I click on the any of the tiles within the Social Media Banner  

       Scenario: As an User I want to validate - Need Help & Contact Details Information
           Given I am on the "homepage" of the application
           When I navigate to the right of the footer section
           Then I should be able to view the contact information and timings of the help center
           Then I verify the contact number is clickable   

      Scenario: As an User I want to verify -  More To Explore Carousel
          Given I am on the "homepage" of the application
          When I see the "More to Explore" Section
           Then I verify the "More to Explore" navigation button
           Then I should verify navigation arrow on the MoretoExplore
           Then I verify the product Display Page for "More to Explore"

       Scenario: As an User I want to verify Most Innovative product
            Given I am on the "homepage" of the application
            When I see the "Our Innovative Product" Section
            Then I verify the "Our Innovative Product" navigation button
            Then I should verify navigation arrow on the Our Innovative Product
            Then I verify the product Display Page for "More Innovative Product"


       Scenario: As an User I want to verify -  Popular and Frequently Searched keywords in dropdown            
           Given I am on the "homepage" of the application
           When I click on the search bar
           Then I see dropdown with 5 Popular Searched keywords and 2 Frequently searched products


      Scenario: As an User I want to verify -  Popular Searched keywords
             Given I am on the "homepage" of the application
            When I click on the search bar
           When I clicks on any of the popular searched keywords
            Then I should be navigated to the search listing page with relevant products listed


      Scenario: As an User I want to verify Search for a product- Frequently Search Validation
           Given I am on the "homepage" of the application
            When I click on the search bar
           When I clicks on any of the frequently searched products
        Then I should be navigated to the product display page  

      Scenario: As an User I want to verify Breadcrumb in the PDP Page
          Given I am on the "homepage" of the application
          Then I verify the product Display Page for "More to Explore"
          And I verify the breadcrumbs and clicks on any page with in navigation hierarchy

      Scenario: As an User I want to verify Colgate Logo
           Given I am on the "homepage" of the application
           Then I verify the product Display Page for "More to Explore"
           Then I click on Colgate logo and redirected to the application - home page
         
Scenario: Search Results Page (No Products Found)
           Given I am on the "homepage" of the application
            When I click on the search bar
            When I entered keywords "ghdaj" in the search bar
            Then it does not match the search criteria

Scenario: Search Results Page - view All Product
            Given I am on the "homepage" of the application           
            When I click on the search bar
            When I entered keywords "colgate" in the search bar
            Then I should click on View All link
            Then I should be navigated to the search listing page with relevant products listed

 Scenario: As an User I want to validate navigation button in the Most Ordered Products
   Given I am on the "homepage" of the application
    When I see the "Most Ordered Product" Section
    Then I verify left arrow to be disabled and right arrow to be enabled
    Then I click on right arrow to reach the end of carousel and scroll back to the beginning


Scenario: As an User I want to verify No of Products in Most Ordered Product
     Given I am on the "homepage" of the application
     When I see the "Most Ordered Product" Section
    Then I should be able to view up to 10 most ordered products

Scenario: As an User I want to verify External Link at header section
            Given I am on the "homepage" of the application
            Then I verify the external links in the header section    

Scenario: As an User I want to verify Sign In Link in Most Ordered Product
     Given I am on the "homepage" of the application
    When I see the "Most Ordered Product" Section
    Then I should be able to view Sign in to view prices Link and click on it
    Then I should be getting pop up requesting user to either Sign In


  Scenario: As an User I want to verify Shop Now Button in header -Toothbrush
     Given I am on the "homepage" of the application
     When I hover over "Toothbrushes" in the header
     Then I click on Shop Now Button
     Then I should be navigated to PLP Page for "Toothbrushes"
	 
 Scenario: As an User I want to verify Shop Now Button in header -Fluoride & Oral Rinses
	 Given I am on the "homepage" of the application
     When I hover over "Fluoride & Oral Rinses" in the header
     Then I click on Shop Now Button
     Then I should be navigated to PLP Page for "Fluoride & Oral Rinses"
	 
	Scenario: As an User I want to verify Shop Now Button in header -Whitening
	 Given I am on the "homepage" of the application
     When I hover over "Whitening" in the header
     Then I click on Shop Now Button
     Then I should be navigated to PLP Page for "Whitening"