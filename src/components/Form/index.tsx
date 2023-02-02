import { useEffect } from 'react';

import { Button } from '../Button';

import { SubmitHandler } from 'react-hook-form';
import { defaultValues } from '../../constants/defaultBadgeValues';
import { setFormData } from '../../helper/setFormData';
import { useBadgeForm } from '../../hooks/useBadgeForm';
import { useBadgeStore } from '../../store/useBadgeStore';
import { useFormDataStore } from '../../store/useFormDataStore';
import { useRandomIndexStore } from '../../store/useRandomIndexStore';
import { TFormSchema } from '../../types/FormSchemaType';
import { buildUrl } from '../../utils/buildUrl';
import { Inputs } from './Inputs';

export const FormNewGenerateBadge = () => {
  const formDataFromStore = useFormDataStore((state) => state.formData);
  const randomIndex = useRandomIndexStore((state) => state.randomIndex);

  const setFormDataFromStore = useFormDataStore((state) => state.setFormData);
  const setBadgeUrl = useBadgeStore((state) => state.setBadgeUrl);

  const { errors, register, handleSubmit, setValue } = useBadgeForm();

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
        <Inputs
          register={register}
          errors={errors}
        />
        <Button
          text="Generate"
          isCopyButton={false}
          className="mt-12 w-full border-2 border-[#cead1a] bg-[#F9DC5C] font-semibold transition-all hover:border-opacity-70 hover:bg-opacity-90"
        />
      </form>
    </section>
  );
};
