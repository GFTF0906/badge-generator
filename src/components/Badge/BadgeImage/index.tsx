import { useBadgeStore } from '../../../store/useBadgeStore';

export const BadgeImage = () => {
  const badgeUrl = useBadgeStore((state) => state.badgeUrl);

  return (
    <img
      src={badgeUrl}
      alt="Here your beautiful badge is being displayed"
      className="w-36 shadow-2xl shadow-[#0000008b] sm:w-40 lg:w-52"
    />
  );
};
