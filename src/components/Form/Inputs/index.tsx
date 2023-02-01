import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { TFormSchema } from '../../../types/FormSchemaType';
import { LabelInputBox } from '../LabelInputBox';
import { LabelSelectBox } from '../LabelSelectBox';

type InputsProps = {
  register: UseFormRegister<TFormSchema>;
  errors: Partial<FieldErrorsImpl<TFormSchema>>;
};

export const Inputs = ({ register, errors }: InputsProps) => {
  return (
    <>
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
    </>
  );
};
