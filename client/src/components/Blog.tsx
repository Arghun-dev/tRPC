import type { Blog as BlogType } from 'types/Blog';

interface BlogProps {
  blog: BlogType;
}

const Blog = (props: BlogProps) => {
  const { blog } = props;
  return (
    <div class="border rounded-md p-6 mb-6 hover:shadow-md transition-all cursor-pointer">
      <h2 class="text-xl">{blog.title}</h2>
      <p class="mt-6">{blog.description}</p>
    </div>
  );
};

export default Blog;
