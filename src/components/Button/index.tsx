import { MouseEventHandler } from 'react';
import { TElementWithContent } from '../../types/ElementWithContent';

export const Button = ({
  text,
  className,
  icon,
  onClickFunction,
}: TElementWithContent & {
  onClickFunction?: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className={className}
      onClick={(e) => onClickFunction?.(e)}
    >
      {text ? text : icon}
    </button>
  );
};
