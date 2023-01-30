import { TElementWithContent } from '../../types/ElementWithContent';

export const MainTitle = ({ text, className }: TElementWithContent) => {
  const baseStyles = ' text-2xl font-bold';

  return (
    <h1 className={className ? className + baseStyles : baseStyles}>{text}</h1>
  );
};
