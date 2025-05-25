import { chromium,test } from "@playwright/test";

test("NavigateNHover",async({page})=>{
    //navigate to webpage
    await page.goto("https://www.davidjones.com/");
    await page.waitForTimeout(10000);
    //hover over Designer
    await page.hover("//*[@id='header-nav']/div/ul/li[2]/a");
    await page.waitForTimeout(10000);
    //click on sale
    await page.click("//*[@id='header-nav']/div/ul/li[2]/div/div/ul/li[2]/a")
    //await page.waitForTimeout(30000);
    //using xpath click on sign  
    await page.locator("//*[@id='account-menu']/li/a/span").click();
    //wait for 10sec
    await page.waitForTimeout(30000);
    //enter username
    await page.fill("//*[@id='header-login-emailaddress']","abc@gmail.com")
    
})
