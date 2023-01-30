import { z } from 'zod';

export const formSchema = z.object({
  iconName: z.string().min(1, 'Icon name is required.'),
  badgeText: z.string().min(1, 'Badge text is required.'),
  badgeStyle: z.enum([
    'for-the-badge',
    'plastic',
    'social',
    'flat',
    'flat-square',
  ]),
  link: z.string().url().min(1, 'Link is required.'),
  logoColor: z.string().min(1, 'Logo color is required.'),
  leftSideColor: z.string().min(1, 'Left side color is required.'),
  rightSideColor: z.string().min(1, 'Right side color is required.'),
});

export type TFormSchema = z.input<typeof formSchema>;
