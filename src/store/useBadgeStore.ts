import { create } from 'zustand';
import { defaultValues } from '../constants/defaultBadgeValues';
import { buildUrl } from '../utils/buildUrl';

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
    link,
  } = defaultValues;

  const badgeUrl = buildUrl({
    badgeStyle,
    badgeText,
    iconName,
    leftSideColor,
    link,
    logoColor,
    rightSideColor,
  });

  return {
    badgeUrl,
    setBadgeUrl: (newUrl) => set(() => ({ badgeUrl: newUrl })),
  };
});
