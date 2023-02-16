import { Given, When, Then  } from '@cucumber/cucumber';
import * as visual from '../utilities/visualRegression';
import * as utils from '../utilities/pageUtils';
import { by, ElementArrayFinder } from 'protractor';
import { element, WebDriver } from 'protractor';
import * as locators from '../locators/getElementLocators';
import { assert, Console } from 'console';
import HomePage from '../locators/getElementLocators';
import { TIMEOUT } from 'dns';
import { createKeywordTypeNode } from 'typescript';
//import { domainToASCII } from 'url';
import selectorsMap from '../locators/homepage.locators';
import saveScreenshot from 'webdriverio/build/commands/element/saveScreenshot';
import { util } from 'chai';
import exp = require('constants');
const Assert = require('chai').assert
import TestInputData from '../testData/TestInputData.json'
import waitUntil from 'webdriverio/build/commands/browser/waitUntil';
import waitForExist from 'webdriverio/build/commands/element/waitForExist';
import { link } from 'fs';
const fs = require('fs');
let ExtData = JSON.parse(fs.readFileSync('src/testData/e2eTest.json'));
import isDisplayed from 'webdriverio/build/commands/element/isDisplayed';
import * as e2eTest from "../testData/e2eTest.json"
const prodName="";
const frequentlySearchedProducts="";
var ProductName_freqSearch="";



Given(/^I am on the "(.*)" of the application$/,async(url)=>{
 // return browser.url("https://www.pcaskin.com/")
await browser.url(TestInputData.url);
await browser.setTimeout({ 'pageLoad': 90000 });
await console.log("I am in the home page of the application");
});


/*Then(/^I login to the application$/,function(){
  //this.retries(2);
console.log("Logging to the application");
HomePage.emailInput.setValue(TestInputData.User_email);
HomePage.EmailContinueButton.click();
browser.pause(2000);
HomePage.Password.setValue(TestInputData.password);
HomePage.ContinueButton.click();
 $("//img[contains(@alt,'Logo')]").waitForDisplayed({ timeout: 60000 });
})*/

Then(/^I see the Benefits Banner$/, async()=>
{
if (await HomePage.Benefits_Banner.isDisplayed())
{
console.log("Benefits Banner is Displayed");
}
})

Then(/^I verify the information on the static Banner$/,function()
{
console.log("Verifying the static banner on the page");
var elements1 = HomePage.Benefits_Banner_Text1;
var text1_size = elements1.length;
console.log(text1_size);
var text1 = elements1[0];
expect(text1_size).toBe(2);
var text1_text = text1.getText();
console.log("Text For First Banner Item: " + text1_text);
expect(text1_text).toBe((<any>e2eTest).Expected_Text.Static_Banner_Text1);
var elements2 =HomePage.Benefits_Banner_Text2;
var text2_size = elements2.length;
expect(text2_size).toBe(2);
var text2_text = elements2[0].getText();
console.log("Text For Second Banner Item: " +text2_text);
expect(text2_text).toBe((<any>e2eTest).Expected_Text.Static_Banner_Text2);
var elements3=HomePage.Benefits_Banner_Text3;
var text3_size = elements3.length;
expect(text3_size).toBe(2);
var text3_text = elements3[0].getText();
console.log("Text For Third Banner Item: " +text3_text);
expect(text3_text).toBe((<any>e2eTest).Expected_Text.Static_Banner_Text3);
console.log("Validated the -->Static Banner on the Page");
console.log("Screenshot taken")
})

Then(/^I validate the icon "(.*)" in the footer section$/,function(Icon)
{
browser.pause(4000);
// (HomePage.FacebookIcon).scrollIntoView({ behavior: 'smooth'});
(HomePage.FacebookIcon).scrollIntoView();
if(Icon==("Facebook"))
{
expect(HomePage.FacebookIcon.isElementDisplayed)
console.log("Facebook Icon is present");
(HomePage.FacebookIcon).click();
console.log("Clicked the icon : " + Icon);
browser.pause(3000);
let win = browser.getWindowHandles();
browser.pause(3000);
if(win.length > 1)
{browser.switchToWindow(win[1]);
console.log('New Window: ' + browser.getTitle());
expect(HomePage.FacebookHomePage.getText()).toBe((<any>e2eTest).Expected_Text.FacebookHomePage);
console.log("Facebook Home Page is opened");
browser.pause(3000);
browser.closeWindow(); 
}    

}
if(Icon==("Instagram"))
{
expect(HomePage.InstagramIcon.isElementDisplayed)
console.log("Instagram Icon is present");
(HomePage.InstagramIcon).click();
console.log("Clicked the icon : " + Icon);
browser.pause(15000);
let win = browser.getWindowHandles();
browser.pause(3000);
if(win.length > 1)
{browser.switchToWindow(win[1]);
console.log('New Window: ' + browser.getTitle());
expect(HomePage.InstaHomePage).toBeDisplayed;
console.log("Instagram Home Page is opened");
browser.pause(3000);
browser.closeWindow(); 
} 
 
}
if(Icon==("LinkedIn"))
{
expect(HomePage.LinkedIn.isElementDisplayed) 
console.log("Twitter Icon is present");
(HomePage.LinkedIn).click();
console.log("Clicked the icon : " + Icon);
browser.pause(5000);let win = browser.getWindowHandles();
browser.pause(3000);
if(win.length > 1)
{browser.switchToWindow(win[1]);
console.log('New Window: ' + browser.getTitle());
expect(HomePage.LinkedInHomePage).toBeDisplayed;
console.log("Linked In Home Page is opened");
browser.pause(3000);
browser.closeWindow();
} 
}
console.log("Returning to the main window");
browser.pause(5000);
expect(HomePage.Colgate_Logo).toBeDisplayed()
console.log("Back to Colgate home page");
})

When(/^I navigate to the right of the footer section$/, async()=>
{
var e1 =(HomePage.NeedHelp).getText();
//  browser.execute("return { scrollX: this.pageXOffset, scrollY: this.pageYOffset }");
await browser.execute("window.scrollTo(0, document.body.scrollHeight)");
//await (HomePage.NeedHelp).waitForExist({ timeout: 10000 });
expect(e1).toBe("Need Help?")
console.log("Navigated to the footer section : " +e1);
})

Then(/^I should be able to view the contact information and timings of the help center$/, async()=>
{
expect(HomePage.ContactNo).toBeClickable;
console.log("Call me link is clickable");
expect ($("//p[contains(text(),'8:30 AM – 6:30 PM ET')]")).toBePresent();
expect(HomePage.ContactTimings).toBePresent();
console.log("Contact Information is displayed");
})

Then(/^I verify the contact number is clickable$/,async()=>{
console.log("The contact No is : " + HomePage.ContactNo.getText());
Assert.isTrue((HomePage.ContactNo).isClickable(), 'Error: Expecting contact No clickable');})

When(/^I navigate to Social Media Banner$/,async()=>
{
var element =HomePage.SocialMediaBanner;
// await element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
await element.scrollIntoView(); 
await element.waitUntil(async function () {
return (await this.getText()) === (<any>e2eTest).Expected_Text.Social_Media_Banner;
}, 
{
  timeout: 15000,
  timeoutMsg: 'Social Media Banner is not displayed after 15 sec'
});
console.log(element.getText());
await expect((element.getText())===((<any>e2eTest).Expected_Text.Social_Media_Banner));
console.log("Social Media Banner is displayed");
})

Then(/^I click on the any of the tiles within the Social Media Banner$/,async()=>{
console.log("Clicking on social Media Banner"); 
await HomePage.SocialMediaBannerlink.click();
await browser.waitUntil(()=> (browser.getWindowHandles()).length==2,
{
  timeout: 30000, 
  timeoutMsg: '...expected 2 tabs open'
});
let win = await browser.getWindowHandles();
console.log("No of Tab: " + win.length);
if (( win.length) ==2)
{
await browser.switchToWindow(win[1]);
console.log('New Window: ' + await browser.getTitle());
await expect(browser).toHaveTitleContaining((<any>e2eTest).Expected_Text.Instagram_Title);
await browser.closeWindow();
console.log("Returning to the main window");
}
browser.pause(3000);
expect(HomePage.Colgate_Logo).toBeDisplayed()
console.log("Back to Colgate home page");
})

Then(/^I navigate to Product Promotion Banner$/, function()
{
const Banner = HomePage.ProductPromotionBanner;
Banner.scrollIntoView();
browser.pause(5000);

})

Then(/^I Validate - Product Name , Image and Description$/,()=> //way of writing anonymous function
{
console.log("Validating Product Name");
var ProductName =(<any>e2eTest).Expected_Text.Spotlight_Banner_Product;
var ProductDesc= (<any>e2eTest).Expected_Text.Spotlight_Banner_Product_Decs;
var Product_Name = HomePage.ProductName.getText();
console.log(Product_Name);
expect(Product_Name).toBe(ProductName);
console.log("Product Name is displayed correctly");
var Product_Desc = HomePage.ProductDescription.getText();
console.log(Product_Name);
expect(Product_Desc).toBe(ProductDesc);
console.log("Product Description is displayed correctly");
var prod_Image=HomePage.SpotlightProductImage;
expect(prod_Image).toBeDisplayed;
console.log("Product Image is Displayed");
})

When(/^I see the "(.*)" Section$/, async(Scope:string)=>
{
if(Scope=='More to Explore')
{
var section = await HomePage.MoreToExplore;
 }
if(Scope=='Our Innovative Product')
{
var section = await HomePage.InnovativeProduct;
}
if(Scope=='Most Ordered Product')
{
var section = await HomePage.Most_Ordered_Product;
}
console.log("I am in the Section : " +await section.getText());
await browser.pause(3000);
await section.scrollIntoView();
section.waitForDisplayed({timeout: 10000 })
console.log( await section.getText() +" : is visible in the UI")
})

Then(/^I verify the "(.*)" navigation button$/, function(Tags:String)
{
if(Tags.includes("More to Explore"))
{
var leftarrow = (HomePage.PreviousSlide)[4];
}
if(Tags.includes("Our Innovative Product"))
{
var leftarrow = (HomePage.PreviousSlide)[2];
}
Assert.isFalse(leftarrow.isClickable(), 'Error: Expecting Not clickable');
console.log("Left Navigation Arrow is disabled");
       
});

When(/^I hover over "(.*)" in the header$/,async(header : String)=>
{
switch(header){
case "Patient Condition":
const ShopByPatientCondition = await HomePage.ShopByPatientCondition;
await browser.pause(2000);
await ShopByPatientCondition.click();
await browser.pause(2000);
const el = await $("//img[@alt='Sensitivity']");
await el.waitForDisplayed({ timeout: 120000 });
break;
case "Toothbrushes":
  const Toothbrush = await HomePage.Toothbrush_Nav;
  await browser.pause(3000);
  await Toothbrush.click();
  (await $("(//img[@alt='Shop Now'])[1]")).waitForDisplayed({timeout:4000});
  await browser.pause(4000);
  break;
case "Fluoride & Oral Rinses":
  const Fluoride_Oral_Rinses = await HomePage.Fluoride_Oral_Rinses;
  await browser.pause(3000);
  await Fluoride_Oral_Rinses.click();
  (await $("(//button[contains(@type,'button')])[1]")).waitForDisplayed({timeout:4000});
  await browser.pause(4000);
  break;
case "Whitening":
   const Whitening = await HomePage.Whtening;
   await browser.pause(3000);
   await Whitening.click();
   await browser.pause(2000);
   break;
case "More":
    const More = await HomePage.More;
    await More.click();
    await browser.pause(2000);
    break;
  } 
  })

  Then(/^I verify the all the details of "(.*)"$/,function(header:any)
  { 
  let arr =(<any>e2eTest).Expected_Test_Data.Shop_by_Patient_Condition;
  console.log('List of all items in Menu is: ');
  HomePage.ShopByPC_options.forEach(function (item) {
  {
  let i = item.index;
  let elem = item.getText();
  console.log(elem);
  expect(elem).toContain(arr[i]);              
  }
  })
  })

  Then(/^I click on the "(.*)" icon$/,function(Icon:String)
  {
  if(Icon=="Toothpaste")
  {
  var Product_Image =  HomePage.More_ToothpasteImag;
  var ProductLink =  HomePage.More_Toothpaste_Flosslink[0];
  }
  if(Icon=="Floss")
  {
  var Product_Image =  HomePage.More_FlossImage;
  var ProductLink =  HomePage.More_Toothpaste_Flosslink[1];
  }
  browser.waitUntil(async() =>                    
  ( Product_Image.isDisplayedInViewport()),
  {
     timeout: 25000,
     timeoutMsg: 'Product Image didnot show up even after 25 secs'
  }
  );
  console.log("fhsajk" +  ProductLink.getText());
  ProductLink.click();
  HomePage.PLP_Header.isDisplayed;
  expect(HomePage.PLP_Header.getText()).toBe(Icon)
  })

  Then(/^I will be redirected to the PLP and Category filter must be set to "(.*)"$/,async(Icon)=>
  {
      // This part is not developed yet. Code needs to be integrated.

  })
    
  Then(/^I Verify the Marketing Banner in the Homepage$/,function(){
  HomePage.Marketing_Banner_Heading.scrollIntoView();
  browser.pause(5000);
  (HomePage.Marketing_Banner_Img).waitForDisplayed();
  if(HomePage.Marketing_Banner_Img.isDisplayed)
  {
  (HomePage.Marketing_Banner_Img).takeElementScreenshot;
  console.log("Marketing Banner is Displayed")
  }})
      
  Then(/^I Verify the Useful Link in the Footer of Homepage$/,function()
  {
  HomePage.UsefulLinks.scrollIntoView();
  browser.pause(4000);
  let a:number=0;
  let arr = (<any>e2eTest).Expected_Test_Data.UsefulLinks;
  var elems = HomePage.Links_AfterUsefulLink;
  console.log('List of all items in Menu is: ');
  while(a<4)
  {
  let text = (HomePage.Links_AfterUsefulLink)[a].getText();
  // console.log(text);
  expect(text).toBe(arr[a]);
  console.log("Element displayed correctly : " +arr[a]);
  a++;   
  }
  })
        
  Then(/^I verify the all the links in the Useful Links$/,async()=>
  {
  var element_links = await HomePage.Links_AfterUsefulLink;
  for(var i= 0; i<=3;i++)
  {
  if(i!=2)
  {
  var element = await element_links[i];
  await element.click();
  await browser.pause(2000);
  let win = await browser.getWindowHandles();
  await console.log("no of windows" +await win);
  await browser.pause(3000);
  await browser.switchToWindow(await win[1]);
  await browser.pause(3000);
  await console.log('New Window: ' + await browser.getTitle());
  await browser.closeWindow();
  await browser.pause(3000);
  await console.log("Back to Main Window");
  }
  }
  })
     

  Then(/^I verify the all the details of Marketing Banner$/,function()
  { 
   expect(HomePage.MarketingBannerText).toHaveTextContaining((<any>e2eTest).Expected_Text.Marketing_Banner_Desc);
   expect(HomePage.MarketingBannerLink).toBeClickable;
   console.log("Validated Marketing Banner")
  })

  When(/^I Verify the Customer testimonial carousel on the Homepage$/,function()
  {
  (HomePage.CustomerTestimonial).scrollIntoView();
  browser.pause(2000);
  browser.waitUntil(() => {                         
  return HomePage.CustomerTestimonial.isDisplayedInViewport()
  }  );
  console.log("Scrolled the page to Customer Testimonial")
  })

  Then(/^I verify the testimonial has rating, citation, author's name & location$/, function()
  {
  expect(HomePage.CustomerCitation).toBeDisplayed;
  expect(HomePage.CustomerRatings).toBeDisplayed;
  expect(HomePage.CustomerName_Location).toBeDisplayed;
  //console.log("Customer Rating is Present :" +(HomePage.CustomerRatings).isElementDisplayed());
  console.log("Customer Testimonial is Present :  -->" +HomePage.CustomerCitation.getText());
  console.log("Customer Name & Location is Present :" + (HomePage.CustomerName_Location).getText())
  });

  Then(/^I should verify navigation arrow on the MoretoExplore$/,async()=>
  {
  await (HomePage.More_To_Explore_Heading).scrollIntoView();
  await browser.pause(4000);
  var NumberOfProducts = await (HomePage.More_To_Explore_Products);
  console.log("Total Products in the More to Explore: " + NumberOfProducts.length)
  var rightarrow =await  HomePage.MoreToExplore_Navigation_Right;
     
  if(await rightarrow.isClickable)
  { await rightarrow.click();
  }
  console.log((await HomePage.More_To_Explore_Products).length); 
  const lengths = await (HomePage.More_To_Explore_Products.length);
  await expect (await HomePage.More_To_Explore_Products).toBeElementsArrayOfSize({ gte: 4 })
  await browser.pause(3000);
  })

  Then(/^I verify the product Display Page for "(.*)"$/,async(Section:string)=>
  {
  if(Section=='More to Explore')
  {
  var prod_ele = await HomePage.More_To_Explore_Products[3];
  var ProductName = await prod_ele.getText();
  }
  if(Section=='More Innovative Product')
  { 
  var ele = await HomePage.InnovativeProduct;
  console.log("ele + " +ele)
  var heading_Inno = await ele.getText();
  await ele.scrollIntoView();        
  var prod_eles = await HomePage.Inno_Prod_Name;
  console.log("prod_eles " +prod_eles)
  var prod_ele = await prod_eles[2];
  await browser.pause(2000);
  var ProductName = await prod_ele.getText();
   }

  console.log("Clicking on the Product : "+ await ProductName);
  await browser.pause(3000);
  await prod_ele.click();
  await browser.waitUntil(
  async () => (await $("//span[@class='vtex-store-components-3-x-productBrand ']").getText()) === (ProductName),
  {
     timeout: 30000,
     timeoutMsg: 'expected product name is not displayed even after 10 sec'
  }
  );
  await browser.pause(2000);
   /*  (await HomePage.Colgate_Logo).click();
    (await HomePage.HomePageBanner).waitForDisplayed({ timeout: 20000 });*/
  })
          
  Then(/^I Verify the Shop Products Links in the Footer of Homepage$/,async()=>
  {
  await expect(HomePage.ShopProductHeader).toHaveTextContaining("Shop Products");
  const urls_ShopProducts = await HomePage.ShopProductHeader_FooterLinks;
  var leng = await urls_ShopProducts.length;
  var expectedProducts =(<any>e2eTest).Expected_Test_Data.Shop_Products_Footer;
  for(var i =0;i<=6;i++)
  {
  var element = await urls_ShopProducts[i]
  await expect(element.isDisplayed() && element.isClickable())
  console.log(await element.getText() + " is clickable");
  await expect(element).toHaveTextContaining(expectedProducts[i]); //updated the testdata
  await element.click();
  (await HomePage.PLP_Header).waitForDisplayed({ timeout: 10000 });
  if((await HomePage.PLP_Header).isExisting)
  {
  await expect(HomePage.PLP_Header).toHaveTextContaining(expectedProducts[i]);       
  }
  }
  (await HomePage.Colgate_Logo).click();
  })
   
  When(/^I click on any Product and on PDP Page$/,()=>
  {
  var noOfProd =  HomePage.HomePage_Products.length;
  console.log("No of Products are : " +noOfProd);
  var Product =  HomePage.HomePage_Products[noOfProd-3];
  var ProdName = (HomePage.HomePage_Products[noOfProd-3]).getText();
  console.log(ProdName);
  Product.click();
  HomePage.ProductImage_PDP.waitForDisplayed({ timeout: 15000 }); 
  console.log((HomePage.Product_Name).getText());
  expect(HomePage.Product_Name).toHaveTextContaining(ProdName);
  })

  Then(/^I verify the breadcrumbs and clicks on any page with in navigation hierarchy$/,()=>
  {
  var linkLength = (HomePage.PDP_Breadcrumb_totalNavigation).length;
  console.log("Number of navigation link: " + linkLength);
  expect(linkLength).toBeGreaterThanOrEqual(2);
  var lengthoflink = HomePage.PDP_BreadCrumb_links.length;
  console.log(lengthoflink)
  console.log("Validating the breadcrumb for product : " + (HomePage.PDP_BreadCrumb_links[lengthoflink-1]).getText());
  var linktext_ = (HomePage.PDP_BreadCrumb_links[lengthoflink-1]);
  var linktext = linktext_.getText();
  (HomePage.PDP_BreadCrumb_links[lengthoflink-1]).click();
  browser.waitUntil(()=>{ 
  return (HomePage.PLP_heading).isDisplayed()
  },
  {timeout:20000}
  );
  browser.pause(3000);
  var heading =  HomePage.PLP_heading;
  browser.pause(3000);
  var text1 = heading.getText();
  expect(text1).toBe(linktext);
  })

  When(/^I click on the search bar$/,async()=>
  {
  (await HomePage.SearchButton).click();
  const ele = await HomePage.SearchPlaceholder;
  await browser.pause(3000);
  console.log("Cliking on the search bar");
  await ele.waitForDisplayed({ timeout: 10000 });
  })

  Then(/^I see dropdown with 5 Popular Searched keywords and 2 Frequently searched products$/,()=>
  {
  var Search = (HomePage.PopularSearch).getText();
  console.log(Search);
  browser.pause(2000);
  expect(Search).toContain('Popular Searches');
  var PopularSearchProductList =HomePage.PopularSearchProductList;
  PopularSearchProductList.map(products=>products.getText())
  console.log("Total No of product in popular Searches: " +PopularSearchProductList.length);
  expect(PopularSearchProductList.length).toBe(5);
  console.log("Now Validating Frequently Search")
  expect((HomePage.FrequentlySearch).getText()).toContain("Frequently Searched");
  console.log("Dropdown contains Frequently searched products");
  var frequentlySearchedProducts = HomePage.FrequentlySearchProd_list;
  console.log("Total No of Frequently Searched Product Lists : " + frequentlySearchedProducts.length);
  expect(frequentlySearchedProducts.length).toBe(2);
  })

  When(/^I clicks on any of the popular searched keywords$/, async()=>
  {
  var RandomNo = Math.floor(Math.random() * 4)+1; 
  console.log("Random No is : " +RandomNo);
  await browser.pause(3000);
  var prodlists = await HomePage.PopularSearchProductList;
  console.log("Popular Searched Keywords displayed : " + await prodlists.length);
  var prod = (await prodlists)[RandomNo];
  const prodName = await prod.getText();
  console.log("Clicking on the product : " + await prodName);
  await prod.click();
  await browser.waitUntil(() => {                         
  return (HomePage.PLP_heading).isDisplayedInViewport()
  } 
  )
  })

  Then(/^I should be navigated to the search listing page with relevant products listed$/,async()=>{
  await browser.pause(3000);
  var PLPHeader = (await HomePage.PLP_heading).getText();
  await console.log("PLP Page Filter is displaying : " + await PLPHeader);
  await expect(await PLPHeader).toContain(await prodName);
  })
  
  When(/^I clicks on any of the frequently searched products$/,async()=>
  {
  console.log("Dropdown contains Frequently searched products");
  const frequentlySearchedProducts = await HomePage.FrequentlySearchProd_list;
  await browser.pause(2000);
  console.log("Total No of Frequently Searched Product Lists : " + await frequentlySearchedProducts.length);
  await expect(await frequentlySearchedProducts.length).toBe(2);
  var prod = (await frequentlySearchedProducts)[0];
  var productName = await prod.getAttribute('href');
  var pName = await productName.split(/[//]/);
  var ProductName_freqSearch1 =await pName[1];
  ProductName_freqSearch =await ProductName_freqSearch1.replace(/-/g, " ");
       // alert(arrStr);
         // ProductName_freqSearch =await pName[1];
  console.log("Product name in the frequently Search : " +await ProductName_freqSearch);
  await console.log("Clicking on the product : " +await productName);
  await prod.click();
  await browser.waitUntil(() => {                         
  return (HomePage.Product_Name).isDisplayedInViewport()
  } ,{timeout:30000}
  )
  })

  Then(/^I should be navigated to the product display page$/,()=>
  {
  console.log("I am on the PDP Page");
  (HomePage.ProductImage_PDP).isDisplayed;
  browser.pause(3000);
  var PDP_ProdName = (HomePage.Product_Name).getText();
  console.log("Freq search Prod --> " +ProductName_freqSearch+" and PDP Prod Name --> " + PDP_ProdName);
  expect(PDP_ProdName).toBe(ProductName_freqSearch);
  })
  
  Then(/^I click on Colgate logo and redirected to the application - home page$/,function(){
  HomePage.Colgate_Logo.click();
  (HomePage.Hero_Title).waitForDisplayed({timeout:15000});
  })

  When(/^I entered keywords "(.*)" in the search bar$/,async(search:string)=>
  {
  await browser.pause(3000);
  (await HomePage.SearchPlaceholder).click();
  var prodName = await search;
  (await HomePage.SearchPlaceholder).setValue(prodName);
  await browser.pause(3000);
  })

  Then(/^it does not match the search criteria$/,async()=>
  {
  var No_Prod = (await HomePage.Search_NoProdFound).getText();
  await browser.pause(4000);
  await console.log(await No_Prod);
  await expect(await No_Prod).toBe('No Products Found');
  (await HomePage.SearchCloseButton).click();
  await expect(await HomePage.SearchCloseButton).not.toBeDisplayed;
  })
  
  Then(/^I should click on View All link$/,async()=>
  {
  (await HomePage.ViewAllProducts).click();    
  })
  
  Then(/^I verify the external links in the header section$/,async()=>
  {
  var expectedlink =(<any>e2eTest).Expected_Test_Data.Header_ExternalLink;
  var expectedurl =(<any>e2eTest).Expected_Test_Data.Header_ExternalUrl;
  var links = (await HomePage.Header_ExternalLink).length;
  await console.log("No of links available in the header : " +await links);
  await expect(links).toBe(4);
  for(var i = 0 ; i < links;i++){
  var elem = await HomePage.Header_ExternalLink;
  var Header_Text = await elem[i].getText();
  var Header = await elem[i];
  console.log("Header Link : " + await Header_Text);
  await expect(await Header_Text).toBe(await expectedlink[i]);
  if(i!=1)
  {
  await console.log("I am inside if block");
  await browser.pause(6000);
  await Header.click();
  await browser.pause(10000);
         // await browser.waitUntil(()=> (browser.getWindowHandles()).length==2,
          //   {
          //     timeout: 30000, 
          //     timeoutMsg: '...expected 2 tabs open'
          //   });
  let win = await browser.getWindowHandles();
  await browser.pause(6000);
  await console.log("No of Tab: " + await win.length);
  var url ="";
  if ((await win.length) ==2)
  {
  await browser.pause(7000);
  await browser.switchToWindow(win[1]);
  await browser.pause(5000);
  url = await browser.getUrl();
  await console.log('New Window: ' + await url);
  await browser.closeWindow();
  console.log("Returning to the main window");
  }
  await expect(await url).toContain(await expectedurl[i]);
  }
  }
  });

  Then(/^I should verify navigation arrow on the Our Innovative Product$/,async()=>
  {
  var ele = await HomePage.InnovativeProduct;
  var heading_Inno = await ele.getText();
  await ele.scrollIntoView();
  await browser.pause(4000);
  // var NumberOfProducts = await (HomePage.More_To_Explore_Products);
  //  console.log("Total Products in the More to Explore: " + NumberOfProducts.length)
  var rightarrow =await HomePage.MoreInnoProduct_Navigation_Right;
  
  if(await rightarrow.isClickable)
  {
  await console.log("I am inside if loop");
  await browser.pause(3000);
  await rightarrow.click();
  await browser.pause(3000);
  await rightarrow.click();
  await  console.log((await HomePage.Inno_product_count).length); 
  const lengths = await (await HomePage.Inno_product_count.length);
  await expect (await HomePage.Inno_product_count).toBeElementsArrayOfSize({ gte: 4 })
  await browser.pause(3000);
  }
  })
  
  Then(/^I verify left arrow to be disabled and right arrow to be enabled$/,async()=>
  {
  await expect(await HomePage.Most_Ordered_Prod_nav_left).toBeDisabled;
  console.log("Left navigation is disabled");
  await expect(await HomePage.Most_Ordered_Product_nav_right).toBeClickable;
  console.log("Right navigation is Clickable")
  })

  Then(/^I click on right arrow to reach the end of carousel and scroll back to the beginning$/,async()=> {
  let count1 =0;
  let count2 =0;
  const RightButton = await HomePage.Most_Ordered_Product_nav_right;
  while(await RightButton.isClickable())
  {
  //await browser.pause(1000);
  await RightButton.scrollIntoView({block:'center'});
  await RightButton.click();
  await  count1++;
  }
  await console.log("Reached the end of the carousel");
  await expect(await count1).not.toBeGreaterThan(2);
  // await browser.pause(3000);
  const LeftButton = await HomePage.Most_Ordered_Prod_nav_left;
  await expect(await LeftButton).toBeClickable;
  await console.log("Left button is now Clickable");
  await browser.pause(3000);
  while(await LeftButton.isClickable())
  {
  await console.log("Inside 2nd while loop");
  await LeftButton.click();
  await count2++;
  await browser.pause(2000);
  }
  await console.log("Clicking on the left button" + await count2 );
  await expect(await count2).not.toBeGreaterThan(2);
  })

  Then(/^I should be able to view up to 10 most ordered products$/,async()=>
  {
  while(HomePage.Most_Ordered_Product_nav_right.isClickable())
  {
  const RightButton = HomePage.Most_Ordered_Product_nav_right;
  RightButton.scrollIntoView({block:'center'});
  RightButton.click();
  }
  var lists_mostOrdered = await HomePage.Most_Ordered_Prod_List.length;
  await console.log("No of most ordered product are : " +await lists_mostOrdered);
  await expect(lists_mostOrdered).toBe(10);
  })

  Then(/^I should be able to view Sign in to view prices Link and click on it$/,async() => {
  const Link = await HomePage.SignInLink_MostOrderedProduct;
  console.log(await Link.getText());
  expect(await Link.getText()).toContain('Sign in to view prices');
  await browser.pause(6000);
  // await Link.scrollIntoView({ behavior: 'smooth'});
  await Link.click();
  await browser.pause(6000);
  let SignInOption = await $('#Choose a sign-in option');
  await console.log("Clicked on SignIn Link");
  await browser.pause(6000);
  browser.waitUntil(async () => 
  {
  return await SignInOption.isDisplayedInViewport();
  }),
  {timeout : 30000 , timeoutMsg: 'SignIn link not working'};
  });
     
  Then(/^I should be getting pop up requesting user to either Sign In$/,async()=>
  {
  var SignInOption =  await $('Choose a sign-in option');
  await browser.pause(6000);
  expect(SignInOption).toBePresent;
  })

  Then(/^I verify the category present in the "(.*)" section$/,function(section:string)
  { 
  var i=0;
  switch(section){
  case "Toothbrush":
    var categories = HomePage.Toothbrush_Nav_category;
    var category =(<any>e2eTest).Expected_Test_Data.Toothbrush_category;
    break;
  case "Fluoride":
    var categories = HomePage.Fluoride_Oral_Rinses_category;
    category = (<any>e2eTest).Expected_Test_Data.Fluoride_category;
    break;
   case "Whitening":
     var categories = HomePage.Whtening_Catgory;
     category = (<any>e2eTest).Expected_Test_Data.Whitening_category;
     break;
    } 
   categories.forEach(type =>{
   browser.pause(2000);
   console.log("Category "+i+ " is :" + type.getText());
   expect(type.getText()).toBe(category[i]);
   i++;});            
  })

  Then(/^I verify subCategory in the "(.*)" section$/,(section)=>
  {
  let i=0;
  let expected_subcategory:any;
  switch(section){
  case "Toothbrush":
    expected_subcategory = (<any>e2eTest).Expected_Test_Data.Toothbrush_subcategory;
    var actual_subcategory = HomePage.Toothbrush_Nav_subCategory;
    console.log("validating sub category for toothbrush");
    break;
  case "Fluoride":
    expected_subcategory = (<any>e2eTest).Expected_Test_Data.Fluoride_subcategory;
    var actual_subcategory = HomePage.Fluoride_Oral_Rinses_Subcategory;
    console.log("validating sub category for Fluoride");
    break;
  case "Whitening":
    expected_subcategory = (<any>e2eTest).Expected_Test_Data.Whitening_subcategory;
    var actual_subcategory = HomePage.Whitening_SubCategory;
    console.log("validating sub category for Whitening");
    break;
  }
  actual_subcategory.forEach(element =>{
  browser.pause(1000);
  console.log("Sub Category "+i+ " is :" + element.getText());
  expect(element.getText()).toBe(expected_subcategory[i]);
  i++;
  });
  })

  Then(/^I click on Shop Now Button$/,function()
  {
  HomePage.ShopNowButton.click();
  browser.waitUntil(async() =>                    
  ( HomePage.PLP_Header.isDisplayedInViewport()),
  {
    timeout: 25000,
    timeoutMsg: 'Product Listing Page didnot show up even after 25 secs'
  }
  );
  })

  Then(/^I should be navigated to PLP Page for "(.*)"$/,function(header:string){
  var heading = HomePage.PLP_Header.getText();
  console.log("PLP Heading is : " +heading);
  switch(header){
  case "Toothbrushes":
    expect(heading).toBe(header);
    browser.pause(2000);
    break;
  case "Fluoride & Oral Rinses":
    expect(heading).toBe("Oral Rinses");
    browser.pause(3000);
    break;
  }})