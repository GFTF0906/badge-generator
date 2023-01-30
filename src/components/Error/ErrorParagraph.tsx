import { THeadings } from '../../types/HeadingsType';

export const ErrorParagraph = ({ text: message }: THeadings) => {
  return <p className="text-red-500 text-base">{message}</p>;
};
