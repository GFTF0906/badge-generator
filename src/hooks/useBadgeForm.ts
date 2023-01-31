import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { defaultValues } from '../constants/defaultBadgeValues';
import { useRandomIndexStore } from '../store/useRandomIndexStore';
import { formSchema, TFormSchema } from '../types/FormSchemaType';

export const useBadgeForm = () => {
  const randomIndex = useRandomIndexStore((state) => state.randomIndex);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      badgeStyle: defaultValues[randomIndex].badgeStyle,
      badgeText: defaultValues[randomIndex].badgeText,
      iconName: defaultValues[randomIndex].iconName,
      logoColor: defaultValues[randomIndex].logoColor,
      leftSideColor: defaultValues[randomIndex].leftSideColor,
      rightSideColor: defaultValues[randomIndex].rightSideColor,
      link: defaultValues[randomIndex].link,
    },
  });

  return { register, handleSubmit, errors, setValue };
};
