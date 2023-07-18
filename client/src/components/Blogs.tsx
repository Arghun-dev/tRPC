import { createResource, For } from 'solid-js';
import Blog from './Blog';
import { trpc } from '../utils/trpc';

const Blogs = () => {
  const [blogs] = createResource(() => trpc.blogRouter.getBlogs.query());

  return (
    <div>
      {blogs.loading && <h1>Loading...</h1>}
      {blogs.error && <h1>Error</h1>}
      <For each={blogs()}>{(blog) => <Blog blog={blog} />}</For>
    </div>
  );
};

export default Blogs;
