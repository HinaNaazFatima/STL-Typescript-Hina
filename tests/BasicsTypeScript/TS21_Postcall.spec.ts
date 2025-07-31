import { test, expect, request } from '@playwright/test';

test('Create a new post via POST /posts', async () => {
  // Sample post data
  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  // Create new API request context
  const apiContext = await request.newContext();

  // POST request to jsonplaceholder
  const response = await apiContext.post('https://jsonplaceholder.typicode.com/posts', {
    headers: { 'Content-Type': 'application/json','x-api-key':'reqres-free-v1' },
    data: newPost,
  });

  // Assert status code 201 Created
  expect(response.status()).toBe(201);

  // Parse response JSON
  const responseBody = await response.json();
  console.log('Response:', responseBody);

  // Assert response contains title, body and userId
  expect(responseBody).toEqual(expect.objectContaining({
    title: newPost.title,
    body: newPost.body,
    userId: newPost.userId,
  }));

  // Assert response has an id (JSONPlaceholder returns id: 101 for new posts)
  expect(responseBody).toHaveProperty('id');
});
