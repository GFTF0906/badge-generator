import { create } from 'zustand';

type TBadgeActions = {
  selectedOption: string;
  setSelectedOption: (selected: string) => void;
  isHovered: boolean;
  setIsHovered: () => void;
};

export const useBadgeActionsStore = create<TBadgeActions>()((set) => {
  return {
    selectedOption: 'url',
    setSelectedOption: (selected) => set(() => ({ selectedOption: selected })),
    isHovered: false,
    setIsHovered: () => set((state) => ({ isHovered: !state.isHovered })),
  };
});
