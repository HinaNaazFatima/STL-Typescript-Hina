import { test, expect, chromium } from '@playwright/test';

test("AndNor",async()=>{

    let isLoggedIN = false;
    let defaultUser="Guest";
    let currentUser= isLoggedIN && "John"|| defaultUser
    console.log(currentUser);
      // Explanation: isLoggedIn is false, so "John" is not evaluated. OR (`||`) returns "Guest".
    })