const {LoginPage} = require('./LoginPage.js');
const {DashboardPage } = require('./DashboardPage.js');
const {CartPage}=require('./CartPage.js');
const { PlaceOrderPage } = require('./PlaceOrderPage.js');
const {ThankYouPage}= require('./ThankYouPage.js');

export class POManager{
    page: any;
    loginPage: any;
    dashboardPage: any;
    cartpage: any;
    placeOrderPage: any;
    thankyouPage: any;

    constructor(page)
    {
        this.page=page;
        this.loginPage=new LoginPage(this.page);
        this.dashboardPage= new DashboardPage(this.page);
        this.cartpage= new CartPage(this.page);
        this.placeOrderPage=new PlaceOrderPage(this.page);
        this.thankyouPage=new ThankYouPage(this.page);


    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getDashboardPage()
    {
        return this.dashboardPage;
    }
    getCartPage()
    {
        return this.cartpage;
    }
    getplaceOrderPage()
    {
        return this.placeOrderPage;
    }
    getthankyouPage()
    {
        return this.thankyouPage;
    }

}
//module.exports={POManager};