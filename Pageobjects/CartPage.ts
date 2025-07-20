const {test, expect} = require('@playwright/test');
export class CartPage{
    page: any;
    cartItems: any;
    checkoutbutton: any;

    constructor(page)
    {
        this.page=page;
        this.cartItems= page.locator("text=IPHONE 13 PRO");
        this.checkoutbutton=page.locator("text=Checkout");

    }
    async MyCartlist()
    {
        //await  this.page.pause();
        //this.cartItems= this.page.locator(items);
        //this.checkoutbutton=this.page.locator("text=Checkout");
        await this.page.locator(".itemImg").last().waitFor();
         //await page.waitForLoadState("networkidle");
                
         const bool1 = await this.cartItems.isVisible();
         await expect(bool1).toBeTruthy();
         await  this.checkoutbutton.click();
         
         await this.page.screenshot({path:'cartpage.png'});

    }

}
//module.exports={CartPage};