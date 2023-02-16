Feature: PLP Page Scenarios
 Scenario: As an User I want to verify Sort Options
          Given I am on the "Product Listing Page" of the application
          When I view the sort selector 
          Then I should be able to view the sort options

 Scenario: As an User I want to verify default Sort Options
          Given I am on the "Product Listing Page" of the application
          When I view the sort selector 
          Then I should be able to view Top selling as the default sort option

 Scenario: As an User I want to verify Category filter
          Given I am on the "Product Listing Page" of the application
          When I click any available option within the "category" filter
          Then I should be able to view only the category specific products

Scenario: As an User I want to verify Patient Condition Filter
          Given I am on the "Product Listing Page" of the application
          When I click any available option within the "Patient Condition" filter
          Then I should be able to view only the selected patient condition specific products

Scenario: As an User I want to verify Price Range Filter - Default Settings
          Given I am on the "Product Listing Page" of the application
          When I  view the "Price Range" filter
          Then I should be able to view Price per case option must be enabled by default
          Then Product listing must reflect the default price filter settings

Scenario: As an User I want to verify Price Range Filter 
          Given I am on the "Product Listing Page" of the application
          When I  view the "Price Range" filter
          Then I should be able to view Price range set to between $X and $Y by default

Scenario: As an User I want to verify Price Range Filter - Price type Toggle
          Given I am on the "Product Listing Page" of the application
          When I  view the "Price Type" filter
          Then I should be able to toggle the price type filter to 'Per Unit'
          Then Product listing must reflect the default price filter settings

Scenario: As an User I want to verify Price Range Filter - Price Range Slider
          Given I am on the "Product Listing Page" of the application
          When I  view the "Price Range Slider" filter
          Then I change the default settings of the filter
          Then Product listing must get refreshed to list products falling between the selected price range

Scenario: As an User I want to verify Generic Filter Selection Behaviour
          Given I am on the "Product Listing Page" of the application
          When I selct one of more filter options within the filter menu
          Then Selected filter options must get highlighted

Scenario: As an User I want to verify Disabled Filter Option during Contextual 
          Given I am on the "Product Listing Page" of the application
          When I select one of more filter options within the filter menu
          Then Filter options within other filters that does not match the selected filter criteria must remain disabled        

Scenario: As an User I want to verify Contextual Filtering - Price Range Filter
          Given I am on the "Product Listing Page" of the application
          When I select one of more filter options within the filter menu
          Then Price Range Slider must get adjusted to reflected the price range of listed products contextually

Scenario: As an User I want to verify Product Count per Filter
          Given I am on the "Product Listing Page" of the application
          Then Product count must be present next to the corresponding filter option in filter menu

Scenario: As an User I want to verify Bristle Type Filter
          Given I am on the "Product Listing Page" of the application
          When I  view the "Bristle Type" filter
          Then I click any available option within the Bristle Type specific products
          And page must get refreshed to list only the Bristle Type specific products

Scenario: As an User I want to verify Brush Head Size Filter
          Given I am on the "Product Listing Page" of the application
          When I  view the "Brush Head Size" filter
          Then I click any available option within the Brush Head Size filter
          Then product listing must get refreshed to list only the Brush Head Size specific products

Scenario: As an User I want to verify By Product Filter
          Given I am on the "Product Listing Page" of the application
          When I  view the "by Product" filter
          Then I click any option within the by Product filter
          Then The product listing must get refreshed to list only the by Product specific products

Scenario: As an User I want to verify By Formula Filter
          Given I am on the "Product Listing Page" of the application
          When I  view the "By Formula" filter
          Then I click any option within the by Formula filter
          Then The product listing must get refreshed to list only the by Formula specific products

Scenario: As an User I want to verify Total Count of Products
          Given I am on the "Product Listing Page" of the application
          When I  Select any category
          Then I should be able to see the total count next to the product sort

Scenario: As an User I want to verify Count of Products
          Given I am on the "Product Listing Page" of the application
          When I  apply the filter
          Then I should be able to see the total count next to the product sort change based on the result set

Scenario: As an User I want to verify Filter Header
          Given I am on the "Product Listing Page" of the application
          When I  apply the filter
          Then I should be able to see the filter header at the top of the product tiles

Scenario: As an User I want to verify Filter Header Action
          Given I am on the "Product Listing Page" of the application
          When I  apply the filter
          Then I cancels the filter header
          Then I should be able to see the Products get refreshed as per the updated selection of the filters

Scenario: As an User I want to verify PLP Page Title and wants to know what page I am on
          Given I am on the "Product Listing Page" of the application
          When I  view the title banner
          Then I should be able to view all products 

Scenario: As an User I want to verify PLP Page Title and wants to know hierarchy of pages
          Given I am on the "Product Listing Page" of the application
          When I  view the Breadcrumb
          Then I should be able to view Home/ All Products

Scenario: As an User I want to verify PLP Page Title and wants to go back to homepage
          Given I am on the "Product Listing Page" of the application
          When I  view the Breadcrumb
          Then I should be able to click on Home
          Then I should be redirected to the homepage

Scenario: As an User I want to verify PLP Page Product Tile Information
          Given I am on the "Product Listing Page" of the application
          When I  view a product tile
          Then I should must be able to find the product Image Name SignIn Badge

Scenario: As an User I want to verify Load More Options in PLP Page
          Given I am on the "Product Listing Page" of the application
          When I reache the end of the page
          Then I should be able to load more products using the Load More CTA

Scenario: As an User I want to verify Scroll back to top in PLP Page
          Given I am on the "Product Listing Page" of the application
          When I scroll on the page and click on scroll back to top CTA
          Then I should be taken to the top of the PLP page

Scenario: As an User I want to verify Sign IN CTA in PLP Page - user not logged in
          Given I am on the "Product Listing Page" of the application
          When I view a Product tile
          Then I should be able to view the 'Sign In to View Price' CTA**
          Then I click on Sign In CTA 
          Then SignIn Overlay should get opened

Scenario: As an User I want to verify PLP to PDP
          Given I am on the "Product Listing Page" of the application
          When I view a Product tile
          Then I click on any part of a given product tile 
          Then I should get navigated to the corresponding PDP

Scenario: As an User I want to verify PLP - Recently Viewed Products
          Given I am on the "Product Listing Page" of the application
          When I view 'Recently Viewed' carousel
          Then I should be able to view up to 10 recently viewed products

Scenario: As an User I want to verify PLP - Recently Viewed Products
          Given I am on the "Product Listing Page" of the application
          When I view 'Recently Viewed' carousel
          Then I should be able to view up to 10 recently viewed products

Scenario: As an User I want to verify PLP - Badges Recently Viewed Products
          Given I am on the "Product Listing Page" of the application
          When I view 'Recently Viewed' carousel
          Then I should be able to view Badges recently viewed products

Scenario: As an User I want to verify PLP - arrows Recently Viewed Products
          Given I am on the "Product Listing Page" of the application
          When I view 'Recently Viewed' carousel
          Then I should be able to Scroll arrows recently viewed products