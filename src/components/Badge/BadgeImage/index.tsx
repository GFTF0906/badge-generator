import { useBadgeStore } from '../../../store/useBadgeStore';

export const BadgeImage = () => {
  const badgeUrl = useBadgeStore((state) => state.badgeUrl);

  return (
    <img
      src={badgeUrl}
      alt="Here your beautiful badge is being displayed"
      className="xl w-60 shadow-2xl shadow-[#0000008b]"
    />
  );
};
