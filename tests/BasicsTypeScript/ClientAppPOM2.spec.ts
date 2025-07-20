import { test, expect } from '@playwright/test';
const{customtest1} = require('../../utils/test-base.ts');
// const {LoginPage} = require('../Pageobjects/LoginPage.js');
 const { DashboardPage } = require('../../Pageobjects/DashboardPage.ts');
 const {CartPage}=require('../../Pageobjects/CartPage.ts');
 const { PlaceOrderPage } = require('../../Pageobjects/PlaceOrderPage.ts');
 const {ThankYouPage}= require('../../Pageobjects/ThankYouPage.ts');
 const {POManager}=require('../../Pageobjects/POManager.ts');
//JSON-->string-->js object
 const dataset=JSON.parse(JSON.stringify(require('../../utils/placeorderTestData.json')));

for(const data of dataset)
{
  test(` E2E test for ${data.username} `,{
    tag: ['@xyz']
  }, async ({page}) =>
      {
        //js file -login file
         const poManager=new POManager(page);
         //const context = await browser.newContext();
         //const page= await context.newPage();
         const userEmail = page.locator('#userEmail');
         const logIn = page.locator('.login-btn');
         //const item="IPHONE 13 PRO";
         const products=page.locator(".card-body");
         const cardTitle = page.locator(".card-body b");
        // const username='hina.nazfatima@gmail.com';
         //const password='@Aisha1983';
         //----------Login page---------------
          //create object for the login page
         const loginPage= poManager.getLoginPage();
         await loginPage.goTo();
         await loginPage.validLogin(data.username,data.password);
         await expect(page).toHaveTitle("Let's Shop");
        
        //----Dashboard page-------------
        //const dashboardPage= new DashboardPage(page);
        const dashboardPage= poManager.getDashboardPage();
        await dashboardPage.SearchProduct(data.item);
        await dashboardPage.NavigateToCart();

         //------cart page---------------
      
         //const cartpage= new CartPage(page);
         const cartpage= poManager.getCartPage();
        await cartpage.MyCartlist();

         //-----Place order page--------------------
          //const placeOrderPage=new PlaceOrderPage(page);
          const placeOrderPage= poManager.getplaceOrderPage();
          await placeOrderPage.SelectCountry(' India');
          await placeOrderPage.verifyEmail("hina.nazfatima@gmail.com")
         
         //------Thank you page------
         //const thankyouPage=new ThankYouPage(page);
         const thankyouPage= poManager.getthankyouPage();
          await thankyouPage.ConfirmOrder();
        
     })};

     customtest1(`client E2E test 001` , async ({page,testDataForOrder}) =>
        {
            //js file -login file
             const poManager=new POManager(page);
             //const context = await browser.newContext();
             //const page= await context.newPage();
             const userEmail = page.locator('#userEmail');
             const logIn = page.locator('.login-btn');
             //const item="IPHONE 13 PRO";
             const products=page.locator(".card-body");
             const cardTitle = page.locator(".card-body b");
            // const username='hina.nazfatima@gmail.com';
             //const password='@Aisha1983';
             //----------Login page---------------
              //create object for the login page
             const loginPage= poManager.getLoginPage();
             await loginPage.goTo();
             await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password);
             await expect(page).toHaveTitle("Let's Shop");
            
            //----Dashboard page-------------
            const dashboardPage= new DashboardPage(page);
            await dashboardPage.SearchProduct(testDataForOrder.item);
            await dashboardPage.NavigateToCart();
    
             //------cart page---------------
          
             const cartpage= new CartPage(page);
            await cartpage.MyCartlist();
         });
 //}
      