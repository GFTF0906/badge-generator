import { useEffect } from 'react';
import { SubmitHandler } from 'react-hook-form';

import { useBadgeStore } from '../../store/useBadgeStore';

import { Button } from '../Button';
import { LabelInputBox } from './LabelInputBox';
import { LabelSelectBox } from './LabelSelectBox';

import { defaultValues } from '../../constants/defaultBadgeValues';
import { setFormData } from '../../helper/setFormData';
import { useBadgeForm } from '../../hooks/useBadgeForm';
import { useFormDataStore } from '../../store/useFormDataStore';
import { useRandomIndexStore } from '../../store/useRandomIndexStore';
import { TFormSchema } from '../../types/FormSchemaType';
import { buildUrl } from '../../utils/buildUrl';

export const FormNewGenerateBadge = () => {
  const formDataFromStore = useFormDataStore((state) => state.formData);
  const randomIndex = useRandomIndexStore((state) => state.randomIndex);

  const setFormDataFromStore = useFormDataStore((state) => state.setFormData);
  const setBadgeUrl = useBadgeStore((state) => state.setBadgeUrl);

  const { register, handleSubmit, errors, setValue } = useBadgeForm();

  const onSubmit: SubmitHandler<TFormSchema> = (data) => {
    setFormDataFromStore(data);

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

    setFormData({ setValue, formDataFromStore });
  };

  useEffect(() => {
    setFormDataFromStore(defaultValues[randomIndex]);
  }, []);

  useEffect(() => {
    setFormData({ setValue, formDataFromStore });
  }, [formDataFromStore]);

  return (
    <section className="rounded border-2 border-gray-400 bg-gray-100 p-6 text-black shadow-2xl shadow-[#b1a1be3a]">
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
          className="mt-12 w-full border-2 border-[#cead1a] bg-[#F9DC5C] font-semibold transition-all hover:border-opacity-70 hover:bg-opacity-90"
        />
      </form>
    </section>
  );
};
