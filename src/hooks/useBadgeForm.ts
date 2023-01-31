import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { formSchema, TFormSchema } from '../types/FormSchemaType';

export const useBadgeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      badgeStyle: 'for-the-badge',
      badgeText: 'TypeScript',
      iconName: 'TypeScript',
      logoColor: '#4470b3',
      leftSideColor: '#a7cbf1',
      rightSideColor: '#363695',
      link: 'https://typescriptlang.org',
    },
  });

  return { register, handleSubmit, errors, setValue };
};
