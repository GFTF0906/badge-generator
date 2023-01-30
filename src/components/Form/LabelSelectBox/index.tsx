import { UseFormRegister } from 'react-hook-form';
import { TFormSchema } from '../../../types/FormSchemaType';
import { ErrorParagraph } from '../../Error/ErrorParagraph';
import { Label } from '../Label';

type LabelSelectBoxProps = {
  selectID: 'badgeStyle';
  labelText: string;
  register: UseFormRegister<TFormSchema>;
  errorMessage: string;
};

export const LabelSelectBox = ({
  selectID,
  labelText,
  register,
  errorMessage,
}: LabelSelectBoxProps) => {
  return (
    <section className="flex flex-col">
      <Label
        htmlFor={selectID}
        text={labelText}
      />
      <select
        id={selectID}
        {...register(selectID)}
      >
        <option value="for-the-badge">For The Badge</option>
        <option value="plastic">Plastic</option>
        <option value="social">Social</option>
        <option value="flat">Flat</option>
        <option value="flat-square">Flat Square</option>
      </select>
      <ErrorParagraph text={errorMessage} />
    </section>
  );
};
