import { BASE_URL } from '../constants/baseUrl';
import { TFormSchema } from './../types/FormSchemaType';
import { formatColor } from './formatColor';

export const buildUrl = ({
  badgeStyle,
  badgeText,
  iconName,
  leftSideColor,
  link,
  logoColor,
  rightSideColor,
}: TFormSchema) => {
  return `${BASE_URL}${badgeText}-000?style=${badgeStyle}&logo=${iconName}&logoColor=${formatColor(
    logoColor
  )}&labelColor=${formatColor(leftSideColor)}&color=${formatColor(
    rightSideColor
  )}&link=${link}`;
};
