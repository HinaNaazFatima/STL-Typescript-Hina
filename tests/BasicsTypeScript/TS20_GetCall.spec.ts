import { test, expect, request as playwrightRequest } from '@playwright/test';

// Test: GET list of users with custom Accept header
// Endpoint: https://reqres.in/api/users?page=2

test('GET users page 2 from reqres with Accept header', async () => {
  // Create API context with default Accept header
  const apiRequestContext = await playwrightRequest.newContext({
    extraHTTPHeaders: {
      'Accept': 'application/json'
    }
  });

  // Perform GET request
  const response = await apiRequestContext.get('https://reqres.in/api/users?page=2');

  // Assert status code
  expect(response.status()).toBe(200);

  // Parse JSON response
  const data = await response.json();

  // Assert structure and content
  expect(data).toHaveProperty('data');

  expect(data.data).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
      })
    ])
  );

  expect(data).toHaveProperty('support');
  expect(data.support).toEqual({
    url: "https://contentcaddy.io?utm_source=reqres&utm_medium=json&utm_campaign=referral",
    text: "Tired of writing endless social media content? Let Content Caddy generate it for you."
  });
  
  // Cleanup
  await apiRequestContext.dispose();
});
