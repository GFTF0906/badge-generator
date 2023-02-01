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
}: TElementWithContent & {
  tooltip?: JSX.Element;
  onClickFunction?: MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
}) => {
  const setIsHovered = useBadgeActionsStore((state) => state.setIsHovered);

  return (
    <button
      className={className}
      onMouseEnter={onMouseEnter}
      onClick={(e) => {
        setIsHovered();
        onClickFunction?.(e);
      }}
    >
      {text ? text : icon}
      {tooltip}
    </button>
  );
};
