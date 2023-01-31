import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useFormDataStore } from '../store/useFormDataStore';
import { formSchema, TFormSchema } from '../types/FormSchemaType';

export const useBadgeForm = () => {
  const formDataFromStore = useFormDataStore((state) => state.formData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      badgeStyle: formDataFromStore.badgeStyle,
      badgeText: formDataFromStore.badgeText,
      iconName: formDataFromStore.iconName,
      logoColor: formDataFromStore.logoColor,
      leftSideColor: formDataFromStore.leftSideColor,
      rightSideColor: formDataFromStore.rightSideColor,
      link: formDataFromStore.link,
    },
  });

  return { register, handleSubmit, errors, getValues, setValue };
};
