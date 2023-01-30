import { TElementWithContent } from '../../types/ElementWithContent';

export const SubTitle = ({ text, className }: TElementWithContent) => {
  const baseStyles = ' text-xl';

  return (
    <h2 className={className ? className + baseStyles : baseStyles}>{text}</h2>
  );
};
