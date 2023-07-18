import z from 'zod';

import { trpc } from '../lib/trpc';
import { prisma } from '../lib/prismaClient';

export const blogRouter = trpc.router({
  getBlogs: trpc.procedure.query(async () => {
    const blogs = await prisma.blog.findMany();
    return blogs;
  }),

  createBlog: trpc.procedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation(async ({ input }) => {
      const { title, description } = input;
      const blog = await prisma.blog.create({
        data: { title, description },
      });
      return blog;
    }),
});
