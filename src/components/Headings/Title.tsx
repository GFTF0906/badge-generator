import { TElementWithContent } from '../../types/ElementWithContent';

export const Title = ({ text, className }: TElementWithContent) => {
  const baseStyles = ' text-6xl tracking-wider pb-2 opacity-80 font-bold';

  return (
    <h1 className={className ? className + baseStyles : baseStyles}>{text}</h1>
  );
};
