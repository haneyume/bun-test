import { Elysia, t } from 'elysia';
import { html } from '@elysiajs/html';
import { swagger } from '@elysiajs/swagger';

const app = new Elysia()
  .use(html())
  .use(
    swagger({
      path: '/v1/swagger',
      documentation: {
        info: {
          title: 'Elysia Documentation',
          version: '1.0.0',
        },
      },
    }),
  )
  .get('/', () => 'Hello Elysia')
  .get('/json', () => ({
    hello: 'world',
  }))
  .post('/profile', ({ body }) => body, {
    body: t.Object({
      username: t.String(),
    }),
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
