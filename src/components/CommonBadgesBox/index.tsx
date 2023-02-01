import { HorizontalRow } from '../Row/HorizontalRow';
import { AsideContent } from './AsideContent';
import { Badges } from './Badges';
import { TitlesCommonBadges } from './Titles';

export const CommonBadgesBox = () => {
  return (
    <section className="absolute left-2 top-2 w-[12%] rounded border-2 border-gray-600 bg-gray-800 p-6">
      <TitlesCommonBadges />

      <Badges />
      <HorizontalRow />

      <AsideContent />
    </section>
  );
};
