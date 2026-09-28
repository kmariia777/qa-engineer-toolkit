import { test, expect } from '@playwright/test';

test('GET user returns 200 and expected shape', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

  expect(response.ok()).toBeTruthy();

  const user = await response.json();
  expect(user).toMatchObject({ id: 1 });
  expect(user.email).toContain('@');
});

test('POST creates a resource', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: { title: 'qa', body: 'toolkit', userId: 1 },
  });

  expect(response.status()).toBe(201);
});
