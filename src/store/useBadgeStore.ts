import { create } from 'zustand';
import { defaultValues } from '../constants/defaultBadgeValues';
import { buildUrl } from '../utils/buildUrl';
import { useRandomIndexStore } from './useRandomIndexStore';

type TBadgeState = {
  badgeUrl: string;
  setBadgeUrl: (newUrl: string) => void;
};

export const useBadgeStore = create<TBadgeState>()((set) => {
  const randomIndex = useRandomIndexStore.getState().randomIndex;

  const {
    badgeStyle,
    badgeText,
    iconName,
    leftSideColor,
    logoColor,
    rightSideColor,
    link,
  } = defaultValues[randomIndex];

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
