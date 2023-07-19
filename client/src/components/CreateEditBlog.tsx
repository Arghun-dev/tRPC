import { createSignal } from 'solid-js';
import { trpc } from '../utils/trpc';
import Button from './atoms/Button';
import Input from './atoms/Input';
import Card from './atoms/Card';

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
    <Card title="Create New Blog">
      <div class="flex justify-between">
        <Input
          value={title()}
          label="Title"
          onChange={(value) => setTitle(value)}
        />
        <Input
          label="Description"
          value={description()}
          onChange={(value) => setDescription(value)}
        />
      </div>
      <Button text="submit" onClick={submit} />
    </Card>
  );
};

export default CreateEditBlog;
