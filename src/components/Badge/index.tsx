import { BadgeBox } from './BadgeBox';
import { SelectOption } from './SelectOption';

export const Badge = () => {
  return (
    <section className="relative flex min-h-full w-full items-center justify-center rounded border-2 border-[#dbd5d54b] bg-[#dbd5d52f] shadow-2xl shadow-[#b1a1be3a]">
      <BadgeBox />
      <SelectOption />
    </section>
  );
};
