import { create } from 'zustand';
import { defaultValues } from '../constants/defaultBadgeValues';
import { BASE_URL } from './../constants/baseUrl';
import { formatColor } from './../utils/formatColor';

type BadgeState = {
  badgeUrl: string;
  setBadgeUrl: (newUrl: string) => void;
};

export const useBadgeStore = create<BadgeState>()((set) => {
  const {
    badgeStyle,
    badgeText,
    iconName,
    leftSideColor,
    logoColor,
    rightSideColor,
  } = defaultValues;

  return {
    badgeUrl: `${BASE_URL}${badgeText}-000?style=${badgeStyle}&logo=${iconName}&logoColor=${formatColor(
      logoColor
    )}&labelColor=${formatColor(leftSideColor)}&color=${formatColor(
      rightSideColor
    )}`,
    setBadgeUrl: (newUrl) => set(() => ({ badgeUrl: newUrl })),
  };
});
