import { Manrope, Lora } from 'next/font/google';

export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  preload: true,
  variable: '--manrope-font',
});

export const lora = Lora({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  preload: true,
  variable: '--lora-font',
});
