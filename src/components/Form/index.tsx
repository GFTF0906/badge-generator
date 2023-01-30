import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BASE_URL } from '../../constants/baseUrl';
import { useBadgeStore } from '../../store/useBadgeStore';
import { formSchema, TFormSchema } from '../../types/FormSchemaType';
import { formatColor } from '../../utils/formatColor';
import { Button } from '../Button';
import { LabelInputBox } from './LabelInputBox';
import { LabelSelectBox } from './LabelSelectBox';

export const FormNewGenerateBadge = () => {
  const setBadgeUrl = useBadgeStore((state) => state.setBadgeUrl);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
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

  const onSubmit: SubmitHandler<TFormSchema> = (data) => {
    const {
      badgeStyle,
      badgeText,
      logoColor,
      leftSideColor,
      rightSideColor,
      iconName,
    } = data;

    const url = `${BASE_URL}${badgeText}-000?style=${badgeStyle}&logo=${iconName}&logoColor=${formatColor(
      logoColor
    )}&labelColor=${formatColor(leftSideColor)}&color=${formatColor(
      rightSideColor
    )}`;

    setBadgeUrl(url);
    reset();
  };

  return (
    <section className="p-6 rounded text-black bg-sky-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="sm:grid sm:grid-cols-2 sm:gap-8">
          <section>
            <LabelInputBox
              inputID="iconName"
              inputType="text"
              labelText="Icon Name"
              register={register}
              errorMessage={errors['iconName']?.message ?? ''}
            />
            <LabelInputBox
              inputID="badgeText"
              inputType="text"
              labelText="Badge Text"
              register={register}
              errorMessage={errors['badgeText']?.message ?? ''}
            />
            <LabelInputBox
              inputID="link"
              inputType="text"
              labelText="Any link you may want the badge to redirect to"
              register={register}
              errorMessage={errors['link']?.message ?? ''}
            />
          </section>
          <section>
            <LabelInputBox
              inputID="logoColor"
              inputType="color"
              labelText="Logo Color"
              register={register}
              errorMessage={errors['logoColor']?.message ?? ''}
            />
            <LabelInputBox
              inputID="leftSideColor"
              inputType="color"
              labelText="Left Side Color"
              register={register}
              errorMessage={errors['leftSideColor']?.message ?? ''}
            />
            <LabelInputBox
              inputID="rightSideColor"
              inputType="color"
              labelText="Right Side Color"
              register={register}
              errorMessage={errors['rightSideColor']?.message ?? ''}
            />
          </section>
        </section>
        <LabelSelectBox
          selectID="badgeStyle"
          labelText="Badge Style"
          register={register}
          errorMessage={errors['badgeStyle']?.message ?? ''}
        />
        <Button
          text="Generate"
          className="mt-4 transition-all w-full text-[#F5F5F5] bg-sky-800 hover:bg-opacity-80"
        />
      </form>
    </section>
  );
};
