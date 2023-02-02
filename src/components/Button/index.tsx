import { MouseEventHandler } from 'react';
import { useBadgeActionsStore } from '../../store/useBadgeActionsStore';
import { TElementWithContent } from '../../types/ElementWithContent';

export const Button = ({
  text,
  className,
  icon,
  onClickFunction,
  tooltip,
  onMouseEnter,
  isCopyButton,
}: TElementWithContent & {
  tooltip?: JSX.Element;
  onClickFunction?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  isCopyButton: boolean;
}) => {
  const setIsHovered = useBadgeActionsStore((state) => state.setIsHovered);

  return (
    <button
      className={className}
      onMouseEnter={onMouseEnter}
      onClick={(e) => {
        isCopyButton ? setIsHovered() : '';

        onClickFunction?.(e);
      }}
    >
      {text ? text : icon}
      {tooltip}
    </button>
  );
};
