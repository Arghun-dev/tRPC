import { JSXElement } from 'solid-js';

interface CardProps {
  children: JSXElement;
  title: string;
}

const Card = (props: CardProps) => {
  return (
    <div class="flex flex-col border rounded-md">
      <h2 class="border-b p-4 font-bold">{props.title}</h2>
      <div class="p-4">{props.children}</div>
    </div>
  );
};

export default Card;
