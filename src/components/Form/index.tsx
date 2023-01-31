import { SubmitHandler } from 'react-hook-form';

import { useBadgeStore } from '../../store/useBadgeStore';

import { Button } from '../Button';
import { LabelInputBox } from './LabelInputBox';
import { LabelSelectBox } from './LabelSelectBox';

import { useBadgeForm } from '../../hooks/useBadgeForm';
import { TFormSchema } from '../../types/FormSchemaType';
import { buildUrl } from '../../utils/buildUrl';

export const FormNewGenerateBadge = () => {
  const setBadgeUrl = useBadgeStore((state) => state.setBadgeUrl);
  const { register, handleSubmit, errors, setValue } = useBadgeForm();

  const onSubmit: SubmitHandler<TFormSchema> = (data) => {
    const {
      badgeStyle,
      badgeText,
      logoColor,
      leftSideColor,
      rightSideColor,
      iconName,
      link,
    } = data;

    const url = buildUrl({
      badgeStyle,
      badgeText,
      iconName,
      leftSideColor,
      link,
      logoColor,
      rightSideColor,
    });
    setBadgeUrl(url);

    setValue('badgeStyle', badgeStyle);
    setValue('badgeText', badgeText);
    setValue('logoColor', logoColor);
    setValue('leftSideColor', leftSideColor);
    setValue('rightSideColor', rightSideColor);
    setValue('iconName', iconName);
    setValue('link', link);
  };

  return (
    <section className="p-6 rounded text-black border-2 border-[#d4c8c8] shadow-2xl shadow-[#b1a1be3a] bg-[#e8e8e8]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="sm:grid sm:grid-cols-2 sm:gap-12">
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
              labelText="Badge redirect link"
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
          className="mt-12 transition-all w-full font-semibold border-2 border-[#cead1a] bg-[#F9DC5C] hover:bg-opacity-90 hover:border-opacity-70"
        />
      </form>
    </section>
  );
};
