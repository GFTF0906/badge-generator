import { TElementWithContent } from '../../types/ElementWithContent';

export const ErrorParagraph = ({ text: message }: TElementWithContent) => {
  return <p className="text-red-500 text-base">{message}</p>;
};
