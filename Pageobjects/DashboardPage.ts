export class DashboardPage
{
    page: any;
    products: any;
    productsText: any;
    cart: any;

    constructor(page)
    {
        this.page=page;
        this.products=page.locator(".card-body");
        this.productsText = page.locator(".card-body b");
        this.cart=page.locator("[routerlink*='cart']");
         

    }

    async SearchProduct(productName){
        const allTitles= await this.productsText.allTextContents();
         console.log(allTitles);
         const count1=await this.products.count();
         console.log(count1);
         for(let i=0;i<count1;i++)
         {
            if( await this.products.nth(i).locator("b").textContent()===productName)
            {
              await this.products.nth(i).locator("text= Add To Cart").click();
              console.log("item added");
              break;
            }
         }
    }
    async NavigateToCart()
    {
        await this.cart.waitFor();
        await this.cart.click();
    }
}
//module.exports={DashboardPage};