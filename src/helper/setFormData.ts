import { UseFormSetValue } from 'react-hook-form';
import { TFormSchema } from './../types/FormSchemaType';
export const setFormData = ({
  setValue,
  formDataFromStore,
}: {
  setValue: UseFormSetValue<TFormSchema>;
  formDataFromStore: TFormSchema;
}) => {
  const {
    badgeStyle,
    badgeText,
    logoColor,
    leftSideColor,
    rightSideColor,
    iconName,
    link,
  } = formDataFromStore;

  setValue('badgeStyle', badgeStyle);
  setValue('badgeText', badgeText);
  setValue('logoColor', logoColor);
  setValue('leftSideColor', leftSideColor);
  setValue('rightSideColor', rightSideColor);
  setValue('iconName', iconName);
  setValue('link', link);
};
