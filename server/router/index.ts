import { trpc } from '../lib/trpc';
import { blogRouter } from './blogRouter';

export const appRouter = trpc.router({
  blogRouter,
});

export type AppRouter = typeof appRouter;
