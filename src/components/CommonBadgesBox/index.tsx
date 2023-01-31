import { defaultValues } from '../../constants/defaultBadgeValues';
import { useBadgeStore } from '../../store/useBadgeStore';
import { useFormDataStore } from '../../store/useFormDataStore';
import { buildUrl } from '../../utils/buildUrl';
import { SubTitle } from '../Headings/SubTitle';
import { HorizontalRow } from '../Row/HorizontalRow';

export const CommonBadgesBox = () => {
  const setBadgeUrl = useBadgeStore((state) => state.setBadgeUrl);
  const setFormDataFromStore = useFormDataStore((state) => state.setFormData);

  return (
    <section className="absolute left-2 top-2 w-[12%] rounded border-2 border-gray-600 bg-gray-800 p-6">
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

      {defaultValues.map((badgeValue) => {
        const badgeUrl = buildUrl({ ...badgeValue });
        return (
          <img
            key={badgeValue.iconName}
            src={badgeUrl}
            alt={`${badgeValue.badgeText} Badge.`}
            className="cursor-pointer pb-2"
            onClick={() => {
              setBadgeUrl(badgeUrl);
              setFormDataFromStore(badgeValue);
            }}
          />
        );
      })}

      <HorizontalRow />
      <p className="">
        To see more badges checkout&nbsp;
        <a
          href="https://github.com/Ileriayo/markdown-badges"
          className="text-purple-400 transition-all hover:text-opacity-80 hover:underline"
        >
          this amazing Github repository
        </a>
        .
      </p>
    </section>
  );
};
