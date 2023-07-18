import type { Blog as BlogType } from 'types/Blog';

interface BlogProps {
  blog: BlogType;
}

const Blog = (props: BlogProps) => {
  const { blog } = props;
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
    </div>
  );
};

export default Blog;
