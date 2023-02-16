/* eslint-disable @typescript-eslint/no-var-requires */

// import dataQaIds from '../../src/dataModel/dataQaIds';
import homepage from "./homepage.locators";
//import { waitforTimeout } from "../config/base.config";
import { get } from "env-var";
import { element } from "protractor";
console.log("homepage elements", homepage);


export const selectorsMap = {
    "Personal Button": `div[class=main-buttons] a[data-tealium-narrative="Personal"]`,
    "AlertBox_HomePage": `//div[@class='gigya-screen-dialog-main']`,
  
    
};
/*
const getElement = (testElement): WebdriverIO.Element => {
    const element = $(selectorsMap[testElement]);
    element.waitForDisplayed({ timeout: waitforTimeout });
    return element;
};

const getLocator = (testElement): WebdriverIO.Element => {
    const element = selectorsMap[testElement];
    return element;
};*/
class HomePage {

    //HomepageLocators
get Password(){return $("//input[@name='password']");}
get More_To_Explore_Heading(){return $("//p[normalize-space()='More to Explore']")};
get ContinueButton(){return $("//*[contains(text(),'Continue')]");}
get Hero_Title(){return $("//div[@class='vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--hero-title']/p");}
get Benefits_Banner(){return $("(//div[contains(@class,'vtex-flex-layout-0-x-flexRow vtex-flex-layout-0-x-flexRow--benefits')])[1]");}
get Benefits_Banner_Text1(){return $$("(//p[contains(text(),'Quick & Easy Ordering')])");}
get Benefits_Banner_Text2(){return $$("(//p[contains(text(),'Save More with Smile+ Autoship')])");}
get Benefits_Banner_Text3(){return $$("(//p[contains(text(),'Trusted by Dental Professionals Worldwide')])");}
get SocialMediaBanner(){return $("//p[@class='lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--social-header']");}
get SocialMediaBannerlink(){return $("//div[contains(@aria-label,'3 of 4')]//img[contains(@class,'vtex-store-components-3-x-imageElement')]");}
get MoreToExplore(){return $("//p[normalize-space()='More to Explore']");}
get PreviousSlide(){return $$("(//button[@aria-label='Previous Slide'])");}
get ProductPromotionBanner(){return $("//div[contains(@class,'max-w-[var(--promotion-banner-text-width-fullbleed)] relative lg:py-5 py-14 min-h-[20rem]')]");}
get ProductName(){return $("//section[contains(@class,'mt-10 promotion_banner')]//h3[1]");}
get rightarrow(){return $("(//*[name()='svg'][@class=' vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--carousel'])[6]");}
get ProductDescription(){return $("div[class='text-brand-white-100 font-light mb-6'] p");}
get SpotlightProductImage(){return $("//img[@alt='Promotional Product Image']");}
get AlertcloseButton(){return $("//a[@aria-label='close window']");}
get AlertText_HomePage(){const alertmessage = "//div[text()='Subscribe Today']";return $(alertmessage);}
get ShopByPatientCondition(){return $("(//div[contains(text(),'Shop by Patient Condition')])");}
get ShopByPC_options(){return $$("//p[@class='vtex-store-components-3-x-infoCardCallActionText vtex-store-components-3-x-infoCardCallActionText--items-menu link t-body b underline c-action-primary']");}
get Toothbrush_Nav(){return $("(//div[@class='vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-title mh6']/span/div)[2]");}
get  Toothbrush_Nav_category(){return $$("//div[@class='vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--submenu-title mh6']/span/div");}
get Toothbrush_Nav_subCategory(){return $$("//div[@class='vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-row-gap flex justify-between nowrap']");}
get Fluoride_Oral_Rinses(){return $("(//div[@class='vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-title flex justify-between nowrap'])[3]");}
get Fluoride_Oral_Rinses_category(){return $$("//div[@class='vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--submenu-title flex justify-between nowrap']");}
get Fluoride_Oral_Rinses_Subcategory(){return $$("//div[@class='vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-row-gap flex justify-between nowrap']");}
get Whtening(){return $("(//div[@class='vtex-menu-2-x-styledLinkContainer vtex-menu-2-x-styledLinkContainer--menu-title mh6']/span/div)[4]");}
get Whtening_Catgory(){return $$("//div[@class='vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--submenu-title flex justify-between nowrap']");}
get Whitening_SubCategory(){return $$("//div[@class='vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--menu-row-gap flex justify-between nowrap']");}
get ShopNowButton(){return $("//button[@class='vtex-button bw1 ba fw5 v-mid relative pa0 lh-solid br2 min-h-regular t-action bg-action-primary b--action-primary c-on-action-primary hover-bg-action-primary hover-b--action-primary hover-c-on-action-primary pointer ']");}
get More(){return $("//div[contains(text(),'More')]");}
get More_ToothpasteImag(){return $("//img[@alt ='Toothpaste']");}
get More_FlossImage(){return $("//img[@alt ='Floss']");}
get More_Toothpaste_Flosslink(){return $$("//p[@class ='vtex-store-components-3-x-infoCardCallActionText vtex-store-components-3-x-infoCardCallActionText--items-menu link t-body b underline c-action-primary']");}
get FacebookIcon(){return $("//a[@href='https://www.facebook.com/colgateprofessionalna']");}
get InstagramIcon(){return $("(//a[@href='https://www.instagram.com/colgateprof_na/'])[5]");}
get FacebookHomePage(){return $("//h1[normalize-space()='Colgate for the Dental Professional']");}
get InstaHomePage(){return $("InstaHomePage");}
get LinkedInHomePage(){return $("(//*[name()='svg'][@class='lazy-loaded'])[1]");}
get LinkedIn(){return $("//a[@href='https://www.linkedin.com/company/colgate-professional']");}
get NeedHelp(){return $("//div[contains(text(),'Need Help?')]");}
get ContactNo(){return $("//div[contains(text(),'Call 1-800-226-5428')]");}
get ContactTimings(){return $("(//p[contains(@class,'lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--footer-bold')])[2]");}
get AcceptCookie(){const AcceptCookie = "//button[@id='truste-consent-button']";return $(AcceptCookie);}
get ByCategoryPage(){return $("(//div[@class='css-460byc css-zf9mf'])[1]");}
get Product_Link(){const Product_Link = "//a[@href='#pca-products']";return $(Product_Link);}
get ProductCategory(){return $$("//div[contains(@class,'nav-main__products__menu')]/div[contains(@class,'nav-main__nav-inner')]/div[contains(@class,'main-nav__nav-column--detailed main-nav__nav-column level1')]/div[contains(@class,'main-nav__nav-column__title')]");}
get Mask_Link(){const Mask_Link ="(//a[contains(.,'Masks')])[2]";return $(Mask_Link);}
get Product_ByCategory(){return $("//div[@class='nav-main__nav-inner']//a[@class='main-nav__nav-column__title'][normalize-space()='by category']");}
get product_AddToCart(){return $("(//span[contains(text(),'Add to Cart')])[15]");}
get View_Edit_Cart(){return $("//span[contains(text(),'View and edit cart')]");}
get MyAccount_Dropdown(){return $("//a[@class='account-link']");}
get MyAccount(){return $("//a[@id='idqSJeHSN5']");}
get MyAccountPageConfirmation(){return $("//span[@class='base']");}
get emailInput(){return $("//input[@name='email']");}
get EmailContinueButton(){return $("//div[text()='Continue']");}
get Marketing_Banner_Heading(){return $("//div[@class='flex flex-col justify-center text-left lg:w-4/6 lg:ml-28']//h2");}
get Marketing_Banner_Img(){return $("//img[@class='rounded-br-[var(--marketing-banner-rounded-br)] object-fit']");}
get MarketingBannerText(){return $("//p[@class='text-base font-light leading-6']");}
get MarketingBannerLink(){return $("//div[@class='relative flex']/a");}
get UsefulLinks(){return $("//div[contains(text(),'Useful Links')]");}
get Links_AfterUsefulLink(){return $$("(//div[contains(text(),'Useful Links')]//following::a/div)");}
get CustomerTestimonial(){return $("//p[contains(text(),'What Dental Professionals Say')]");}
get CustomerRatings(){return $("(//img[contains(@alt,'star-rating')])[6]")}
get CustomerCitation(){return $("//div[contains(@aria-label,'1 of 3')]//p[contains(@class,'lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--description-text')][contains(text(),'“Super easy to manage orders and have them shipped')]");}
get CustomerName_Location(){return $("//p[contains(text(),'Sarah M., Tampa, Florida')]");}
get More_To_Explore_Products(){return $$("//article[@class='vtex-product-summary-2-x-element vtex-product-summary-2-x-element--product-carousel-card pointer pt3 pb4 flex flex-column h-100']/div/h3/span");}
get MoreToExplore_Navigation_Right(){return $("(//button[@aria-label='Next Slide'])[5]");}
get MoreInnoProduct_Navigation_Right(){return $("//div[@class='vtex-flex-layout-0-x-flexColChild vtex-flex-layout-0-x-flexColChild--innovative-products-section pb0']//button[@aria-label='Next Slide']//*[name()='svg']");}
get ShopProductHeader_FooterLinks(){return $$("//div[@class='vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--footer-option flex justify-between nowrap']");}
get ShopProductHeader(){return $("//div[contains(text(),'Shop Products')]");}
get PLP_Header(){return $("//h1[@class='vtex-search-result-3-x-galleryTitle--layout t-heading-1']");}
get Colgate_Logo(){return $("//img[@alt='Logo']");}
get HomePageBanner(){return $("//p[@class='lh-copy vtex-rich-text-0-x-paragraph vtex-rich-text-0-x-paragraph--hero-title']");}
get HomePage_Products(){return $$("//span[@class='vtex-product-summary-2-x-productBrand vtex-product-summary-2-x-brandName t-body']");}
get Header_ExternalLink(){return $$("//div[@class='vtex-menu-2-x-styledLinkContent vtex-menu-2-x-styledLinkContent--link-title flex justify-between nowrap']");}
get InnovativeProduct(){return $("(//div[@class='vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--product-list-header']/p)[2]");}
get Inno_product_count(){return $$("//article[@class='vtex-product-summary-2-x-element pointer pt3 pb4 flex flex-column h-100']");}
get Inno_Prod_Name(){return $$("//article[@class='vtex-product-summary-2-x-element pointer pt3 pb4 flex flex-column h-100']/*/h3/span");}
get Most_Ordered_Product(){return $("(//div[@class='vtex-rich-text-0-x-wrapper vtex-rich-text-0-x-wrapper--product-list-header']/p)[1]");}
get Most_Ordered_Prod_List(){return $$("article[class='vtex-product-summary-2-x-element vtex-product-summary-2-x-element--product-shelf-without-login pointer pt3 pb4 flex flex-column h-100'] ");}
get Most_Ordered_Prod_nav_left(){return $("(//button[contains(@aria-label,'Previous Slide')])[1]");}
get Most_Ordered_Product_nav_right(){return $("(//button[@aria-label='Next Slide'])[1]");}
get SignInLink_MostOrderedProduct(){return $("(//span[@class='vtex-login-2-x-label t-action--small pl4 login-link dn db-l'])[1]");}

//Search
get SearchButton(){return $("//input[@placeholder='Search']");}
get SearchPlaceholder(){return $("//input[@placeholder='Search by product name or Condition']");}
get PopularSearch(){return $("//p[@class='colgateb2b-frontend-0-x-itemListTitle c-on-base'][1]");}
get PopularSearchProductList(){return $$("//ol[@class='colgateb2b-frontend-0-x-itemListList']/li/a/span");}
get FrequentlySearch(){return $("//p[@class='colgateb2b-frontend-0-x-tileListTitle c-on-base']");}
get FrequentlySearchProd_list(){return $$("//section[@id='colgateb2b-frontend-0-x-frequentlysearched']/ul/li/section/a");}
get Search_NoProdFound(){return $("//div[@class='colgateb2b-frontend-0-x-topsuggested-and-products']//p");}
get SearchCloseButton(){return $("//button[@class='colgateb2b-frontend-0-x-input-close-btn']");}
get ViewAllProducts(){return $("//span[@class='colgateb2b-frontend-0-x-seeMoreMessage']");}



//PDP Page Locators
get Product_Name(){return $("//span[@class='vtex-store-components-3-x-productBrand ']");}
get ProductImage_PDP(){return $("//img[@class='vtex-store-components-3-x-productImageTag vtex-store-components-3-x-productImageTag--main']");}
get PDP_BreadCrumb_links(){return $$("//div[@class='vtex-breadcrumb-1-x-container vtex-breadcrumb-1-x-container--breadcrumb_pdp pv3']/span/a");}
get PDP_Breadcrumb_home(){return $("//div[@class='vtex-breadcrumb-1-x-container vtex-breadcrumb-1-x-container--breadcrumb_pdp pv3']/a");}
get PDP_Breadcrumb_totalNavigation(){return $$("//div[@class='vtex-breadcrumb-1-x-container vtex-breadcrumb-1-x-container--breadcrumb_pdp pv3']/span");}




//PLP Locators
get PLP_heading(){return $("//h1[@class='vtex-search-result-3-x-galleryTitle--layout t-heading-1']");}


}


export default new HomePage();
//export { getElement, getLocator };
  