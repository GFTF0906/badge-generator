import { useBadgeStore } from '../../store/useBadgeStore';

export const Badge = () => {
  const badgeUrl = useBadgeStore((state) => state.badgeUrl);

  return (
    <section className="flex items-center justify-center h-full rounded border border-[#6b63634c] bg-[#dbd5d54c]">
      <div>
        <img
          src={badgeUrl}
          alt="Here your beautiful badge is being displayed"
          className="w-60 shadow-2xl shadow-[#0000008b]"
        />
      </div>
    </section>
  );
};
