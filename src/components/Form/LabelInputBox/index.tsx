import { UseFormRegister } from 'react-hook-form';
import { TFormSchema } from '../../../types/FormSchemaType';
import { ErrorParagraph } from '../../Error/ErrorParagraph';
import { Label } from '../Label';

type LabelInputBoxProps = {
  inputID:
    | 'iconName'
    | 'badgeText'
    | 'badgeStyle'
    | 'link'
    | 'logoColor'
    | 'leftSideColor'
    | 'rightSideColor';
  inputType: 'text' | 'color';
  labelText: string;
  register: UseFormRegister<TFormSchema>;
  errorMessage: string;
};

export const LabelInputBox = ({
  inputID,
  inputType,
  labelText,
  register,
  errorMessage,
}: LabelInputBoxProps) => {
  return (
    <section className="flex flex-col mb-2">
      <Label
        htmlFor={inputID}
        text={labelText}
      />
      <input
        type={inputType}
        id={inputID}
        {...register(inputID)}
      />
      <ErrorParagraph text={errorMessage} />
    </section>
  );
};
