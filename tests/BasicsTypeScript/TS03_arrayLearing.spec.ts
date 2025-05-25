import { test, expect, chromium } from '@playwright/test';

test("ArrayUsage1",async()=>{

    let numbers:number[] = [1,2,3,4]; // Array of numbers
    console.log(numbers);

    let fruits: Array<string> = ['Apple', 'Banana', 'Cherry']; // Array of strings
    console.log(fruits);

});


test("ArrayUsage2",async()=>{
    const productList = ["Laptop", "Phone", "Tablet", "Camera"];
    const searchItem="Phone";
    //if condition
    if(productList.includes(searchItem)){
    console.log(searchItem + " is available") 
    //or you can represent this way too
        console.log(`${searchItem} is available`)
    }else{
       console.log(`${searchItem} is not in the list.`); 
    }
    })