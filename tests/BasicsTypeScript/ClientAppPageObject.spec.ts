import { test, expect } from '@playwright/test';
//const{customtest} = require('../../utils/test-base.ts');
// const {LoginPage} = require('../../Pageobjects/LoginPage.ts');
 const { DashboardPage } = require('../../Pageobjects/DashboardPage.ts');
 const {CartPage}=require('../../Pageobjects/CartPage.js');
 const { PlaceOrderPage } = require('../../Pageobjects/PlaceOrderPage.ts');
 const {ThankYouPage}= require('../../Pageobjects/ThankYouPage.ts');
 const {POManager}=require('../../Pageobjects/POManager.ts');
//JSON-->string-->js object
 const dataset=JSON.parse(JSON.stringify(require('../../utils/placeorderTestData.json')));

for(const data of dataset)
{
 test(`E2E test for ${data.username}`, async ({page}) =>
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
         await page.pause();
         await loginPage.validLogin(data.username,data.password);
         await page.waitForTimeout(3000);
         await expect(page).toHaveTitle("Let's Shop");
        
        //----Dashboard page-------------
        const dashboardPage= new DashboardPage(page);
        await dashboardPage.SearchProduct(data.item);
        await dashboardPage.NavigateToCart();
        await page.waitForTimeout(3000);

         //------cart page---------------
      
         const cartpage= new CartPage(page);
        await cartpage.MyCartlist();

         //-----Place order page--------------------
          const placeOrderPage=new PlaceOrderPage(page);
          await placeOrderPage.SelectCountry(' India');
          await placeOrderPage.verifyEmail(data.username);
         
         //------Thank you page------
         const thankyouPage=new ThankYouPage(page);
         await thankyouPage.ConfirmOrder();
        
        });
 }
      