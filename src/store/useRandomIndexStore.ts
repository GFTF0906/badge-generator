import { create } from 'zustand';
import { defaultValues } from './../constants/defaultBadgeValues';
import { generateRandomIndex } from './../utils/generateRandomIndex';

type TRandomIndexState = {
  randomIndex: number;
};

export const useRandomIndexStore = create<TRandomIndexState>()(() => {
  const randomIndex = generateRandomIndex(defaultValues);

  return {
    randomIndex,
  };
});
