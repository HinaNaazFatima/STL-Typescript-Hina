const {test, expect} = require('@playwright/test');
export class PlaceOrderPage{
    page: any;
    IPhoneDisplay: any;
    countryDropdownList: any;
    ActualEmail: any;
    placeOrderButton: any;

    constructor(page)
    {
        this.page= page;
        this.IPhoneDisplay=  page.locator("text= IPHONE 13 PRO");
       // this.EntercountryName= page.locator("input[placeholder='Select Country']");
        this.countryDropdownList=page.locator(".ta-results");
        this.ActualEmail=page.locator('label[style*="lightgray"]');
        this.placeOrderButton=page.locator(".action__submit");
    }
    async SelectCountry(countryName)
    {
        //await this.IPhoneDisplay.waitFor();
        await this.page.locator("input[placeholder='Select Country']").pressSequentially("Ind");
         const dropdownList= await this.countryDropdownList;
         await dropdownList.waitFor();
         const size=await dropdownList.locator(".ta-item").count();
         for(let i=0;i<size;i++)
         {
          const country1=await dropdownList.locator(".ta-item").nth(i).textContent();
          //console.log(country1);
          //console.log(countryName);
          if(country1 === countryName)
          {
            await dropdownList.locator(".ta-item").nth(i).click();
            console.log("India is selected");
            break;
          }
        }
    }
    async verifyEmail(ExpectedEmail)
    {
        const name=  await this.ActualEmail.textContent();
        console.log(name);
        await expect(await this.ActualEmail).toHaveText(ExpectedEmail);
        //await this.page.pause()
        await  this.placeOrderButton.click();
        await this.page.screenshot({path:'placeorderpage.png'});
    }
}
//module.exports={PlaceOrderPage};
