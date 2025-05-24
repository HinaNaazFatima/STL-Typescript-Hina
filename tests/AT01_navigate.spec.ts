import { chromium,test } from "@playwright/test";

test("NavigateToWebsite",async()=>{
//initiates chromium and headless false meaning chrome browser will open
const browser=await chromium.launch({headless:true});
//open new session of chrome browser
//playwright support multiple context
const context = await browser.newContext();
//defautl new tab is opened in chrome
const page = await context.newPage();
//navigate to website
await page.goto("https://www.davidjones.com/");
await page.waitForTimeout(10000);


})


test("NavigateToWebsite2",async({page})=>{
    // //initiates chromium and headless false meaning chrome browser will open
    // const browser=await chromium.launch({headless:true});
    // //open new session of chrome browser
    // //playwright support multiple context
    // const context = await browser.newContext();
    // //defautl new tab is opened in chrome
    // const page = await context.newPage();
    //navigate to website
    await page.goto('https://www.davidjones.com/');
    await page.waitForTimeout(10000);
    
    
    })