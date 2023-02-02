import { defaultValues } from '../../../constants/defaultBadgeValues';
import { useBadgeStore } from '../../../store/useBadgeStore';
import { useFormDataStore } from '../../../store/useFormDataStore';
import { buildUrl } from '../../../utils/buildUrl';

export const Badges = () => {
  const setBadgeUrl = useBadgeStore((state) => state.setBadgeUrl);
  const setFormDataFromStore = useFormDataStore((state) => state.setFormData);

  return (
    <>
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
    </>
  );
};
