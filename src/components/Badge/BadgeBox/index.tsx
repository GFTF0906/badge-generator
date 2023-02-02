import { useBadgeActionsStore } from '../../../store/useBadgeActionsStore';
import { useBadgeStore } from '../../../store/useBadgeStore';
import { copyToClipboard } from '../../../utils/copyToClipboard';
import { Button } from '../../Button';
import { Copy } from '../../svgs';
import { Tooltip } from '../../Tooltip';
import { BadgeImage } from '../BadgeImage';

export const BadgeBox = () => {
  const isHovered = useBadgeActionsStore((state) => state.isHovered);
  const setIsHovered = useBadgeActionsStore((state) => state.setIsHovered);

  const selectedOption = useBadgeActionsStore((state) => state.selectedOption);
  const badgeUrl = useBadgeStore((state) => state.badgeUrl);

  const typeOfCopiedText =
    selectedOption === 'url'
      ? badgeUrl
      : selectedOption === 'html'
      ? `<img src="${badgeUrl}" alt="Here your beautiful badge is being displayed"></img>`
      : selectedOption === 'markdown'
      ? `![Your beautiful badge](${badgeUrl})`
      : '';

  return (
    <section className="flex items-center gap-4 p-6 sm:p-0">
      <Button
        tooltip={
          <Tooltip
            tip="Click to copy badge url."
            isHovered={isHovered}
          />
        }
        aria-label="Click to Copy badge url"
        icon={<Copy />}
        onMouseEnter={setIsHovered}
        onClickFunction={() => copyToClipboard(typeOfCopiedText)}
        isCopyButton={true}
        className="sm:absolute sm:right-2 sm:top-2"
      />

      <BadgeImage />
    </section>
  );
};
