import { SubTitle } from '../../Headings/SubTitle';
import { HorizontalRow } from '../../Row/HorizontalRow';

export const TitlesCommonBadges = () => {
  return (
    <section className="flex flex-col items-center justify-center pb-4">
      <SubTitle
        text="Common Badges"
        className="opacity-70"
      />
      <SubTitle
        text="Click to see it's styles"
        className="text-xs opacity-70"
      />
      <HorizontalRow />
    </section>
  );
};
