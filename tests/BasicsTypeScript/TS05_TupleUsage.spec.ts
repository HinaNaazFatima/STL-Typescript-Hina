import { test, expect, chromium } from '@playwright/test';

test("TupleUsage",async()=>{
//Tuples allow you to define arrays with fixed sizes and different types.
let user: [string,number] = ['Alice',25];// A tuple with a string and a number
    console.log(user); // Output: ['Alice', 25] 
    console.log(`User Name: ${user[0]}, Age: ${user[1]}`); // Accessing tuple elements
})

// Define a tuple with different types: [username, password, expectedMessage]
const loginCredentials: [string, string, string][] = [
    ["standard_user", "secret_sauce", "Products"],
    ["locked_out_user", "secret_sauce", "Epic sadface: Sorry, this user has been locked out."],
    ["invalid_user", "wrong_password", "Epic sadface: Username and password do not match any user in this service"]
];

test("Login with Tuples", async ({page}) => {
 
    // Navigate to the Sauce Labs login page
    await page.goto("https://www.saucedemo.com/");

    for (const [username, password, expectedMessage] of loginCredentials) {
        // Fill in the username and password
        await page.fill("[data-test='username']", username);
        await page.fill("[data-test='password']", password);
        await page.click("[data-test='login-button']");

        // Check if the login was successful or not
        if (expectedMessage === "Products") {
            // Verify successful login
            await expect(page).toHaveURL(/inventory/);
            console.log(`Login successful for user: ${username}`);
        } else {
            // Verify error message
            const errorMessage = await page.textContent(".error-message-container");
            expect(errorMessage).toContain(expectedMessage);
            console.log(`Login failed for user: ${username} - ${expectedMessage}`);
        }

        // Go back to the login page for the next iteration
        await page.goto("https://www.saucedemo.com/");
    }

       await page.waitForTimeout(1000); // Simulate user wait time
});


