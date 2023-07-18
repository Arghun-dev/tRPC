import { httpBatchLink, createTRPCProxyClient } from '@trpc/client';

import type { AppRouter } from 'server/router';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3001',
    }),
  ],
});
