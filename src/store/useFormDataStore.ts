import { create } from 'zustand';
import { TFormSchema } from '../types/FormSchemaType';

type TFormData = {
  formData: TFormSchema;
  setFormData: (newData: TFormSchema) => void;
};

export const useFormDataStore = create<TFormData>()((set) => ({
  formData: {
    badgeStyle: 'for-the-badge',
    badgeText: '',
    iconName: '',
    logoColor: '',
    rightSideColor: '',
    leftSideColor: '',
    link: '',
  },
  setFormData: (newData) => set(() => ({ formData: newData })),
}));
