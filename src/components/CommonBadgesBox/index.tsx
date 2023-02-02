import { HorizontalRow } from '../Row/HorizontalRow';
import { AsideContent } from './AsideContent';
import { Badges } from './Badges';
import { TitlesCommonBadges } from './Titles';

export const CommonBadgesBox = () => {
  return (
    <section className="hidden rounded border-2 border-gray-600 bg-gray-800 p-6 sm:absolute sm:left-2 sm:top-2 2xl:block 2xl:w-[12%]">
      <TitlesCommonBadges />

      <Badges />
      <HorizontalRow />

      <AsideContent />
    </section>
  );
};
