import { test, expect, request } from '@playwright/test';
import postDataArray from '../data/apidata.json';  // path to your JSON file

test.describe('POST /posts API tests with multiple data sets', () => {
  postDataArray.forEach((postData, index) => {
    test(`Create post test case #${index + 1}`, async () => {
      const apiContext = await request.newContext();

      const response = await apiContext.post('https://jsonplaceholder.typicode.com/posts', {
        headers: { 'Content-Type': 'application/json','x-api-key':'reqres-free-v1' },
        data: postData,
      });

      expect(response.status()).toBe(201);

      const responseBody = await response.json();
      console.log(`Response for test case #${index + 1}:`, responseBody);

      expect(responseBody).toEqual(expect.objectContaining(postData));
      expect(responseBody).toHaveProperty('id');
    });
  });
});


// for loop way 

test('Create multiple posts using for loop', async () => {
  const apiContext = await request.newContext();

  for (let i = 0; i < postDataArray.length; i++) {
    const postData = postDataArray[i];
    const response = await apiContext.post('https://jsonplaceholder.typicode.com/posts', {
      headers: { 'Content-Type': 'application/json' },
      data: postData,
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log(`Response for iteration ${i + 1}:`, responseBody);

    expect(responseBody).toEqual(expect.objectContaining(postData));
    expect(responseBody).toHaveProperty('id');
  }
});

//const postData of postDataArray
test('Create multiple posts using for...of loop', async () => {
  const apiContext = await request.newContext();

  for (const postData of postDataArray) {
    const response = await apiContext.post('https://jsonplaceholder.typicode.com/posts', {
      headers: { 'Content-Type': 'application/json' },
      data: postData,
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log('Response:', responseBody);

    expect(responseBody).toEqual(expect.objectContaining(postData));
    expect(responseBody).toHaveProperty('id');
  }
});
