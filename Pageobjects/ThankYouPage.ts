const {test, expect} = require('@playwright/test');
export class ThankYouPage{
    page: any;
    thText: any;
    order: any;
    MyOrderButton: any;
    order1_ids: any;

    constructor(page)
    {
        this.page=page;
        this.thText=page.locator(".hero-primary");
        this.order=page.locator("tr td label[class='ng-star-inserted']");
        this.MyOrderButton=page.locator("button[routerlink='/dashboard/myorders']");
        this.order1_ids=page.locator("tbody tr");
    }
    async ConfirmOrder()
    {
        await this.thText.waitFor();
         expect(await this.thText).toHaveText(" Thankyou for the order. ");
         const orderNum= await this.order.textContent();
         console.log(orderNum);
         await this.MyOrderButton.click();
         const order1=await this.order1_ids;
         await order1.last().waitFor();
         const order_Id=await order1.allTextContents();
         console.log(order_Id);
         const count2=await order1.count();
         //await page.pause();
         for(let i=0 ; i<count2 ; i++)
         {
          // await page.pause();
            const order_id_1=await order1.nth(i).locator("th").textContent();
          
            console.log(order_id_1);
            console.log(orderNum);
            if(orderNum.includes(order_id_1))
              { 
              console.log(order_id_1);
              console.log("order num is found");
              await order1.nth(i).locator(".btn-primary").click();
              break;
              }
          }
          await this.page.locator(".-main").waitFor();
          const orderIdDetails=await this.page.locator(".-main").textContent();
         expect(orderNum.includes(orderIdDetails)).toBeTruthy();
        }
    }
    //module.exports={ThankYouPage};
