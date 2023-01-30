import { TElementWithContent } from '../../types/ElementWithContent';

export const Button = ({ text, className }: TElementWithContent) => {
  return <button className={className}>{text}</button>;
};
