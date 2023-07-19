import { Button } from '@kobalte/core';
import { ButtonRootProps } from '@kobalte/core/dist/types/button';

interface ButtonProps extends ButtonRootProps {
  text: string;
}

const MyButton = (props: ButtonProps) => {
  return (
    <Button.Root {...props} class="bg-slate-100 px-2 py-1 pb-1.5 rounded-md">
      {props.text}
    </Button.Root>
  );
};

export default MyButton;
