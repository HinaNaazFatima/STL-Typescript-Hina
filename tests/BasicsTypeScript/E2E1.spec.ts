const {test, expect} = require('@playwright/test');
test('@abc E2E test', async ({browser}) =>
      {
        //js file -login file
         const context = await browser.newContext();
         const page= await context.newPage();
         const userEmail = page.locator('#userEmail');
         const logIn = page.locator('.login-btn');
         const item="IPHONE 13 PRO";
         const products=page.locator(".card-body");
         const cardTitle = page.locator(".card-body b");
         //chrome
         await page.goto('https://rahulshettyacademy.com/client');
         //console.log(await page.title());
         //await expect(page).toHaveTitle("Let's Shop");
         await userEmail.fill("hina.nazfatima@gmail.com");
         await page.locator('#userPassword').fill("@Aisha1983");
         await logIn.click();
         //console.log(await cardTitle.first().textContent());
         //console.log(await cardTitle.nth(1).textContent());
         //await page.waitForLoadState("networkidle");
         await cardTitle.last().waitFor();
         const allTitles= await cardTitle.allTextContents();
         console.log(allTitles);
         const count1=await products.count();
         console.log(count1);
         for(let i=0;i<count1;i++)
         {
            if( await products.nth(i).locator("b").textContent()===item)
            {
              await products.nth(i).locator("text= Add To Cart").click();
              console.log("item added");
              break;
            }
         }
         await page.locator("[routerlink*='/dashboard/cart']").click();
         //await page.locator("div li").first().waitFor();
         await page.locator(".cartSection").first().waitFor();
         //await page.waitForLoadState("networkidle");
        
         const bool1 = await page.locator("text=IPHONE 13 PRO").isVisible();
         await expect(bool1).toBeTruthy();
         await page.locator("text=Checkout").click();
         await page.locator("text= IPHONE 13 PRO").waitFor();
         //await page.locator(".ng-touched").waitFor();
         
         await page.locator("input[placeholder='Select Country']").pressSequentially("Ind");
         const dropdownList= await page.locator(".ta-results");
         await dropdownList.waitFor();
         const size=await dropdownList.locator(".ta-item").count();
         for(let i=0;i<size;i++)
         {
          const country1=await dropdownList.locator(".ta-item").nth(i).textContent();
          if(country1 ===' India')
          {
            await dropdownList.locator(".ta-item").nth(i).click();
            console.log("India is selected");
            break;
          }
        }
         const name=  await page.locator('label[style*="lightgray"]').textContent();
         console.log(name);
         await expect(await page.locator('label[style*="lightgray"]')).toHaveText("hina.nazfatima@gmail.com");
         //await page.pause();
         await page.locator(".action__submit").click();
         await page.locator(".hero-primary").waitFor();
         expect(await page.locator(".hero-primary")).toHaveText("Thankyou for the order.");
         const orderNum= await page.locator("tr td label[class='ng-star-inserted']").textContent();
         console.log(orderNum);
         await page.locator("button[routerlink='/dashboard/myorders']").click();
         const order1=await page.locator("tbody tr");
         await order1.last().waitFor();
         const order_Id=await order1.allTextContents();
         console.log(order_Id);
        //const count2=await order1.count();
         for(let i=0;i<await order1.count();i++)
         {
          //await page.pause();
          const order_id_1=await order1.nth(i).locator("th").textContent();
          if(orderNum.includes(order_id_1))
            { 
            console.log(order_id_1);
            console.log("order num is found");
            await order1.nth(i).locator(".btn-primary").click();
            break;
            }
          }
          await page.locator(".-main").last().waitFor();
          const orderIdDetails=await page.locator(".-main").textContent();
         expect(orderNum.includes(orderIdDetails)).toBeTruthy();
        });
      