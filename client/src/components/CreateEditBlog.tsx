import { createSignal } from 'solid-js';
import { trpc } from '../utils/trpc';

const CreateEditBlog = () => {
  const [title, setTitle] = createSignal('');
  const [description, setDescription] = createSignal('');

  const submit = async () => {
    if (!title() || !description()) return;
    await trpc.blogRouter.createBlog.mutate({
      title: title(),
      description: description(),
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title()}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description()}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={submit}>submit</button>
    </div>
  );
};

export default CreateEditBlog;
