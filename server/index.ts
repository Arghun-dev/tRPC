import dotenv from 'dotenv';
import cors from 'cors';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

import { appRouter } from './router';

dotenv.config();

const server = createHTTPServer({
  router: appRouter,
  middleware: cors(),
});

const port: number = Number(process.env.PORT);

server.listen(port);
