import { test, expect, request } from '@playwright/test';

let authToken = '';

test('Authenticate and get token (simulate)', async () => {
  const apiContext = await request.newContext();

  // Replace with your actual login API URL and payload
  const loginPayload = {
    username: 'user1',
    password: 'pass123',
  };

  // Replace with your login endpoint
  const response = await apiContext.post('https://mock-api.example.com/login', {
    headers: { 'Content-Type': 'application/json' },
    data: loginPayload,
  });

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log('Login response:', responseBody);

  // Assume your API returns { token: "some-token" }
  expect(responseBody).toHaveProperty('token');

  authToken = responseBody.token;
});

test('Use auth token in another API call', async () => {
  expect(authToken).not.toBe('');

  const apiContext = await request.newContext({
    extraHTTPHeaders: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  // Replace with your protected API endpoint
  const response = await apiContext.get('https://mock-api.example.com/protected/resource');

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  console.log('Protected resource response:', responseBody);

  // Add your specific assertions based on the resource data structure
  expect(responseBody).toHaveProperty('data');
});


// //export function as auth token and use in code 

// import { request, APIRequestContext } from '@playwright/test';

// export async function authenticateAndGetToken(apiContext?: APIRequestContext): Promise<string> {
//   // If no context passed, create a new one
//   const context = apiContext ?? await request.newContext();

//   const loginPayload = {
//     username: 'user1',
//     password: 'pass123',
//   };

//   const response = await context.post('https://mock-api.example.com/login', {
//     headers: { 'Content-Type': 'application/json' },
//     data: loginPayload,
//   });

//   if (response.status() !== 200) {
//     throw new Error(`Authentication failed with status ${response.status()}`);
//   }

//   const responseBody = await response.json();
//   console.log('Login response:', responseBody);

//   if (!responseBody.token) {
//     throw new Error('Token not found in login response');
//   }

//   return responseBody.token;
// }


// How to use this function in your tests:

// import { test, expect, request } from '@playwright/test';
// import { authenticateAndGetToken } from './path-to-your-helper-file';

// test('Use auth token in protected API call', async () => {
//   const apiContext = await request.newContext();

//   const authToken = await authenticateAndGetToken(apiContext);

//   const response = await apiContext.get('https://mock-api.example.com/protected', {
//     headers: {
//       Authorization: `Bearer ${authToken}`,
//     },
//   });

//   expect(response.status()).toBe(200);

//   // Additional assertions...
// });
