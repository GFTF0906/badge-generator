import { BadgeBox } from './BadgeBox';
import { SelectOption } from './SelectOption';

export const Badge = () => {
  return (
    <section className="relative mb-4 flex min-h-full w-full flex-col items-center justify-center rounded border-2 border-[#dbd5d54b] bg-[#dbd5d52f] p-6 shadow-2xl shadow-[#b1a1be3a] sm:mb-0 sm:flex-row sm:p-0">
      <SelectOption />
      <BadgeBox />
    </section>
  );
};
