import { TextField } from '@kobalte/core';
import { TextFieldRootProps } from '@kobalte/core/dist/types/text-field';

interface InputProps extends TextFieldRootProps {
  label: string;
}

const Input = (props: InputProps) => {
  return (
    <TextField.Root {...props} class="flex flex-col mb-6">
      <TextField.Label class="mb-2">{props.label}</TextField.Label>
      <TextField.Input class="border outline-none rounded-md p-2" />
    </TextField.Root>
  );
};

export default Input;
