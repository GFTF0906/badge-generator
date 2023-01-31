import { TElementWithContent } from '../../types/ElementWithContent';

export const SubTitle = ({ text, className }: TElementWithContent) => {
  const baseStyles = ' text-lg font-semibold tracking-wider opacity-40';

  return (
    <h2 className={className ? className + baseStyles : baseStyles}>{text}</h2>
  );
};
